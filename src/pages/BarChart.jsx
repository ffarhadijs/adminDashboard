import { Box } from '@mui/material'
import React from 'react'
import Bar from '../components/Charts/Bar'

function BarChart() {
  return (
    <Box p={4} style={{width:"100%"}}>
      <Bar/>
    </Box>
  )
}

export default BarChart