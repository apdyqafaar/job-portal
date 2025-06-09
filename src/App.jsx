import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Button } from "./components/ui/button"
import { Layout } from "./Layouts/Layout"
import { LandingPage } from "./pages/LandingPage"
import { Onboarding } from "./pages/Onboarding"
import { Job } from "./pages/Job"
import { JopLists } from "./pages/Jop-lists"
import { PostJob } from "./pages/Post-job"
import { SavedJob } from "./pages/Saved-job"
import { MyJobs } from "./pages/My-jobs"
import { ThemeProvider } from "./components/ThemProvider"
import './App.css';


function App() {
  
  const router=createBrowserRouter([
    {
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<LandingPage/> 
        },
        {
          path:'/onbording',
          element:<Onboarding/> 
        },
        {
          path:'/jobs',
          element:<JopLists/> 
        },
        {
          path:'/job/:id',
          element:<Job/> 
        },
        {
          path:'/post-job',
          element:<PostJob/> 
        },
        {
          path:'/saved-job',
          element:<SavedJob/> 
        },
        {
          path:'/my-jobs',
          element:<MyJobs/> 
        }
      ]
    }
  ])

  return (
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
       <RouterProvider router={router}/>
    </ThemeProvider>
  
  )
}

export default App
 