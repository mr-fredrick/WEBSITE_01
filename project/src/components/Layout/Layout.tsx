import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Cart from '../Cart/Cart';
import MobileMenu from './MobileMenu';
import NewsletterPopup from '../Newsletter/NewsletterPopup';
import { useApp } from '../../context/AppContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { state } = useApp();
  const [showNewsletter, setShowNewsletter] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (!localStorage.getItem('newsletterShown')) {
        setShowNewsletter(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <MobileMenu />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
      <Cart />
      {showNewsletter && (
        <NewsletterPopup onClose={() => setShowNewsletter(false)} />
      )}
    </div>
  );
};

export default Layout;