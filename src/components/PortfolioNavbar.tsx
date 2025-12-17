import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

type PageType = 'home' | 'about' | 'skills' | 'projects';

interface PortfolioNavbarProps {
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
  isTransitioning?: boolean;
}

const navItems: { name: string; id: PageType }[] = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' }
];

export const PortfolioNavbar: React.FC<PortfolioNavbarProps> = ({ 
  currentPage, 
  onPageChange, 
  isTransitioning = false 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (pageId?: string) => {
    if (!isTransitioning && pageId) {
      onPageChange(pageId as PageType);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody visible={!isTransitioning}>
        <NavbarLogo />
        <NavItems 
          items={navItems.map(item => ({ 
            name: item.name, 
            link: item.id,
            id: item.id 
          }))} 
          onItemClick={handleNavClick}
          activeItem={currentPage}
        />
        <div className="flex items-center gap-4">
          <NavbarButton 
          >
            GitHub
          </NavbarButton>
          <NavbarButton 
            variant="primary"
            onClick={() => window.open('https://linkedin.com/in/your-profile', '_blank')}
          >
            LinkedIn
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav visible={!isTransitioning}>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <button
              key={`mobile-link-${idx}`}
              onClick={() => handleNavClick(item.id)}
              className={`cursor-target relative text-left w-full py-2 px-4 rounded-lg transition-colors ${
                currentPage === item.id
                  ? 'text-white bg-white/10'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="block">{item.name}</span>
            </button>
          ))}
          <div className="flex w-full flex-col gap-4 pt-4">
            <NavbarButton
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.open('https://github.com/Santosh7131', '_blank');
              }}
              variant="secondary"
              className="w-full"
            >
              GitHub
            </NavbarButton>
            <NavbarButton
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.open('https://linkedin.com/in/your-profile', '_blank');
              }}
              variant="primary"
              className="w-full"
            >
              LinkedIn
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};
