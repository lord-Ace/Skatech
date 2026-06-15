import {React, useState, useEffect} from 'react'
import {Button, Input} from '@components/ui/Atoms.jsx'
import {EnvelopeIcon} from '@components/ui/Badges.jsx'


const footerSections = {
  categories: ['tech', 'finance', 'business', 'entertainment', 'Sports'],
  company: ['about us', 'our team', 'careers', 'advertise with us', 'contact us'],
  support: ['help center', 'privacy policy', 'terms of use', 'cookie policy', 'sitemap']
}
const Section =({Title, Contents})=>{
  return(<section>
  <h3 className="capitalize">{Title}</h3>
    {Array.isArray(Contents) ? (
      <ul>{Contents.map(eachContent=>(
        <li className="content capitalize" 
        value={eachContent}>
        {eachContent}
        </li>))}</ul>
    ): (<button>{Contents}</button>)}
  </section>)
}

export function Newsletter(){
  return(<section className="flex gap-4 flex-wrap items-center  justify-between border-amber-700 border-4">
  <div className="bg-bg3 p-4 rounded-full">
    <EnvelopeIcon className="text-zinc-900"     strokeWidth={3} size={50} />
  </div>
  <div className="spec">
    <h2 className="text-xl text-txt">Stay Updated. Stay Ahead.</h2>
    <p>get the latest news and insights delivered to you</p>
  </div>
  <form>
    <Input
    placeholder="example@gmail.net"
    type="email"/>
    <Button buttonText="Sign Up"/>
  </form>
  </section>)
}

export function Footer (){
  return(<footer className="flex gap-4 flex-wrap items-center  justify-between">
  <section className="special">
    <h2>SKATECH</h2>
    <p>your trusted source for news, insights, and analysis on business, innovation, and entertainment in Africa and beyond</p>
  </section>
  <Section
  Title='Categories'
  Contents={footerSections.categories}/>
  <Section
  Title='company'
  Contents={footerSections.company}/>
  <Section
  Title='support'
  Contents={footerSections.support}/>
  </footer>)
}