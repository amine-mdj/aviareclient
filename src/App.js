import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import React, { Suspense } from 'react'

import { QueryClientProvider, QueryClient } from "react-query";

import './app1.scss';




import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import Requireauth from "./components/Requireauth"
import Requireadmin from "./components/Requireadmin"

import Home from "./pages/Home";
import Quisommesnous from "./pages/Quisommenous";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Canarilist from "./pages/Canarilist";
import Moncompte from "./pages/Moncompte";
import Addoiseaux from "./pages/admin/Addoiseaux";
import Utilisateures from "./pages/admin/Utilisateures";
import Oiseaux from "./pages/admin/Oiseaux";
import Admin from "./pages/Admin";

const Administrator = React.lazy(() => import('./reactadminframwork/Administrator'))

 const queryclient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryclient}>
    <Router>
      <Navbar />
      <div className="container mainhome">
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/qui-sommes-nous" element={<Quisommesnous />} />
          <Route path="/acceuil/oiseaux/canarilist" element={<Canarilist />} />
          <Route element={<Requireauth/>}><Route path="/moncompte" element={<Moncompte />} /></Route>
          <Route element={<Requireadmin/>}><Route path="/admin/create" element={<Addoiseaux />} /></Route>

          <Route element={<Requireadmin/>}>
            <Route path="/admin/*" element={
          <Suspense fallback={<div>Loading...</div>}>
            <Administrator/>
          </Suspense>} />
          </Route>


          {/* <Route element={<Requireadmin/>}>
            <Route path="/admin/*" element={<Admin/>} >
            <Route path="utilisateurs" element={<Utilisateures/>} />
            <Route path="oiseaux" element={<Oiseaux/>} />
             </Route>
          </Route> */}


          
          
        </Routes>
      </div>
      <Footer />
    </Router>
    </QueryClientProvider>
  );
}

export default App;
