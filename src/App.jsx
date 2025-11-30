
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Notfound from './Pages/Notfound/Notfound'
import Contact from './Pages/Contact/Contact'
import Portofolio from './Pages/Portofolio/Portofolio'
import Layout from './Pages/Layout/Layout'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'

function App() {
const routes= createBrowserRouter([

{path :"/", element : <Layout/>, children :[
 { index:true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portofolio", element: <Portofolio /> },
      { path: "contact", element: <Contact /> },
      {path:"*", element:<Notfound/>}
]}

 
])

  return <RouterProvider router={ routes}/>
}


export default App
