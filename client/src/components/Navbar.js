import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 60px;
  /* border: 2px solid black; */
  color: #734f96;
  background-color: #EBF4FA;
`
const Wrapper = styled.div`
  /* padding: 10px 20px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Left = styled.div`
  flex: 1;  
  display: flex;
  align-items: center;
  margin-left: 15px;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 30px;  
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  border: 1px solid #734f96;
  border-radius: 5px;
  padding: 5px;
`
const Logo = styled.h1`
  font-weight: bold;
  margin: 8px 10px;
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`

const Navbar = () => {
  return (
    <Container>
    <Wrapper>
        <Left>
        <Logo>ReadyRelief</Logo>
        </Left>
        <Right>
        <MenuItem>REGISTER</MenuItem>
        <MenuItem>SIGN IN</MenuItem>
        </Right>
    </Wrapper>
        
    </Container>
  )
}

export default Navbar

// import React from "react";

// const Navbar = ()=>{
//     return(
//         <div className="nav">
//             <div className="nav-left">
//                 <a href="/"><h1>Job Finder</h1></a>
//             </div>
//             <div className="nav-right">
//                 <div className="dropdown cls">
//                     <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">SIGNUP AS
//                     <span className="caret"></span></button>
//                     <ul className="dropdown-menu">
//                     <li><a href="/signupRecruiter">Recruiter</a></li>
//                     <li><a href="/signupApplicant">Applicant</a></li>
//                     </ul>
//                 </div>
//                 <div className="cls link"><a href="/login">LOGIN</a></div>
//             </div>
//         </div>
//     )
// }

// export default Navbar;