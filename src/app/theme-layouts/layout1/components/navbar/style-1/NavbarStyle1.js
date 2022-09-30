import Hidden from '@mui/material/Hidden';
import { styled } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useDispatch, useSelector } from 'react-redux';
import { navbarCloseMobile, selectFuseNavbar } from 'app/store/fuse/navbarSlice';
import { selectFuseCurrentLayoutConfig } from 'app/store/fuse/settingsSlice';
import NavbarStyle1Content from './NavbarStyle1Content';

const navbarWidth = 80;

const StyledNavBar = styled('div')(({ theme, open, position }) => ({
  minWidth: navbarWidth,
  width: navbarWidth,
  maxWidth: navbarWidth,
}));

function NavbarStyle1(props) {
  const config = useSelector(selectFuseCurrentLayoutConfig);

  return (
    <>
      <StyledNavBar className="flex-col flex-auto sticky top-0 overflow-hidden h-screen shrink-0 z-20 shadow-5">
        <h1>TEST</h1>
      </StyledNavBar>
    </>
  );
}

export default NavbarStyle1;
