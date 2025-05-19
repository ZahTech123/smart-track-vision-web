
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";

interface ThemeColors {
  primary: string;
  secondary: string;
}

interface ThemeContextType {
  colors: ThemeColors;
  updateColors: (colors: ThemeColors) => void;
  applyTheme: () => void;
}

const defaultTheme: ThemeColors = {
  primary: "#cc0c25", // SmartTrack red
  secondary: "#1a1a1a", // SmartTrack black
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [colors, setColors] = useState<ThemeColors>(defaultTheme);
  
  const updateColors = (newColors: ThemeColors) => {
    setColors(newColors);
  };
  
  const applyTheme = () => {
    // Apply colors to CSS variables
    document.documentElement.style.setProperty('--smarttrack-red', colors.primary);
    document.documentElement.style.setProperty('--smarttrack-red-light', adjustColor(colors.primary, 20));
    document.documentElement.style.setProperty('--smarttrack-black', colors.secondary);
    document.documentElement.style.setProperty('--smarttrack-black-light', adjustColor(colors.secondary, 20));
    
    // Update the primary CSS variable (used by shadcn components)
    const primaryHsl = hexToHSL(colors.primary);
    document.documentElement.style.setProperty(
      '--primary', 
      `${primaryHsl.h} ${primaryHsl.s}% ${primaryHsl.l}%`
    );
    
    toast.success("Theme applied successfully!");
  };
  
  // Apply default theme on first load
  useEffect(() => {
    applyTheme();
  }, []);
  
  return (
    <ThemeContext.Provider value={{ colors, updateColors, applyTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Helper function to lighten/darken a hex color
function adjustColor(hex: string, amount: number): string {
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);

  r = Math.min(255, Math.max(0, r + amount));
  g = Math.min(255, Math.max(0, g + amount));
  b = Math.min(255, Math.max(0, b + amount));

  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

// Convert hex to HSL for CSS variables
function hexToHSL(hex: string): { h: number; s: number; l: number } {
  // Remove the # if present
  hex = hex.replace(/^#/, '');
  
  // Parse the hex values
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  
  let h = 0;
  let s = 0;
  let l = (max + min) / 2;
  
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    
    h = Math.round(h * 60);
  }
  
  s = Math.round(s * 100);
  l = Math.round(l * 100);
  
  return { h, s, l };
}
