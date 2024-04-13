import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Header from './Header'

export default function Layout() {
  return (
    <Container
      sx={{
        width: '100%',
        height: '100%',
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Header />
      <Container sx={{ marginTop: '24px' }}>
        <Outlet />
      </Container>
    </Container>
  )
}
