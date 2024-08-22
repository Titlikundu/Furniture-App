import React, { useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate, Link } from 'react-router-dom';
import { LoginContext } from './ContextProvider/Context';
import './header.css'

const Header = () => {
    const { logindata, setLoginData } = useContext(LoginContext);
    const history = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logoutuser = async () => {
        let token = localStorage.getItem('usersdatatoken');
        const res = await fetch('/logout', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token,
                Accept: 'application/json',
            },
            credentials: 'include',
        });

        const data = await res.json();

        if (data.status === 201) {
            localStorage.removeItem('usersdatatoken');
            setLoginData(false);
            history('/');
        } else {
            console.log('error');
        }
    };
    const DashboardValid = async () => {
    let token = localStorage.getItem('usersdatatoken');

    const res = await fetch('/validuser', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
         Authorization: token,
      },
    });

    const responseData = await res.json();

    if (responseData.status === 401 || !responseData) {
      history('*');
    } else {
      console.log('user verify');
      setLoginData(responseData);
      history('/dash');
    }
  };


    return (
        <>
            <header className="header">
                <Link to="/Dashboard" className="logo">
                    <img  src="logo.png" alt="Logo" className="logo-image" />
                    </Link>
                    <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
  Welcome to Kalyani Furniture: {logindata ? logindata.ValidUserOne.fname : ''}
</span>
                <div className="avtar">
                    {logindata.ValidUserOne ? (
                        <Avatar
                            style={{ background: 'salmon', fontWeight: 'bold', textTransform: 'capitalize' }}
                            onClick={handleClick}
                        >
                            {logindata.ValidUserOne.fname[0].toUpperCase()}
                        </Avatar>
                    ) : (
                        <Avatar style={{ background: 'blue' }} onClick={handleClick} />
                    )}
                </div>
             
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem component={Link} to="/About" onClick={handleClose}>
                        About&FAQ
                    </MenuItem>
                    <MenuItem component={Link} to="/Contact" onClick={handleClose}>
                        ContactUs
                    </MenuItem>
                    <MenuItem component={Link} to="/AddToCart" onClick={handleClose}>
                        Add To Cart
                    </MenuItem>

                    {logindata.ValidUserOne && (
                        <>
                            <MenuItem onClick={() => logoutuser()}>Logout</MenuItem>
                        </>
                    )}
                </Menu>

            </header>
        </>
    );
};

export default Header;