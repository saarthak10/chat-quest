import { lazy, Suspense } from "react";
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import Layout from "../components/Layout/Layout";



const Home = lazy(()=> import('../pages/home/Home'))

const AppRouter = () => {
  return (
        <BrowserRouter>
            <Suspense fallback= {<div>... Loading</div>}>
            <Routes>
                <Route path="/" element={<Layout />}>
                  
                </Route>
                {/* <Route path="/" element={<Home />}/> */}
            </Routes>

            </Suspense>
        </BrowserRouter>
  )
}

export default AppRouter