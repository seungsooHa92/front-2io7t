import { useParams } from 'react-router-dom'

export default function PlaceVansDetailPage() {
  const params = useParams()
  return <div>PlaceVansDetailPage {params.id}</div>
}
