import { Button } from '@mui/material'
import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function PlaceLayout() {
  const navigate = useNavigate()
  const [visitCount, setVisitCount] = useState<number>(0)

  const increaseVisitCount = () => {
    setVisitCount((prev) => prev + 1)
  }
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
          onClick={() => navigate('/place/vans')}
          sx={{ marginRight: '32px' }}
        >
          Vans: visited :{visitCount}
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
      <Outlet context={increaseVisitCount as () => void} />
    </>
  )
}
