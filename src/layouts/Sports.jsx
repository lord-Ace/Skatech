import { useState } from 'react'
import {Button, Input, ImageContainer} from '@components/ui/Atoms.jsx'
import {SearchIcon, RobotIcon, FootballIcon, BriefcaseIcon, BarChartIcon, ChipIcon, BookmarkIcon, HamburgerIcon, EnvelopeIcon} from '@components/ui/Badges.jsx'
import {Card} from '@components/sections/Cards.jsx'

const funk = (msg)=>{
  alert(msg)
}
function Sports() {
  return (<h1 className="p-10">
  sports layout
  </h1>)
}

export default Sports