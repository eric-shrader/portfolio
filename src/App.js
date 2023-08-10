import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.scss'

// Layout
import Layout from './components/Layout/index.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
