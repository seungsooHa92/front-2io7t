import emotionStyled from '@emotion/styled'
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  Container,
  IconButton,
  Typography,
} from '@mui/material'
import { red } from '@mui/material/colors'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { useGetVanDetail } from '../../hooks/useGetVanDetail'

export default function PlaceVansDetailPage() {
  const params = useParams()
  const { data, isLoading, isFetching } = useGetVanDetail(params.id ?? '')
  const navigate = useNavigate()

  return (
    <div>
      <Typography
        onClick={() => navigate('..')}
        variant="h6"
        sx={{ marginTop: '24px', marginBottom: '24px' }}
      >
        {' < '}Back to All Vans
      </Typography>
      <Container
        sx={{
          marginTop: '24px',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        {isLoading || isFetching ? (
          <CircularProgress />
        ) : (
          <Card sx={{ maxWidth: 500, maxHeight: 600 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  S
                </Avatar>
              }
              action={<IconButton aria-label="settings"></IconButton>}
              title={data?.data?.van?.name}
              subheader={data?.data?.van?.price + '$'}
            />
            <CardMedia
              component="img"
              height="194"
              image={data?.data?.van?.imageUrl}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {data?.data?.van?.description}
              </Typography>
            </CardContent>
          </Card>
        )}
      </Container>
      <ButtonContainer>
        <Button onClick={() => navigate('')}>Detail</Button>
        <Button onClick={() => navigate('price')}>price</Button>
      </ButtonContainer>
      <DetailContainer>
        <Outlet />
      </DetailContainer>
    </div>
  )
}

const ButtonContainer = emotionStyled.div`
width:100%;
  margin-top:32px;
  padding-left:16px;
  align-items:start;
  display:flex;
`
const DetailContainer = emotionStyled.div`
  background: lightbeige;
  margin-top: 32px;

`
