import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MacBookAir1 from "./pages/MacBookAir1";
import NGORegister from "./pages/NGORegister";
import MainFrame from "./pages/MainFrame";
import MainFrame1 from "./pages/MainFrame1";
import About from "./pages/About";
import SearchDonor from "./pages/Search";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/ngo-register":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/donor-register":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MacBookAir1 />} />  
      <Route path="/ngo-register" element={<NGORegister />} />   
      <Route path="/login" element={<MainFrame />} />
      <Route path="/donor-register" element={<MainFrame1 />} />
      <Route path="/about" element={< About/>} />
      <Route path="/search" element={<SearchDonor/>}/>
    </Routes>
  );
}
export default App;
