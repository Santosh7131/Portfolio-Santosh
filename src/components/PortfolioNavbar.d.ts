type PageType = 'home' | 'about' | 'skills' | 'projects';
interface PortfolioNavbarProps {
    currentPage: PageType;
    onPageChange: (page: PageType) => void;
    isTransitioning?: boolean;
}
export declare const PortfolioNavbar: React.FC<PortfolioNavbarProps>;
export {};
