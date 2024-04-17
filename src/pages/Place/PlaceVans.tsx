import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { useGetVans } from '../../hooks/useGetVans'
import { Van } from '../../types'

export default function PlaceVans() {
  const { data } = useGetVans()
  const navigate = useNavigate()
  const increaseVisitCount = useOutletContext<() => void>()

  return (
    <div>
      <Typography variant="h5" sx={{ marginTop: '24px', marginBottom: '24px' }}>
        All Vans here
      </Typography>
      <>
        {data?.data?.vans.map((van: Van.Van) => (
          <List
            onClick={() => {
              increaseVisitCount()
              navigate(`${van.id}`)
            }}
          >
            <Img src={van.imageUrl}></Img>
            {van.id}. name: {van.name} price: ${van.price}
          </List>
        ))}
      </>
    </div>
  )
}

const List = styled('div')({
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  padding: 16,
  borderRadius: 8,
  '&:hover': {
    backgroundColor: 'rgba(135, 206, 250, 0.3)',
  },
})

const Img = styled('img')({
  width: '120px',
  height: '120px',
  marginRight: '20px',
})
