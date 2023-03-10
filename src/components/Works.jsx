import React, {useState} from 'react'
import styled from 'styled-components'
import Foxx from './Foxx'
import Red from './Red'
import Forest from './Forest'


const data = [
  "fox",
  "red",
  "forest",
  "hunt",
  "love orange",
]

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: center;

`
const Container = styled.div`
width:1400px;
display: flex;
justify-content: space-between;
`
const Left = styled.div`
flex:1;
display: flex;

align-items: center;
`
const List = styled.ul`
list-style: none;
display:flex;
flex-direction:column;
gap:20px;
`
const Item = styled.li`
font-size:50px;
font-weight:bold;
cursor:pointer;
color: transparent;
-webkit-text-stroke:1px white;
position:relative;

::after{
  content:"${(props)=>props.text}";
  position: absolute;
  top:0;
  left:0;
  color:pink;
  width:0;
  overflow: hidden;
  white-space: nowrap;

}
 &:hover{
  ::after{
    animation: moveText 0.5s linear both;

    @keyframes moveText{
      to {
         width: 100%
      }
    }
  }
 }
`
const Right = styled.div`
flex:1;
`

const Works = () => {
  const [work,setWork] = useState("fox")
  return (
 <Section>
  <Container>
    <Left>
      <List>
        {data.map((item)=>(
<Item key={item} text={item} onClick={() =>setWork(item)} >{item}</Item>
        ))}
      
      </List>
    </Left>
    <Right>
    {work === "fox" ? (
            <Foxx />
          ) : work === "red" ? (
            <Red />
          ) : work ==="forest" (
            <Forest />
          )}

    </Right>
  </Container>
 </Section>
  )
}

export default Works