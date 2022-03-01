import React, { useRef, useState, useEffect } from "react"
import { Form, Button, Card, Alert, Col, Row, Container } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import './auth.css'


export default function Login() {
  const userRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [doneFetch, setDoneFetch] =useState(false)
  const History = useHistory()

  useEffect(() => {
    if (doneFetch && error.length === 0) {
      History.push('/app/')
    }
  },[doneFetch, History, error]);

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError("")
      setLoading(true)
      setDoneFetch(false)

      let result = await login(userRef.current.value, passwordRef.current.value)
      if(result.status === 'error'){
        setError(result.message)
      }
      console.log(result)
    } catch {
      setError("Failed to log in")
    }

    setDoneFetch(true)
    setLoading(false)
  }



  return (
    <div style={{height:'100vh', scrollBehavior:'none'}}>
        <Row xs={1} md={2} className="g-4 m-0">
            <Col className='border d-flex align-items-center justify-content-center' style={{height:'100vh'}}>
              <Container>
                <Card className="m-auto ControlWidth">
                  <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                      <Form.Group id="username">
                      <Form.Label>User Name</Form.Label>
                      <Form.Control  ref={userRef} required />
                    </Form.Group>
                  <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                  </Form.Group>
                  <Button disabled={loading} className="w-100" type="submit">
                  Log In
                  </Button>
                </Form>
                <div className="w-100 text-center mt-3">
                  <Link to="/forgot-password">Forgot Password?</Link>
                </div>
              </Card.Body>
                </Card>
                <div className="w-100 text-center mt-2">
                  Need an account? <Link to="/signup">Sign Up</Link>
                </div>   
                <div className="w-100 text-center mt-2">
                <Link to="/">Return to Home Page</Link>
                </div>   
              </Container>

        </Col>
        <Col className="auth-cover m-0 d-none d-md-block" style={{height:'100vh'}}>
        </Col>
      </Row>
    </div>
  )
}
