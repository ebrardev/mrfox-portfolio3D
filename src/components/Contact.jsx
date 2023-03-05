import React from 'react'
import styled from 'styled-components'
import Map from './Map'

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;

`
const Container = styled.div`
width:100%;
height:100%;
display: flex;
justify-content: space-between;
gap:50px;

`
const Left = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
@media only screen and (max-width: 768px) {
  justify-content: center;
}
`
const Form = styled.form`
width: 500px;
display: flex;
flex-direction: column;
gap:25px;
@media only screen and (max-width: 768px) {
  width: 300px;
}

`
const Title = styled.h1`
font-weight: 200;
`
const Input = styled.input`
padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`
const TextArea = styled.textarea`
padding: 20px;
border: 1px solid #d35400;
border-radius: 5px;
background-color: #e8e6e6;
`
const Button = styled.button`
background-color: #d35400;
color: white;
border: none;
font-weight: bold;
cursor: pointer;
border-radius: 5px;
padding: 20px;
`
const Right = styled.div`
flex: 1;
@media only screen and (max-width: 768px) {
  display: none;
}
`
const handleSubmit= (e) =>{
  e.preventDefault()
  alert('Message sent')
}

const Contact = () => {
  return (
   <Section>
    <Container>
      <Left>
        <Form onSubmit={handleSubmit} >
          <Title>
            Get in Touchi
          </Title>
          <Input placeholder='Name'/>
        <Input placeholder='mail'/>
        <TextArea placeholder='your message' rows={10} />
        <Button type='submit' placeholder='send message'> Send message </Button> 
        </Form>
      </Left>
      <Right>
        <Map/>
      </Right>
    </Container>
   </Section>
  )
}

export default Contact