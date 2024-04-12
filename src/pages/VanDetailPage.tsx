import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import { useParams } from 'react-router-dom'
import useVanStore from '../store/vans'
import { Vans } from '../types'

interface VanProps {
  van: Vans.Van
}
function VanCard({ van }: VanProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            S
          </Avatar>
        }
        action={<IconButton aria-label="settings"></IconButton>}
        title={van.name}
        subheader={van.price}
      />
      <CardMedia
        component="img"
        height="194"
        image={van.imageUrl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {van.description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default function VanDetailPage() {
  const params = useParams()

  const { vans } = useVanStore()

  const viewingVan = vans.filter((van) => van.id === params.id)[0] as Vans.Van

  if (!viewingVan) {
    alert('oops you should come here using vans page')
    return
  }
  return <VanCard van={viewingVan} />
}
