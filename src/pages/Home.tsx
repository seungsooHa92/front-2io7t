import emotionStyled from '@emotion/styled'
import { Container } from '@mui/material'
import Typography from '@mui/material/Typography'

export default function Home() {
  return (
    <Container sx={{ width: '100%', height: '100%', marginTop: '24px' }}>
      <ImgContainer>
        <ImgOverlayContainer>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              color: 'white',
              fontSize: { xs: '2.75rem', sm: '3.75rem' },
            }}
          >
            You got the travel plans,
            <br /> we got the travel plans
          </Typography>
        </ImgOverlayContainer>
      </ImgContainer>
    </Container>
  )
}

const ImgContainer = emotionStyled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background-image: url('/home.png');
  background-size: cover;
  background-position: center; 
`
const ImgOverlayContainer = emotionStyled.div` 
position: absolute;
padding:16px;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0, 0, 0, 0.25); /* 검은색 오버레이, 투명도 조정 가능 */
display: flex;
align-items: start;`
