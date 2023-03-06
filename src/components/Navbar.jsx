import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
display: flex;
justify-content: center;
@media only screen and (max-width:768px){
    width: 100%;

}
`
const Container = styled.div`
width:1400px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 0;
@media only screen and (max-width:768px){
    width: 100%;
    padding:10px;
}
`
const Links = styled.div`
display: flex;
align-items: center;
gap:50px;
`
const Logo = styled.img`
height: 50px;
width: 100px;
cursor: pointer;
`
const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`
const Item = styled.li`
cursor: pointer;
`

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #d35400;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;



const Navbar = () => {
  return (
   <Section>
    <Container>
        <Links>
        <Logo src="./img/ebrardev2.png" />
        <List>
            <Item>Home</Item>
            <Item>Who</Item>
            <Item>Work</Item>
            <Item>Contact</Item>

        </List>

        </Links>
        <Icons>
            <Icon src="./img/search-icon.png" />
             <Button>Hire Me!</Button>
        </Icons>
    </Container>
   </Section>
  )
}

export default Navbar