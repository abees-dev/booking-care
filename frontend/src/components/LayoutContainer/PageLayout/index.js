import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { setLayout, useMaterialUIController } from '../../../context'

const PageLayout = ({ children }) => {
   const [, dispatch] = useMaterialUIController()
   const { pathname } = useLocation()

   useEffect(() => {
      setLayout(dispatch, 'page')
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [pathname])
   return <div>{children}</div>
}

export default PageLayout
