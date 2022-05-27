import Copyright from '@mui/icons-material/Copyright'
import React from 'react'
import Container from '@mui/material/Container'
import { styled } from '@mui/system'
import { Box, Typography } from '@mui/material'

const ContainerFluid = styled('div')(({ theme }) => ({
	backgroundColor: '#64b9e5',
	padding: theme.spacing(4, 0),
}))
const CopyRight = () => {
	return (
		<>
			<ContainerFluid>
				<Container maxWidth="lg">
					<Box sx={{ display: 'flex', color: '#f5f5f5', alignItems: 'center' }}>
						<Copyright fontSize="10px" />
						<Typography
							variant="body2"
							color="inherit"
							sx={{ fontSize: '12px' }}
						>
							Copyright ABees
						</Typography>
					</Box>
				</Container>
			</ContainerFluid>
		</>
	)
}

export default CopyRight
