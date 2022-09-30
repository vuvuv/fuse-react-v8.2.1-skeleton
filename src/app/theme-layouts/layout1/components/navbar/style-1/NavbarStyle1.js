import { styled } from '@mui/material/styles';

const navbarWidth = 80;

const StyledNavBar = styled('div')(({ theme, open, position }) => ({
  minWidth: navbarWidth,
  width: navbarWidth,
  maxWidth: navbarWidth,
}));

function NavbarStyle1(props) {
  return (
    <>
      <StyledNavBar className="flex-col flex-auto sticky top-0 overflow-hidden h-screen shrink-0 z-20 shadow-5">
        <h1>TEST</h1>
      </StyledNavBar>
    </>
  );
}

export default NavbarStyle1;
