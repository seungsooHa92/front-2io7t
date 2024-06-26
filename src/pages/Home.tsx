import emotionStyled from '@emotion/styled'
import Typography from '@mui/material/Typography'

export default function Home() {
  return (
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
  )
}

const ImgContainer = emotionStyled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background-image: url('/home.png');
  background-size: cover;
  background-position: center; 
  animation: slideUp 600ms ease-out forwards;

  @keyframes slideUp {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
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
