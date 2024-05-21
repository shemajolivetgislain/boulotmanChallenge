import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../layout";
import HomeDashboard from "../pages/Dashboard";
import ProductPage from "../pages/Product";
import NotFound from "../pages/NotFound";
import NewProduct from "../pages/Product/NewProduct";

const Approutes = () => {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<HomeDashboard />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/newProducts" element={<NewProduct />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Approutes;
