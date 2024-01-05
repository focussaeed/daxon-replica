import './App.css'
import React, {useState} from 'react'
import { Bottom_Components } from './Components/Bottom_Components'
import { Detail_Component } from './Components/Detail_Component'
import { Navbar_Components } from './Components/Navbar_Components'
import { Section2 } from './Components/Section2'
import { Section3 } from './Components/Section3'
import { Section4 } from './Components/Section4'
import { Section5 } from './Components/Section5'
import { Section6 } from './Components/Section6'
import { Toggle_Components } from './Components/Toggle_Components'


const App = () => {

  return (

      <div className='main'>
      
          <Navbar_Components />
          {/* <Detail_Component /> */}
          {/* <Toggle_Components /> */}
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section4 />
          <Section6 />
          <Bottom_Components />
      </div> 
  
  )
}


export default App
