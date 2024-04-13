import emotionStyled from '@emotion/styled'
import { Container } from '@mui/material'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import { useNavigate } from 'react-router-dom'
import bgImg from '../assets/images/about-hero.png'

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  )
}

export default function About() {
  const navigate = useNavigate()
  return (
    <Container
      sx={{
        padding: 0,
      }}
    >
      <div
        className="about-page-container"
        style={{
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <BackButton>
          <HomeIcon
            sx={{ color: 'white' }}
            onClick={() => {
              navigate('/')
            }}
          />
        </BackButton>
        <img src={bgImg} className="about-hero-image" />
        <div className="about-page-content">
          <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
      </div>
    </Container>
  )
}

const BackButton = emotionStyled.div`
  position:absolute;
  top: 8px;
  left: 8px;
`
