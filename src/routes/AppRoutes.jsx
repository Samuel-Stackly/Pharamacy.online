import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Home from "../pages/Home";
import About from "../pages/About/AboutPage";
import AlphabeticalSearchPage from "../pages/AlphabeticalSearchPage/AlphabeticalSearchPage";
import SearchByAlphabet from "../pages/Home/sections/SearchByAlphabet/SearchByAlphabet";
import ProductDetails from "../pages/Product/ProductDetails";
import ReviewsPage from "../pages/Reviews/ReviewsPage";
import CartPage from "../pages/Cart/CartPage";
import PlaceOrderPage from "../pages/PlaceOrder/PlaceOrderPage";
import DeliveryPage from "../pages/Delivery/DeliveryPage";
import PaymentPage from "../pages/Payment/PaymentPage";
import FavoritesPage from "../pages/Favorites/FavoritesPage";
import ContactsPage from "../pages/Contacts/ContactsPage";
import LicensePage from "../pages/License/LicensePage";
import AboutPage from "../pages/About/AboutPage";
import PersonalAccountPage from "../pages/Profile/PersonalAccountPage";
import HealthBlogPage from "../pages/HealthBlog/HealthBlogPage";
import BlogDetailsPage from "../pages/BlogDetails/BlogDetailsPage";
// import Contact from "../pages/Contact";
// import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="alphabetical-search"
            element={<AlphabeticalSearchPage />}
          />
          <Route
            path="search-by-alphabet/:letter"
            element={<SearchByAlphabet />}
          />

          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />

          <Route
            path="/reviews"
            element={<ReviewsPage />}
          />

          <Route
            path="/cart"
            element={<CartPage />}
          />

          <Route
            path="/checkout"
            element={<PlaceOrderPage />}
          />

          <Route
            path="/delivery"
            element={<DeliveryPage />}
          />

          <Route
            path="/payment"
            element={<PaymentPage />}
          />

          <Route
            path="/favorites"
            element={<FavoritesPage />}
          />

          <Route
            path="/contacts"
            element={<ContactsPage />}
          />

          <Route
            path="/license"
            element={<LicensePage />}
          />

          <Route
            path="/profile"
            element={<PersonalAccountPage />}
          />

          <Route
            path="/health"
            element={<HealthBlogPage />}
          />

          <Route
            path="/blog/:id"
            element={<BlogDetailsPage />}
          />

          {/* <Route path="/contact" element={<Contact />} /> */}
        </Route>
        {/* 
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;