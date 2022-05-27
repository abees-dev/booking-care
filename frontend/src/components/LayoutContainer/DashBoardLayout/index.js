import { Box } from '@mui/material'
import { styled } from '@mui/system'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { setLayout, useMaterialUIController } from '../../../context'
import SideBar from '../../SideBar'

const ContentContainer = styled(Box)(({ theme }) => ({
   flex: 1,
   margin: theme.spacing(0, 3),
}))
const DashBoardLayout = ({ children }) => {
   const [, dispatch] = useMaterialUIController()
   const { pathname } = useLocation()

   useEffect(() => {
      setLayout(dispatch, 'dashboard')
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [pathname])
   return (
      <Box display="flex">
         <SideBar />
         <ContentContainer>{children}</ContentContainer>
      </Box>
   )
}

export default DashBoardLayout
