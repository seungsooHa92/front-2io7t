import { Button } from '@mui/material'
import { Outlet, useNavigate } from 'react-router-dom'

export default function PlaceLayout() {
  const navigate = useNavigate()
  return (
    <>
      <div>
        <Button
          variant="text"
          onClick={() => navigate('/place')}
          sx={{ marginRight: '32px' }}
        >
          Place
        </Button>
        <Button
          variant="text"
          onClick={() => navigate('/place/income')}
          sx={{ marginRight: '32px' }}
        >
          Income
        </Button>
        <Button variant="text" onClick={() => navigate('/place/reviews')}>
          Reviews
        </Button>
      </div>
      <Outlet />
    </>
  )
}
