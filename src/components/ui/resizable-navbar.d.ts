export declare const Navbar: ({ children, className, }: {
    children: React.ReactNode;
    className?: string;
}) => import("react/jsx-runtime").JSX.Element;
export declare const NavBody: ({ children, className, visible, }: {
    children: React.ReactNode;
    className?: string;
    visible?: boolean;
}) => import("react/jsx-runtime").JSX.Element;
export declare const NavItems: ({ items, className, onItemClick, activeItem, }: {
    items: Array<{
        name: string;
        link: string;
        id?: string;
    }>;
    className?: string;
    onItemClick?: (id?: string) => void;
    activeItem?: string;
}) => import("react/jsx-runtime").JSX.Element;
export declare const MobileNav: ({ children, className, visible, }: {
    children: React.ReactNode;
    className?: string;
    visible?: boolean;
}) => import("react/jsx-runtime").JSX.Element;
export declare const MobileNavHeader: ({ children, className, }: {
    children: React.ReactNode;
    className?: string;
}) => import("react/jsx-runtime").JSX.Element;
export declare const MobileNavToggle: ({ isOpen, onClick, }: {
    isOpen: boolean;
    onClick: () => void;
}) => import("react/jsx-runtime").JSX.Element;
export declare const MobileNavMenu: ({ children, className, isOpen, onClose, }: {
    children: React.ReactNode;
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}) => import("react/jsx-runtime").JSX.Element;
export declare const NavbarLogo: ({ className }: {
    className?: string;
}) => import("react/jsx-runtime").JSX.Element;
export declare const NavbarButton: ({ children, className, variant, onClick, ...props }: {
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary" | "dark" | "gradient";
    onClick?: () => void;
    [key: string]: any;
}) => import("react/jsx-runtime").JSX.Element;
