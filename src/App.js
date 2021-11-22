import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import {
  Home,
  Info,
  SingleRes,
  OrderCart,
  Login,
  Setting,
} from "./pages/index";
// Components
import { Navbar, Footer } from "./components/index";

function App() {
  const baseUrl = "/food-ordering-app-client";
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={`${baseUrl}`} element={<Home />} />
      </Routes>
      <Routes>
        <Route path={`${baseUrl}/login`} element={<Login />} />
      </Routes>
      <Routes>
        <Route path={`${baseUrl}/info/type`} element={<Info />} />
      </Routes>
      <Routes>
        <Route path={`${baseUrl}/restaurant/:id`} element={<SingleRes />} />
      </Routes>
      <Routes>
        <Route path={`${baseUrl}/cart`} element={<OrderCart />} />
      </Routes>
      <Routes>
        <Route path={`${baseUrl}/user/type`} element={<Setting />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
