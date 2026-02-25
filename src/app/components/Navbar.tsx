import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Menu, X, Shield, Activity, Database, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../utils/cn';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isDashboard = location.pathname.includes('/dashboard');

  if (isDashboard) return null; // Dashboard has its own sidebar

  const navLinks = [
    { name: 'Features', path: '/features' },
    { name: 'Security', path: '/security' },
    { name: 'Pricing', path: '/#pricing' }, // Placeholder
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 border-b backdrop-blur-md transition-colors duration-300",
      theme === 'dark' ? "bg-black/80 border-white/10 text-white" : "bg-white/80 border-black/5 text-black"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className={cn(
              "p-2 rounded-xl transition-all duration-300",
              theme === 'dark' ? "bg-white text-black group-hover:bg-blue-500 group-hover:text-white" : "bg-black text-white group-hover:bg-blue-600"
            )}>
              <Activity className="h-6 w-6" />
            </div>
            <span className="font-bold text-xl tracking-tight">HealthCare Pro</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => cn(
                  "text-sm font-medium transition-colors hover:text-blue-500",
                  isActive ? "text-blue-500" : (theme === 'dark' ? "text-gray-300" : "text-gray-600")
                )}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={cn(
                "p-2 rounded-full transition-colors",
                theme === 'dark' ? "hover:bg-white/10 text-gray-300" : "hover:bg-black/5 text-gray-600"
              )}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <Link to="/login" className={cn(
              "text-sm font-medium hover:text-blue-500 transition-colors",
              theme === 'dark' ? "text-white" : "text-black"
            )}>
              Log in
            </Link>
            
            <Link to="/register" className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105",
              theme === 'dark' 
                ? "bg-white text-black hover:bg-gray-200" 
                : "bg-black text-white hover:bg-gray-800"
            )}>
              Start Integration
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 rounded-md",
                theme === 'dark' ? "text-white hover:bg-white/10" : "text-black hover:bg-black/5"
              )}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={cn(
              "md:hidden border-b",
              theme === 'dark' ? "bg-black border-white/10" : "bg-white border-black/5"
            )}
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => cn(
                    "block px-3 py-2 rounded-md text-base font-medium",
                    isActive 
                      ? "bg-blue-500/10 text-blue-500" 
                      : (theme === 'dark' ? "text-gray-300 hover:bg-white/5" : "text-gray-600 hover:bg-black/5")
                  )}
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-4 flex items-center justify-between border-t border-gray-800/10">
                 <button
                  onClick={toggleTheme}
                  className="flex items-center space-x-2 text-sm font-medium text-gray-500"
                >
                  {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  <span>Switch Theme</span>
                </button>
              </div>
               <div className="grid grid-cols-2 gap-4 pt-4">
                <Link to="/login" className={cn(
                  "flex justify-center py-2 px-4 border rounded-md text-sm font-medium",
                  theme === 'dark' ? "border-white/20 text-white hover:bg-white/5" : "border-black/10 text-black hover:bg-black/5"
                )}>
                  Log in
                </Link>
                <Link to="/register" className={cn(
                  "flex justify-center py-2 px-4 rounded-md text-sm font-medium",
                   theme === 'dark' ? "bg-white text-black" : "bg-black text-white"
                )}>
                  Sign up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
