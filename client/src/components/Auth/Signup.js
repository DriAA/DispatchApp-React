import React, { useRef, useState, useEffect } from "react"
import { Form, Button, Card, Alert, Row, Col, Container } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"



export default function Signup() {
  const userRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false);
  const [doneFetch, setDoneFetch] =useState(false)
  let History = useHistory()


  useEffect(() => {
    if (doneFetch && error.length === 0) {
      History.push('/app/')
    }
  },[doneFetch, History, error]);

  async function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }
    

    try {
      setError("")
      setLoading(true)
      setDoneFetch(false)
      let result = await signup(userRef.current.value, emailRef.current.value, passwordRef.current.value)
      console.log('Signup.js:', result)
    } catch {
      setError("Failed to create an account")
    }

    setDoneFetch(true)
    setLoading(false)
  }

  return (
    <div style={{height:'100vh', scrollBehavior:'none'}}>
    <Row xs={1} md={2} className="g-4 m-0">
        <Col className='border d-flex align-items-center justify-content-center' style={{height:'100vh'}}>
        <Container>
        <Card  className="m-auto ControlWidth">
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
          <Form.Group id="companyName">
              <Form.Label>User Name</Form.Label>
              <Form.Control  ref={userRef}
               />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required/>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required/>
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an account? <Link to="/login">Log In</Link> 
          <Link className="d-block" to="/">Return to Home Page</Link>
        </div>

        </Container>
    </Col>
    <Col className="auth-cover m-0 d-none d-md-block" hidden-xs style={{height:'100vh'}}>
    </Col>
  </Row>
</div>
  )
}
