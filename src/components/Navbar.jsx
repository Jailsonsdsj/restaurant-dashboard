import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavbarContainer, NavbarItems, NavbarOption, NavbarLink,} from '../assets/css/style'
import { NavbarLogo, NavbarLogoContainer } from '../assets/css/componets.styled'
import { HomeOutlined, ReadOutlined, SolutionOutlined,TeamOutlined,LineChartOutlined  } from '@ant-design/icons';

export const Navbar = () => {
  return (
    <>
   
    <NavbarContainer>
        <NavbarLogoContainer>
            <NavbarLogo src="../../public/logo.png"/>
        </NavbarLogoContainer>
        <NavbarItems>
            <NavbarOption>
                <NavbarLink to="/dashboard"> <HomeOutlined /> &nbsp; DASHBOARD</NavbarLink>
            </NavbarOption>
            <NavbarOption>
                <NavbarLink to="/menu"><ReadOutlined /> &nbsp; CARDÁPIO</NavbarLink>
            </NavbarOption>
            <NavbarOption>
                <NavbarLink to="/orders"><SolutionOutlined />&nbsp; PEDIDOS</NavbarLink>
            </NavbarOption>
            <NavbarOption>
                <NavbarLink to="/profits"><LineChartOutlined />&nbsp; GANHOS</NavbarLink>
            </NavbarOption>
            <NavbarOption>
                <NavbarLink to="/customers"><TeamOutlined />&nbsp; CLIENTES</NavbarLink>
            </NavbarOption>
        </NavbarItems>
    </NavbarContainer>
    </>
  )
}