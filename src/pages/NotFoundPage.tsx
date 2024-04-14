import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>404</h1>
      <p style={styles.text}>Page not found</p>
      <Link to="/" style={styles.link}>
        Go to Home
      </Link>
    </div>
  )
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    color: '#333',
    textAlign: 'center' as 'center',
  },
  header: {
    fontSize: '6rem',
    fontWeight: 'bold' as 'bold',
  },
  text: {
    fontSize: '1.5rem',
  },
  link: {
    marginTop: '20px',
    fontSize: '1.25rem',
    textDecoration: 'none',
    color: '#007bff',
    border: '1px solid #007bff',
    padding: '10px 20px',
    borderRadius: '5px',
    transition: 'background-color 0.3s, color 0.3s',
  },
}

export default NotFoundPage
