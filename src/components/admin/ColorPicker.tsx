
import React from "react";
import { Input } from "@/components/ui/input";

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
  label: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color, onChange, label }) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">{label}</label>
      <div className="flex items-center gap-2">
        <div 
          className="w-8 h-8 rounded border" 
          style={{ backgroundColor: color }}
        ></div>
        <Input
          type="text"
          value={color}
          onChange={(e) => onChange(e.target.value)}
          className="w-32"
          placeholder="#000000"
        />
        <Input
          type="color"
          value={color}
          onChange={(e) => onChange(e.target.value)}
          className="w-12 p-1 h-8"
        />
      </div>
    </div>
  );
};

export default ColorPicker;
