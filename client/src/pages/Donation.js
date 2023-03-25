import React from 'react'
import style from "styled-components"
import DonationForm from '../components/DonationForm'
import Navbar from '../components/Navbar'

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
  padding: 10px;
`

const Donation = () => {
  return (
    <Container>
      <Navbar/>
      <Div>
          <DonationForm/>
      </Div>
    </Container>
  )
}

export default Donation
