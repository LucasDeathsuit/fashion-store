import React, { useState } from 'react'
import styled from 'styled-components'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CallIcon from '@mui/icons-material/Call';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Button from './Button';



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

    @media (max-width: 720px) {
        flex-direction: column;
        justify-content: flex-start;
        position: absolute;
        top: 85px;
        left: 0;
        height: calc(100vh - 85px);
        width: 100%;
        background-color: #F6728090;
        padding: 10px 0px;
        transition: left 0.3s ease-out;
        left: ${props => props.active ? 0 : '-100%'};
    }
`

const MenuIconWrapper = styled.div`
    cursor: pointer;
    color: white;
    position: absolute;
    right: 0%;
    margin-right: 1rem;

    @media (min-width: 720px) {
        display: none;
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

    @media (max-width: 720px) {
        height: auto;
        flex-direction: row;
        transition: all 0.3s;

        :hover {
            border-bottom: 2px solid transparent;
            color: #355c7d;
        }
    }
`

const Logo = styled.img`
    max-height: 70px;
    border-radius: 50%;
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
                <Logo alt='Logo' src="images/Logo.png" />
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
                    <ShoppingCartIcon color='white' />
                    Carrinho
                </NavItem>
                <Button type={isShowingMenu ? 'btn--secondary' : 'btn--outline'}>
                    <PersonIcon color='white' />
                    Cadastrar
                </Button>
            </RightMenuList>
        </Menu>
    )
}
