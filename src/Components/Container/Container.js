import Nav from '../Nav/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

function Container() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
export default Container;
