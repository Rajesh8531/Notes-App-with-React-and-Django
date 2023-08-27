import Update from './templates/Update'
import './App.css'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import Head,{loader as HeadLoader} from './templates/Head'
import Add from './templates/Add'
import Detail,{loader as DetailLoader} from './templates/Detail'



function App() {

  const router = createBrowserRouter(createRoutesFromElements(
      <>
          <Route path='/' element={<Head />} loader={HeadLoader}>
              <Route path='add' element={<Add data={{title : '',body : ''}} />} />              
          </Route>
          <Route path=':id' element={<Detail /> } loader={DetailLoader}  />
      </>
  ))

  return (
    <RouterProvider router = {router} />
  )
    

}

export default App
