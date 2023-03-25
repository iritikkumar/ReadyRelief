import React from 'react'
import style from "styled-components"
import DonationForm from '../components/donationForm'

const Container = style.div`
`
const Wrapper = style.div`
    display: flex;
    align-items: center;
    justify-content: center;

`
const Div = style.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 10px;
`

const Donation = () => {
  return (
    <Container>
        <Wrapper>
            <h1>Donate</h1>
        </Wrapper>

        <Div>
            <DonationForm/>

        </Div>
        
    </Container>
  )
}

export default Donation
