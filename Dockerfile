# we are using apache server
FROM httpd:2.4

# this copies are static files over to the server
COPY ./build/ /usr/local/apache2/htdocs/

# this COPY command is needed to configure the apache server to redirect all requests to index.html since were
# using client side routing with react-router-dom
COPY ./httpd.conf /usr/local/apache2/conf/