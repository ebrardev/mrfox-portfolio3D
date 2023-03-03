import { useState } from 'react'
import styled from 'styled-components'
import './App.css'
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Work from "./components/Works";


function App() {
  
const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpg");
  &::-webkit-scrollbar{
    display: none;
  }
`;
  return (
   <Container>

    <Hero/>
    <Who/>
    <Work/>
    <Contact/>
    </Container>


  )
}

export default App
