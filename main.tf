terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~>5.0"
    }
  }

  backend "s3" {
    bucket  = "eric-shrader-terraform-state"
    key     = "eric-shrader.com/terraform.tfstate"
    region  = "us-east-2"
    encrypt = true
  }
}

provider "aws" {
  region = "us-east-2"
}
provider "aws" {
  region = "us-east-1"
  alias  = "us-east-1"
}

resource "aws_s3_bucket" "website_bucket" {
  bucket = "eric-shrader.com"

  tags = {
    Name        = "eric-shrader.com"
    Environment = "production"
  }
}

resource "aws_s3_bucket_website_configuration" "website_configuration" {
  bucket = aws_s3_bucket.website_bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

resource "aws_s3_bucket_public_access_block" "allow_public_access" {
  bucket = aws_s3_bucket.website_bucket.id
}

resource "aws_s3_bucket_policy" "allow_public_access" {
  bucket = aws_s3_bucket.website_bucket.id
  policy = data.aws_iam_policy_document.allow_public_access.json
}

data "aws_iam_policy_document" "allow_public_access" {
  statement {
    effect = "Allow"

    principals {
      type        = "*"
      identifiers = ["*"]
    }

    actions = ["s3:GetObject"]

    resources = ["arn:aws:s3:::eric-shrader.com/*"]
  }
}

resource "aws_s3_object" "files" {
  for_each = fileset("./build/", "**")
  bucket   = aws_s3_bucket.website_bucket.bucket
  key      = each.value
  source   = "./build/${each.value}"
  etag     = filemd5("./build/${each.value}")

  # Determine the Content-Type based on the file extension
  content_type = lookup({
    "html" = "text/html",
    "css"  = "text/css",
    "js"   = "application/javascript",
    "jpg"  = "image/jpeg",
    "png"  = "image/png",
    "pdf"  = "application/pdf"
  }, element(split(".", each.value), length(split(".", each.value)) - 1), "application/octet-stream")
}

resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name = aws_s3_bucket_website_configuration.website_configuration.website_endpoint
    origin_id   = aws_s3_bucket.website_bucket.bucket
    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1.2"]
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  comment             = "distribution for eric-shrader.com"
  default_root_object = "index.html"
  aliases             = ["eric-shrader.com", "www.eric-shrader.com"]

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = aws_s3_bucket.website_bucket.bucket

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 86400
    max_ttl                = 31536000
  }

  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate.cert.arn
    ssl_support_method  = "sni-only"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
      locations        = []
    }
  }

}

data "aws_route53_zone" "domain" {
  zone_id = "Z0919946U4UOAHCWJEV2"
}

resource "aws_route53_record" "A-record" {
  zone_id = data.aws_route53_zone.domain.zone_id
  name    = "eric-shrader.com"
  type    = "A"
  alias {
    name                   = aws_cloudfront_distribution.s3_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.s3_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www-CNAME-record" {
  zone_id = data.aws_route53_zone.domain.zone_id
  name    = "www.eric-shrader.com"
  type    = "CNAME"
  ttl     = 300
  records = ["eric-shrader.com"]
}

resource "aws_acm_certificate" "cert" {
  provider                  = aws.us-east-1
  domain_name               = "eric-shrader.com"
  subject_alternative_names = ["www.eric-shrader.com"]
  validation_method         = "DNS"
}
