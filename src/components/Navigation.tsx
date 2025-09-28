import React, { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Menu,
  X,
  ShoppingCart,
  User,
  BookOpen,
  Mail,
  Info,
  Building2,
  FileText,
  ChevronDown,
} from "lucide-react";

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  isLoggedIn: boolean;
  cartCount: number;
}

export function Navigation({
  currentPage,
  setCurrentPage,
  isLoggedIn,
  cartCount,
}: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [organisationsDropdown, setOrganisationsDropdown] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: null },
    { id: "about", label: "About", icon: Info },
    { id: "courses", label: "Courses", icon: BookOpen },
    // {
    //   id: "services",
    //   label: "Services",
    //   icon: null,
    //   dropdown: [
    //     { id: "consulting", label: "Consulting" },
    //     { id: "resources", label: "Resources" },
    //   ],
    // },
    // {
    //   id: 'organisations',
    //   label: 'For Organisations',
    //   icon: Building2,
    //   dropdown: [
    //     { id: 'organisations', label: 'Overview' },
    //     { id: 'corporate-training', label: 'Training Packages' },
    //     { id: 'case-studies', label: 'Case Studies' }
    //   ]
    // },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => setCurrentPage("home")}
          >
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 gradient-bg rounded-lg flex items-center justify-center">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold gradient-text">
                iLearning Solutions
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <div key={item.id} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => {
                      if (item.id === "services") setServicesDropdown(true);
                      if (item.id === "organisations")
                        setOrganisationsDropdown(true);
                    }}
                    onMouseLeave={() => {
                      if (item.id === "services") setServicesDropdown(false);
                      if (item.id === "organisations")
                        setOrganisationsDropdown(false);
                    }}
                  >
                    <motion.button
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0 }}
                      className={`relative px-2 lg:px-3 py-2 transition-colors flex items-center space-x-1 text-sm lg:text-base ${
                        (item.id === "services" &&
                          ["consulting", "resources"].includes(currentPage)) ||
                        (item.id === "organisations" &&
                          [
                            "organisations",
                            "corporate-training",
                            "case-studies",
                          ].includes(currentPage))
                          ? "text-primary font-medium"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-3 h-3 lg:w-4 lg:h-4" />
                      {((item.id === "services" &&
                        ["consulting", "resources"].includes(currentPage)) ||
                        (item.id === "organisations" &&
                          [
                            "organisations",
                            "corporate-training",
                            "case-studies",
                          ].includes(currentPage))) && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                        />
                      )}
                    </motion.button>

                    {((item.id === "services" && servicesDropdown) ||
                      (item.id === "organisations" &&
                        organisationsDropdown)) && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-border z-50"
                      >
                        <div className="py-2">
                          {item.dropdown.map((dropdownItem) => (
                            <button
                              key={dropdownItem.id}
                              onClick={() => setCurrentPage(dropdownItem.id)}
                              className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                                currentPage === dropdownItem.id
                                  ? "bg-secondary text-primary font-medium"
                                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
                              }`}
                            >
                              {dropdownItem.label}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                    onClick={() => setCurrentPage(item.id)}
                    className={`relative px-2 lg:px-3 py-2 transition-colors text-sm lg:text-base ${
                      currentPage === item.id
                        ? "text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                    {currentPage === item.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                      />
                    )}
                  </motion.button>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentPage("cart")}
                className="relative"
              >
                <ShoppingCart className="w-4 h-4 lg:w-5 lg:h-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-4 w-4 lg:h-5 lg:w-5 p-0 flex items-center justify-center text-xs bg-accent">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </motion.div>

            {isLoggedIn ? (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCurrentPage("profile")}
                  className="text-sm lg:text-base"
                >
                  <User className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                  Profile
                </Button>
              </motion.div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => setCurrentPage("auth")}
                  className="gradient-bg text-white text-sm lg:text-base px-3 lg:px-4 py-2"
                  size="sm"
                >
                  Sign In
                </Button>
              </motion.div>
            )}
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentPage("cart")}
              className="relative"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-4 w-4 p-0 flex items-center justify-center text-xs bg-accent">
                  {cartCount}
                </Badge>
              )}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-white"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.id}>
                  {item.dropdown ? (
                    <div className="space-y-1">
                      <div className="px-3 py-2 font-medium text-sm text-gray-500">
                        {item.label}
                      </div>
                      {item.dropdown.map((dropdownItem) => (
                        <button
                          key={dropdownItem.id}
                          onClick={() => {
                            setCurrentPage(dropdownItem.id);
                            setIsMenuOpen(false);
                          }}
                          className={`block w-full text-left px-6 py-2 rounded-md transition-colors text-sm ${
                            currentPage === dropdownItem.id
                              ? "bg-secondary text-primary font-medium"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted"
                          }`}
                        >
                          {dropdownItem.label}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setCurrentPage(item.id);
                        setIsMenuOpen(false);
                      }}
                      className={`block w-full text-left px-3 py-2 rounded-md transition-colors text-sm ${
                        currentPage === item.id
                          ? "bg-secondary text-primary font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}

              <div className="pt-2 border-t border-border">
                {isLoggedIn ? (
                  <button
                    onClick={() => {
                      setCurrentPage("dashboard");
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center w-full px-3 py-2 text-muted-foreground hover:text-foreground text-sm"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Dashboard
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setCurrentPage("auth");
                      setIsMenuOpen(false);
                    }}
                    className="w-full mt-2 gradient-bg text-white py-2 px-4 rounded-md font-medium text-sm"
                  >
                    Sign In
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
