import React, { useState } from 'react'
import styled from 'styled-components'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CallIcon from '@mui/icons-material/Call';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';



const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 99999;
    height: 85px;
    width: 95%;
`

const LeftMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`

const RightMenuList = styled.ul`
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #f2f2f2;
    font-weight: 700;

    @media (max-width: 480px) {
        flex-direction: column;
        justify-content: flex-start;
        position: absolute;
        top: 85px;
        left: 0;
        height: calc(100vh - 85px);
        width: 100%;
        background: #355c7d;
        background-color: #F6728050;
        padding: 10px 0px;
        transition: left 0.3s ease-out;
        left: ${props => props.active ? 0 : '-100%'};
    }
`

const MenuIconWrapper = styled.div`
    display: none;
    cursor: pointer;
    color: white;

    @media (max-width: 480px) {
        display: block;
    }
    
`

const NavItem = styled.li`
    display: flex;
    height: 85px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2px;
    box-sizing: border-box;
    cursor: pointer;
    border-bottom: 2px solid transparent;    
    transition: left 0.3s ease-out;

    :hover {
        border-bottom: 2px solid #fff;
    }
`

const Logo = styled.img`
    max-height: 70px;
`


export default function Navbar() {

    const [isShowingMenu, setIsShowingMenu] = useState(false);

    const handleResize = () => {
        setIsShowingMenu(false)
    }

    window.addEventListener('resize', handleResize);

    return (
        <Menu>
            <LeftMenu>
                <Logo alt='Logo' src="images/logoteste.png" />
            </LeftMenu>
            <MenuIconWrapper onClick={() => setIsShowingMenu(!isShowingMenu)}>
                {!isShowingMenu ? <MenuIcon /> : <CloseIcon />}
            </MenuIconWrapper>
            <RightMenuList active={isShowingMenu}>
                <NavItem>
                    <CallIcon color='white' />
                    Atendimento
                </NavItem>
                <NavItem>
                    <PersonIcon color='white' />
                    Conta
                </NavItem>
                <NavItem>
                    <ShoppingCartIcon color='white' />
                    Carrinho
                </NavItem>
            </RightMenuList>


        </Menu>
    )
}
