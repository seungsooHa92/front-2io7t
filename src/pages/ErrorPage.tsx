import { useGetError } from '../hooks/useGetError'

export default function ErrorPage() {
  const { data, error } = useGetError()
  console.log(data, error)
  return <div>ErrorPage</div>
}
