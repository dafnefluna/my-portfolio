// import { useState } from 'react'
import './App.css'
import { GridLayout, GridLayoutItem } from '@progress/kendo-react-layout';
// import Navbar from './comps/navbar'

function App() {

  return (
    <>
      {/* <Navbar /> */}
      <GridLayout  gap={{rows: 2, cols: 3}}>
        <GridLayoutItem className='box'>
        <h1>Dafne Luna</h1>
        </GridLayoutItem>
        <GridLayoutItem>
          <h2>EdBox</h2>
        </GridLayoutItem>
        <GridLayoutItem className='box'>
          <h2>DevBox</h2>
        </GridLayoutItem>
        <GridLayoutItem>
          <h1>sidebar</h1>
        </GridLayoutItem>
      
      </GridLayout>
    </>
  )
}

export default App
