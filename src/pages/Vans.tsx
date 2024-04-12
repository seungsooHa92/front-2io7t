import emotionStyled from '@emotion/styled'
import { Button } from '@mui/material'
import { generatePath, useNavigate } from 'react-router-dom'
import { useGetVans } from '../hooks/useGetVans'

export default function Users() {
  const { data } = useGetVans()
  const navigate = useNavigate()

  return (
    <Container>
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
  padding:16px
`
const Container = emotionStyled.div`
  display:grid;
  grid-template-columns: repeat(4, 4fr); /* 4열로 설정하고 각 열의 크기를 동등하게 분배 */
  gap: 10
  .van-tile a {
    color: #161616;
    text-decoration: none;  
  }

`

const StyledImg = emotionStyled.img`
  width:320px;
  height:320px;
  margin: 16px;
`
