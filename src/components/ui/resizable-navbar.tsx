import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, createContext, useContext } from "react";
import { cn } from "@/lib/utils";

const NavbarContext = createContext<{
  isScrolled: boolean;
}>({
  isScrolled: false,
});

export const Navbar = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavbarContext.Provider value={{ isScrolled }}>
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          className
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.nav>
    </NavbarContext.Provider>
  );
};

export const NavBody = ({
  children,
  className,
  visible = true,
}: {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}) => {
  const { isScrolled } = useContext(NavbarContext);

  return (
    <motion.div
      className={cn(
        "hidden md:flex items-center justify-between w-full px-6 py-3 mx-auto transition-all duration-300",
        isScrolled
          ? "bg-black/30 backdrop-blur-md border-b border-white/10 shadow-xl"
          : "bg-transparent",
        className
      )}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : -20,
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({
  items,
  className,
  onItemClick,
  activeItem,
}: {
  items: Array<{ name: string; link: string; id?: string }>;
  className?: string;
  onItemClick?: (id?: string) => void;
  activeItem?: string;
}) => {
  return (
    <div className={cn("flex items-center space-x-1", className)}>
      {items.map((item, idx) => (
        <motion.button
          key={`nav-item-${idx}`}
          onClick={() => onItemClick?.(item.id || item.link)}
          className={cn(
            "cursor-target relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300",
            activeItem === (item.id || item.link)
              ? "text-white"
              : "text-gray-300 hover:text-white"
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {activeItem === (item.id || item.link) && (
            <motion.div
              className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
              layoutId="activeTab"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{item.name}</span>
        </motion.button>
      ))}
    </div>
  );
};

export const MobileNav = ({
  children,
  className,
  visible = true,
}: {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}) => {
  const { isScrolled } = useContext(NavbarContext);

  return (
    <motion.div
      className={cn(
        "md:hidden w-full transition-all duration-300",
        isScrolled
          ? "bg-black/30 backdrop-blur-md border-b border-white/10 shadow-xl"
          : "bg-transparent",
        className
      )}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : -20,
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-4 py-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="cursor-target p-2 rounded-lg hover:bg-white/10 transition-colors"
      aria-label="Toggle menu"
    >
      <motion.div
        animate={isOpen ? "open" : "closed"}
        className="w-6 h-5 flex flex-col justify-between"
      >
        <motion.span
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: 45, y: 8 },
          }}
          className="w-full h-0.5 bg-white block"
        />
        <motion.span
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          className="w-full h-0.5 bg-white block"
        />
        <motion.span
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: -45, y: -8 },
          }}
          className="w-full h-0.5 bg-white block"
        />
      </motion.div>
    </button>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={cn("overflow-hidden bg-black/40 backdrop-blur-lg", className)}
        >
          <div className="px-4 py-6 space-y-4">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const NavbarLogo = ({ className }: { className?: string }) => {
  return (
    <motion.div
      className={cn("cursor-target flex items-center space-x-2 cursor-pointer", className)}
      whileHover={{ scale: 1.05 }}
    >
      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
        <span className="text-white font-bold text-sm">SK</span>
      </div>
      <span className="text-white font-semibold text-md tracking-wide hidden md:block">
        Santosh Kumaar
      </span>
    </motion.div>
  );
};

export const NavbarButton = ({
  children,
  className,
  variant = "primary",
  onClick,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
  onClick?: () => void;
  [key: string]: any;
}) => {
  const variantStyles = {
    primary: "bg-white/10 hover:bg-white/20 text-white border border-white/20",
    secondary: "bg-white/5 hover:bg-white/15 text-gray-300 border border-white/10",
    dark: "bg-black hover:bg-gray-900 text-white",
    gradient: "bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white border border-white/10",
  };

  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "cursor-target px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300",
        variantStyles[variant],
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};
