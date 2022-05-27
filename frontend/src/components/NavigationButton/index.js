import React from 'react'
import { Box, IconButton } from '@mui/material'
import { styled } from '@mui/system'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

const PrevButton = styled(Box)(({ theme }) => ({
	position: 'absolute',
	top: '50%',
	transform: 'translateY(-50%)',
	left: 0,
	zIndex: 100,
	backgroundColor: '#fff',
	boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 6px',
	borderRadius: 100,
}))
const NextButton = styled(Box)(({ theme }) => ({
	position: 'absolute',
	top: '50%',
	transform: 'translateY(-50%)',
	right: 0,
	zIndex: 100,
	backgroundColor: '#fff',
	boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 6px',
	borderRadius: 100,
}))
const NavigationButton = ({ prev, next }) => {
	return (
		<>
			<PrevButton className={prev}>
				<IconButton color="info">
					<NavigateBeforeIcon />
				</IconButton>
			</PrevButton>
			<NextButton className={next}>
				<IconButton color="info">
					<NavigateNextIcon />
				</IconButton>
			</NextButton>
		</>
	)
}

export default NavigationButton
