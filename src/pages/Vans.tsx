import emotionStyled from '@emotion/styled'
import { Button, Container } from '@mui/material'
import { useEffect } from 'react'
import { generatePath, useNavigate } from 'react-router-dom'
import { useGetVans } from '../hooks/useGetVans'
import useVanStore from '../store/vans'

export default function Users() {
  const { data } = useGetVans()
  const navigate = useNavigate()
  const { setVans } = useVanStore()

  useEffect(() => {
    if (data?.data) {
      setVans(data.data.vans)
    }
  }, [data])

  return (
    <Container sx={{ display: 'flex', overflowX: 'scroll' }}>
      {data?.data?.vans?.map((van) => (
        <Van key={van.id} className="van-tile">
          <StyledImg alt={van.name} src={van.imageUrl} />
          <div>
            {van.name}
            <p>
              ${van.price}
              <span>/day</span>
            </p>
          </div>
          <Button
            variant="contained"
            sx={{
              background: `${'#' + Math.floor(Math.random() * 16777215).toString(16)}`,
            }}
            onClick={() =>
              navigate(
                generatePath('/vans/:id', {
                  id: van.id,
                })
              )
            }
          >
            {van.type}
          </Button>
        </Van>
      ))}
    </Container>
  )
}

const Van = emotionStyled.div`
`

const StyledImg = emotionStyled.img`
  width:320px;
  height:320px;
  margin: 16px;
`
