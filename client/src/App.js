import Header from "./components/Header";
import Error from "./components/Error";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { LoginContext } from "./components/ContextProvider/Context";

import Home from './Pages/Home';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import FurnitureCategories from './components/FurnitureCategories';
import Sofas from './components/Sofas';
import Tables from './components/Tables';
import Beds from './components/Beds';
import Wardrobes from './components/Wardrobes';
import StudyTables from './components/StudyTables';
import AddToCart from './components/AddToCart';

function App() {
  const [data, setData] = useState(false);
  const { setLoginData } = useContext(LoginContext);
  const history = useNavigate();

  const DashboardValid = async () => {
    let token = localStorage.getItem("usersdatatoken");
    const res = await fetch("/validuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    });
    const userData = await res.json();

    if (userData.status === 401 || !userData) {
      console.log("user not valid");
    } else {
      console.log("user verify");
      setLoginData(userData);
      history("/dash");
    }
  }

  useEffect(() => {
    setTimeout(() => {
      DashboardValid();
      setData(true);
    }, 2000);
  }, []);

  return (
    <>
      {data ? (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/furniture" element={<FurnitureCategories />} />
            <Route path="/sofas" element={<Sofas />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/beds" element={<Beds />} />
            <Route path="/wardrobes" element={<Wardrobes />} />
            <Route path="/studytables" element={<StudyTables />} />
            <Route path="/addtocart" element={<AddToCart />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
          Loading... &nbsp;
          <CircularProgress />
        </Box>
      )}
    </>
  );
}

export default App;
