import {React, useState} from 'react'
import {HamburgerIcon, SearchIcon} from '@components/ui/Badges.jsx'

export const Trending = ()=>{
  return(<section>
  <h2>Trending: </h2>
  </section>)
}

export const Header = ({holder, setAction, Action})=>{
  return(<header className="flex flex-wrap justify-between items-center p-bottom-4">
  <button className="min-[600px]:hidden" onClick={() => {
    setAction('Nav')
    if(Action=='Nav'){
    document.documentElement.classList.toggle("show")}}}>
    <HamburgerIcon className="text-zinc-900"     strokeWidth={2} size={40}/>
  </button>
  
    <h1>SKATECH</h1>
    
    <section className="max-[600px]:show:hidden max-[600px]:order-last special">
    {holder}
    </section>
    
    <button onClick={() => {
      setAction('Search')
      if(Action=='Search'){
      document.documentElement.classList.toggle("show")
      }
    }}>
    <SearchIcon className="text-zinc-900"     strokeWidth={2} size={40}/>
    </button>
  </header>)
}