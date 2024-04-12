import { Container } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import { red } from '@mui/material/colors'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { useParams } from 'react-router-dom'
import { useGetVanDetail } from '../hooks/useGetVanDetail'

export default function VanDetailPage() {
  const params = useParams()
  const { data } = useGetVanDetail(params.id ?? '')

  return (
    <Container
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
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
    </Container>
  )
}
