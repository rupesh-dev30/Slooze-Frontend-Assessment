import { ChevronDown } from "lucide-react";
import React from "react";

const SectionHeader = ({
  icon,
  title,
  open,
  onToggle,
}: {
  icon: React.ReactNode;
  title: string;
  open: boolean;
  onToggle: () => void;
}) => (
  <div
    onClick={onToggle}
    className="mt-3 mb-1 text-xs text-gray-500 uppercase flex items-center justify-between cursor-pointer"
  >
    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
      {icon}
      <p className="font-semibold">{title}</p>
    </div>
    <ChevronDown
      size={18}
      className={`text-gray-500 transition-transform ${
        open ? "rotate-180" : "rotate-0"
      }`}
    />
  </div>
);

export default SectionHeader;
