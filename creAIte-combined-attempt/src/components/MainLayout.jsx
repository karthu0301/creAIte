import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './MainLayout.css'; // Import the CSS file here

const MainLayout = () => {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
