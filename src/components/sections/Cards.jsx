import {React, useState} from 'react'
import {ImageContainer} from '@components/ui/Atoms.jsx'

const variants={
  'hero': '',
  'vertical': '',
  'horizontal': ''
}
export const Card = ({className="", type="", article=""})=>{
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  return(<div className="">
    <ImageContainer
    alt='a pic'
    className='ratio min-[600px]:w-2/5'
    src='https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=60'/>
    <h2 className="text-2xl font-bold">FGN Appoints New Senate President Ahead Of Upcoming 2027 Election</h2>
    <p>From startups to global investments, discover how Nigeria is becoming Africa's next Al powerhouse.</p>
    <span></span>
    </div>)
}
