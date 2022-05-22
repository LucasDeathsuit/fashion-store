import React, { useState } from 'react'
import styled from 'styled-components'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CallIcon from '@mui/icons-material/Call';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';



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
    gap: 1.5rem;
    list-style: none;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #f2f2f2;
    font-weight: 700;

    @media (max-width: 480px) {
        display: none;
    }
`

const MobileMenu = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    list-style: none;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #f2f2f2;
    font-weight: 700;
    position: absolute;
    top: 85px;
    left: 0;
    width: 100%;
    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.5) 90%);
    background-color: #F6728050;
    padding: 10px 0px;
    transition: transform 1s;
    transform-origin: top;
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
    align-items: center;
    flex-direction: column;
    gap: 2px;
    cursor: pointer;
`

const Logo = styled.img`
    max-height: 70px;
`


export default function Navbar() {

    const [isShowingMenu, setIsShowingMenu] = useState(false);

    const handleResize = () => {
        if(window.innerWidth > 480) {
            setIsShowingMenu(false)
        }
    }
    
    window.addEventListener('resize', handleResize);

    return (
        <Menu>
            <LeftMenu>
                <Logo alt='Logo' src="images/logoteste.png" />
            </LeftMenu>
            <MenuIconWrapper onClick={() => setIsShowingMenu(!isShowingMenu)}>
                <MenuIcon />
            </MenuIconWrapper>
            {!isShowingMenu &&
                <RightMenuList >
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
                </RightMenuList>}
            {isShowingMenu &&
                <>
                    <MobileMenu>
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
                    </MobileMenu>
                </>
            }
        </Menu>
    )
}
