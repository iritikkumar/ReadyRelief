import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: url("https://i.ytimg.com/vi/sO2zpJuArRg/maxresdefault.jpg") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
`
// const Checkbox = style.
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0;
`
const Button = styled.button`
    border: none;
    width: 40%;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`
const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input type="text" placeholder = "First Name" required/>
                <Input type="text" placeholder = "Last Name"/>
                <Input type='email' placeholder = "Email" required/>
                <Input type="number" placeholder = "Phone Number" required/>
                <Input type="password" placeholder = "Password" required/>
                <Input type="password" placeholder = "Confirm Password" required/>
                {/* <Checkbox/> */}
                <Agreement>
                    By creating an account, I consent of processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register