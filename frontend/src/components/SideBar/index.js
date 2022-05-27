import { ListItemText, ListItemIcon, List } from '@mui/material'
import { Box, styled } from '@mui/system'
import React from 'react'
import { NavLink } from 'react-router-dom'
import routes from '../../routes'

// Component MUI
const NavLinkStyled = styled(NavLink)(({ theme }) => ({
   textDecoration: 'none',
   display: 'flex',
   alignItems: 'center',
   color: '#e0e0e0',
   borderRadius: 8,
   padding: theme.spacing(1, 2),

   '&.active': {
      backgroundColor: '#45c3d8',
   },
}))
const SideBarStyled = styled(Box)(({ theme }) => ({
   display: 'flex',
   width: 180,
   justifyContent: 'center',
   backgroundColor: '#202022',
   borderRadius: 8,
   padding: theme.spacing(2),
   color: '#9e9e9e',
}))

const SideBar = () => {
   return (
      <SideBarStyled display="flex">
         <List>
            {routes.map((item) => (
               <NavLinkStyled key={item.name} to={item.route}>
                  <ListItemIcon sx={{ color: '#e0e0e0', minWidth: 40 }}>
                     {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
               </NavLinkStyled>
            ))}
         </List>
      </SideBarStyled>
   )
}

export default SideBar
