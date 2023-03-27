import { Outlet } from 'react-router-dom';
import Nav from '../Nav/Nav';
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
