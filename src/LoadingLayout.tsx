import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

const LoadingScreen = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <CircularProgress />
    </Box>
  )
}

export default LoadingScreen
