import React, { useState } from "react";
import { motion } from "motion/react";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { LandingPage } from "./components/pages/LandingPage";
import { AboutPage } from "./components/pages/AboutPage";
import { CoursesPage } from "./components/pages/CoursesPage";
import { CourseDetailPage } from "./components/pages/CourseDetailPage";
import { AuthPage } from "./components/pages/AuthPage";
import { CartPage } from "./components/pages/CartPage";
import { CheckoutPage } from "./components/pages/CheckoutPage";
import { ContactPage } from "./components/pages/ContactPage";
import { ConsultingPage } from "./components/pages/ConsultingPage";
import { ResourcesPage } from "./components/pages/ResourcesPage";
import { OrganisationsPage } from "./components/pages/OrganisationsPage";
import { CorporateTrainingPage } from "./components/pages/CorporateTrainingPage";
import { CaseStudiesPage } from "./components/pages/CaseStudiesPage";
import { PrivacyPolicyPage } from "./components/pages/PrivacyPolicyPage";
import { TermsPage } from "./components/pages/TermsPage";
import { ProfilePage } from "./components/pages/ProfilePage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <LandingPage
            setCurrentPage={setCurrentPage}
            setSelectedCourse={setSelectedCourse}
          />
        );
      case "about":
        return <AboutPage />;
      case "courses":
        return (
          <CoursesPage
            setCurrentPage={setCurrentPage}
            setSelectedCourse={setSelectedCourse}
          />
        );
      case "course-detail":
        return (
          <CourseDetailPage
            course={selectedCourse}
            setCurrentPage={setCurrentPage}
            cart={cart}
            setCart={setCart}
          />
        );
      case "auth":
        return (
          <AuthPage
            setCurrentPage={setCurrentPage}
            setIsLoggedIn={setIsLoggedIn}
          />
        );
      case "cart":
        return (
          <CartPage
            cart={cart}
            setCart={setCart}
            setCurrentPage={setCurrentPage}
          />
        );
      case "checkout":
        return (
          <CheckoutPage
            cart={cart}
            setCurrentPage={setCurrentPage}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
        );
      case "contact":
        return <ContactPage />;
      case "consulting":
        return <ConsultingPage setCurrentPage={setCurrentPage} />;
      case "resources":
        return <ResourcesPage setCurrentPage={setCurrentPage} />;
      case "organisations":
        return <OrganisationsPage setCurrentPage={setCurrentPage} />;
      case "corporate-training":
        return <CorporateTrainingPage setCurrentPage={setCurrentPage} />;
      case "case-studies":
        return <CaseStudiesPage setCurrentPage={setCurrentPage} />;
      case "privacy-policy":
        return <PrivacyPolicyPage setCurrentPage={setCurrentPage} />;
      case "terms":
        return <TermsPage setCurrentPage={setCurrentPage} />;
      case "profile":
        return <ProfilePage setCurrentPage={setCurrentPage} />;
      default:
        return (
          <LandingPage
            setCurrentPage={setCurrentPage}
            setSelectedCourse={setSelectedCourse}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isLoggedIn={isLoggedIn}
        cartCount={cart.length}
      />
      <motion.main
        key={currentPage}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen"
      >
        {renderPage()}
      </motion.main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
