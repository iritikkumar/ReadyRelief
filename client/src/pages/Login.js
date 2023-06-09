import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
    ), url("https://static.vecteezy.com/system/resources/previews/007/092/607/original/flood-survivors-sitting-in-inflatable-boat-rescued-free-vector.jpg") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Input = styled.input`
    flex: 1;
    min-width: 80%;
    margin: 10px 0;
    padding: 10px;
`
const Button = styled.button`
    border: none;
    width: 40%;
    padding: 15px 20px;
    margin-bottom: 10px;
    background-color: #734f96;
    color: white;
    cursor: pointer;
`
const Link =  styled.a`
    margin: 5px 0;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`
const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input type="email" placeholder = "Email" required/>
                <Input type="password" placeholder = "Password" required/>
                <Button>LOG IN</Button>
                <Link>Forgot Password?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login