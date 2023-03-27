import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

function Container() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
export default Container;
