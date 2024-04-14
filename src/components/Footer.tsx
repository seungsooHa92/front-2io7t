import { Container } from '@mui/material'

export default function Footer() {
  return (
    <Container
      sx={{
        // padding: 0,d
        height: '70px',
        position: 'fixed',
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'black',
        color: 'white',
      }}
    >
      &#169; 2024 2io7T
    </Container>
  )
}
