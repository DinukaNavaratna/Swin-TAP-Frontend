import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import "./App.css";
//const Header = lazy(() => import("./components/Header"));
//const TopMenu = lazy(() => import("./components/TopMenu"));
const HomeView = lazy(() => import("./views/Home/Home"));
const SignInView = lazy(() => import("./views/account/SignIn"));
const SignUpView = lazy(() => import("./views/account/SignUp"));
const ForgotPasswordView = lazy(() => import("./views/account/ForgotPassword"));
const AdsInspections = lazy(() => import("./views/account/AdsInspections"));
const WishlistView = lazy(() => import("./views/account/Wishlist"));
const NotificationView = lazy(() => import("./views/account/Notification"));
const MyProfileView = lazy(() => import("./views/account/MyProfile"));
const ProductListView = lazy(() => import("./views/product/List"));
const ProductDetailView = lazy(() => import("./views/product/Detail"));
const StarZoneView = lazy(() => import("./views/product/StarZone"));
const CartView = lazy(() => import("./views/cart/Cart"));
const CheckoutView = lazy(() => import("./views/cart/Checkout"));
const InvoiceView = lazy(() => import("./views/cart/Invoice"));
const DocumentationView = lazy(() => import("./views/Documentation"));
const NotFoundView = lazy(() => import("./views/pages/404"));
const InternalServerErrorView = lazy(() => import("./views/pages/500"));
const ContactUsView = lazy(() => import("./views/pages/ContactUs"));
const InspectionChecklist = lazy(() => import("./views/pages/InspectionChecklist/Checklist"));
const TermsCondition = lazy(() => import("./views/pages/TermsCondition/TermsCondition"));
const BlogView = lazy(() => import("./views/blog/Blog"));
const AboutUsDetailView = lazy(() => import("./views/aboutus/Detail"));

//Admin Components
const AdminPanel = lazy(() => import("./views/admin/AdminPanel"));
const SellerManagement = lazy(() => import("./views/admin/SellerManagement"));
const MechanicManagement = lazy(() =>
  import("./views/admin/MechanicManagement")
);

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        {/* <TopMenu /> */}
        <Suspense
          fallback={
            <div className="centered">
              <img src="/images/loading/preloader.gif" className="loading-img" />
            </div>
          }
        >
          <Routes>
            <Route exact path="/" element={<HomeView />} />
            <Route exact path="/account/signin" element={<SignInView />} />
            <Route exact path="/account/signup" element={<SignUpView />} />
            <Route exact path="/account/forgotpassword" element={<ForgotPasswordView />} />
            <Route exact path="/account/profile" element={<MyProfileView />} />
            <Route exact path="/account/inspections" element={<AdsInspections />} />
            <Route exact path="/account/ads" element={<AdsInspections />} />
            <Route exact path="/account/wishlist" element={<WishlistView />} />
            <Route exact path="/account/notification" element={<NotificationView />} />
            <Route exact path="/listing" element={<ProductListView />} />
            <Route exact path="/listing/:id" element={<ProductDetailView />} />
            <Route exact path="/star/zone" element={<StarZoneView />} />
            <Route exact path="/cart" element={<CartView />} />
            <Route exact path="/checkout" element={<CheckoutView />} />
            <Route exact path="/invoice" element={<InvoiceView />} />
            <Route exact path="/documentation" element={<DocumentationView />} />
            <Route exact path="/contact-us" element={<ContactUsView />} />
            <Route exact path="/checklist" element={<InspectionChecklist />} />
            <Route exact path="/terms-condition" element={<TermsCondition />} />
            <Route exact path="/blog" element={<BlogView />} />
            <Route exact path="/about-us" element={<AboutUsDetailView />} />
            <Route exact path="/admin" element={<AdminPanel />} />
            <Route exact path="/admin/seller-management" element={<SellerManagement />} />
            <Route exact path="/admin/mechanic-management" element={<MechanicManagement />} />
            <Route exact path="/500" element={<InternalServerErrorView />} />
            <Route path="*" element={<NotFoundView />} />
          </Routes>
          <Footer />
        </Suspense>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
