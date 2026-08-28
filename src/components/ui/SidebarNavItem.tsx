import type { LucideIcon } from "lucide-react";

interface SidebarNavItemProps {
    icon: LucideIcon;
    label: string;
    active?: boolean;
    onClick?: () => void;
}

export function SidebarNavItem({ icon: Icon, label, active, onClick} : SidebarNavItemProps) {
    return(
        <button
        type="button"
        onClick={onClick}
        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium w-full text-left transition ${ active ? "bg-indigo-50 text-indigo-600"
            : "text=gray-600 hover:bg-gray-100"}`}
    >
        <Icon size={18} />
        {label}

    </button>
        )}