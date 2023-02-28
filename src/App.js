import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import React, { Suspense } from 'react'
import { QueryClientProvider, QueryClient } from "react-query";
import './app1.scss';


// ------------------- common components ----------------------------------

import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import Requireauth from "./components/Requireauth"
import Requireadmin from "./components/Requireadmin"

// ------------------------- guest routes ------------------------------

import Home from "./pages/Home";
import Quisommesnous from "./pages/Quisommenous";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Canarilist from "./pages/Canarilist";
import Conseils from './pages/conseils'
import Materiels from './pages/materiels'
import Articledetails from "./pages/articledetails";

// ----------------- user routes ------------------------------------------

import Moncompte from "./pages/Moncompte";

// ------------- admin routes --------------------------------
import OiseauxEdit from './reactadminframwork/oiseauxedit'
import MaterialEdit from './reactadminframwork/materialedit'
import Article from './reactadminframwork/article'
import Addmateriels from './reactadminframwork/addmateriel'
import AddOiseaux from './reactadminframwork/addoiseaux'
import Oiseauxshow from './reactadminframwork/oiseauxshow'
import Materialslist from './reactadminframwork/materialslist'
const Administrator = React.lazy(() => import('./reactadminframwork/Administrator'))

const queryclient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryclient}>
      <Suspense fallback={null}>
    <Router>
      <Navbar />
      <div className="container mainhome">
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/qui-sommes-nous" element={<Quisommesnous />} />
          <Route path="/acceuil/oiseaux/canarilist" element={<Canarilist />} />
          <Route path="/astuces-et-conseils" element={<Conseils />} />
          <Route path="/acceuil/materiels" element={<Materiels />} />
          <Route path="/article/:id" element={<Articledetails />} />
          <Route element={<Requireauth/>}><Route path="/moncompte" element={<Moncompte />} /></Route>
          

          <Route element={<Requireadmin/>}>
            <Route path="/admin/" element={
          <Suspense fallback={<div>Loading...</div>}>
            <Administrator/>
          </Suspense>} >
          <Route
          path="oiseauxshow"
          element={<Oiseauxshow />}
        />
        <Route
          path="article"
          element={<Article />}
        />
        <Route
          path="addmateriel"
          element={<Addmateriels />}
        />
        <Route
          path="addoiseaux"
          element={<AddOiseaux />}
        />
        <Route
          path="materialslist"
          element={<Materialslist />}
        />
          <Route
          path="oiseauxedit/:id"
          element={<OiseauxEdit />}
        />
         <Route
          path="materialedit/:id"
          element={<MaterialEdit />}
        />
          </Route>
          </Route>
         </Routes>
      </div>
      <Footer />
    </Router>
    </Suspense>
    </QueryClientProvider>
  );
}

export default App;
