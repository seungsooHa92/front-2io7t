import { Container } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import { useState } from 'react'
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
        subheader={van.price + '$'}
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
interface State extends SnackbarOrigin {
  open: boolean
}

export default function VanDetailPage() {
  const params = useParams()
  const { vans } = useVanStore()
  const [state] = useState<State>({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  })
  const { vertical, horizontal, open } = state
  const viewingVan = vans.filter((van) => van.id === params.id)[0] as Vans.Van

  if (!viewingVan) {
    return (window.location.href = location.origin + '/vans')
  }

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
      <VanCard van={viewingVan} />
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        message="I love snacks"
        key={vertical + horizontal}
      />
    </Container>
  )
}
