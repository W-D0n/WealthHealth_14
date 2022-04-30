import { Link as sideLink } from 'react-router-dom';
import clearStorages from '../services/storageService'
import styled from "styled-components";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from '@mui/system';

import LogoImg from '../assets/images/logo192.webp';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from '@mui/icons-material/Add';


// Styled components for Sidebar
let theme = createTheme({
  root: {
    spacing: 2,
    fill: '#6E8510'
  }
})

// Sidebar comoponent using Material UI
const Sidebar = () => {
  const handleLogout = async (e) => {
    clearStorages();
  };
  <AddIcon />
  return (
    <Container>
      <LogoContainer>
        <Logo src={LogoImg} alt='wealth health' />
        <Divider />
      </LogoContainer>
      <ThemeProvider theme={theme}>
        <MenuSection>
          <CustomLink to='/home'>
            <HomeIcon />
            <Label>Home</Label>
          </CustomLink>
          <CustomLink to='/dashboard'>
            <AccountCircleOutlinedIcon />
            <Label>List</Label>
          </CustomLink>
          <CustomLink to='/home'>
            <AddIcon />
            <Label>Add New</Label>
          </CustomLink>
          <CustomLink to='#'>
            <SettingsOutlinedIcon />
            <Label>Settings</Label>
          </CustomLink>
        </MenuSection>
      </ThemeProvider>
      <Box>
        <CustomLink to='/' onClick={handleLogout}>
          <LogoutIcon />
          <Label>Logout</Label>
        </CustomLink>
      </Box>
    </Container >
  )
}

export default Sidebar

const Container = styled.div`
  display:flex;
  flex-direction: column;
  width:10rem;
  padding:3rem;
  background-color:#F0DEB4;
`;
const CustomLink = styled(sideLink)`
  display: flex;
  margin-bottom:1rem;
  text-decoration: none;
  font-size: large;
  font-weight: 600;
  color: #6E8510;
`;
const LogoContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-self: center;
`;
const Logo = styled.img`
  width:128px;
  height:128px;
  margin-bottom: 1rem;
`;
const Divider = styled.hr`
  width:100%;
  border-top: 3px solid #6E8510;
  border-radius: 5px;
  box-shadow: 0 20px 20px -20px #333;
`;
const Label = styled.span`
  margin-left:1rem;
`;
const MenuSection = styled.div`
  display:flex;
  flex-direction: column;
  height:6rem;
  margin-top:3rem;
  margin-bottom:8rem;
`;