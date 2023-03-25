import React from 'react'
import styled from 'styled-components'
// import { Search, ShoppingCartOutlined } from "@material-ui/icons"
// import { Badge } from '@material-ui/core'

const Containers= styled.div`
  height: 80px;
  background-color: teal;
`

const Wrapper= styled.div`
  padding : 3px ;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 60px;
  padding-bottom: 20px;
`

const Left= styled.div`
  flex:1;
  display:flex;
  align-items:center;
  // padding-bottom:20px;
`
const SearchContainer= styled.div`
  border: 0.25px solid lightgray;
  display: flex;
  align-item: center;
  padding: 0.5px;
  margin-left: 25px;
`

const Input= styled.input`
  border:none;
  align-item: center;
`

// const Input = 
const Logo=styled.h1`
font-weight: bold;
font-size:35px;
color: white;
padding-top:14px;
` 


const Center= styled.div`
  flex:1;
  text-align:center;
`

const MenuItems=styled.div`
  font-size: 17px;
  cursor:pointer;
  margin-left:25px;
  color: white;
`

const Right= styled.div`
  flex:1;
  display:flex;
  justify-content: flex-end;
  align-items:center;
  padding-top:12px;
`

const Language= styled.span`
  font-size: 14px;
  cursor: pointer;

`

const Navbar = () => {
  return (
    <Containers>
      <Wrapper>

        <Left>

          {/* <Language>
            EN
          </Language>

          <SearchContainer>
            <Input/>
            {/* <Search/> */}

          {/* </SearchContainer> */} 

          <Logo>ReadyRelief</Logo>
        </Left>


        <Center></Center>
        
        
        <Right>

        <MenuItems>Medical Services</MenuItems>
          <MenuItems>Donate</MenuItems>
          <MenuItems>Sign up</MenuItems>
          <MenuItems>
          {/* <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined/>
          </Badge> */}
          </MenuItems>
        </Right>

      </Wrapper>
    </Containers>
  )
}

export default Navbar
