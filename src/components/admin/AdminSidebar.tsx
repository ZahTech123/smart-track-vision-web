
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
import { Button } from "@/components/ui/button";
import { Menu, Home, FileText, Palette, LogOut } from "lucide-react";

const AdminSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { logout } = useAdminAuth();
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { name: "Dashboard", path: "/admin/dashboard", icon: <Home className="w-5 h-5" /> },
    { name: "Submissions", path: "/admin/submissions", icon: <FileText className="w-5 h-5" /> },
    { name: "Customize", path: "/admin/customize", icon: <Palette className="w-5 h-5" /> },
  ];

  return (
    <div className={`bg-smarttrack-black text-white h-screen transition-all duration-300 flex flex-col ${collapsed ? "w-16" : "w-64"}`}>
      <div className="p-4 flex items-center justify-between border-b border-gray-800">
        {!collapsed && (
          <div className="text-xl font-bold">
            <span className="text-smarttrack-red">Smart</span>Track
          </div>
        )}
        <button 
          onClick={() => setCollapsed(!collapsed)} 
          className="p-1 rounded-md hover:bg-gray-800 transition-all"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
      
      <div className="py-4 flex-1">
        <nav className="space-y-1 px-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-3 py-2 rounded-md transition-all ${
                isActive(item.path) 
                  ? "bg-smarttrack-red text-white" 
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
            >
              {item.icon}
              {!collapsed && <span className="ml-3">{item.name}</span>}
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="p-2 border-t border-gray-800">
        <button
          onClick={logout}
          className={`flex items-center px-3 py-2 rounded-md transition-all text-gray-300 hover:bg-gray-800 hover:text-white w-full ${
            collapsed ? "justify-center" : ""
          }`}
        >
          <LogOut className="w-5 h-5" />
          {!collapsed && <span className="ml-3">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
