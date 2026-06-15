import React from 'react'
import Home from '@/layouts/Home.jsx'
import Tech from '@/layouts/Tech.jsx'
import  Entertainment from '@/layouts/Entertainment.jsx'
import Sports from '@/layouts/Sports.jsx'
import Finance from '@/layouts/Finance.jsx'


function Categories({choice}){
  const options = {
    'Home': Home,
    'Tech': Tech,
    'Sports': Sports,
    'Entertainment': Entertainment,
    'Finance': Finance
  }
  const Selected = options[choice]
  if(Selected){
    return(
      <Selected/>
      )}
}

export default Categories