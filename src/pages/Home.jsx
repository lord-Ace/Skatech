import { useState, useEffect } from 'react'
import Categories from '@/layouts/Manager.jsx'
import {Trending, Header} from '@components/sections/TopTicker.jsx'
import {Newsletter, Footer} from '@components/sections/BottomTick.jsx'
import Selector from '@components/sections/Selector.jsx'
import {Input, Button} from '@components/ui/Atoms.jsx'


const CATEGORIES = ['Home', 'Tech', 'Entertainment', 'Finance', 'Sports']

function Home() {
  const [currentCategory, setCurrentCategory] = useState('Home')
  const [searchTerm, setSearchTerm]=useState('')
  const [headerState, setHeaderState] = useState('Nav')
  
  {/*useEffect(()=>{
    alert(searchTerm)
  },[searchTerm])*/}
  
  return (<>
  <Header setAction={setHeaderState}
  Action={headerState}
  holder={headerState=='Nav'?
  (<Selector
  categories={CATEGORIES}
  setCurrentCategory={setCurrentCategory}/>):headerState=='Search'?(<form>
  <Input
  type='search'
  placeholder='Search'
  value={searchTerm}
  setValue={setSearchTerm}/>
   <Button buttonText="Search"/>
   <button class="text-right max-[600px]:hidden absolute top-0 right-4 text-xl" 
    onClick={() => {
      setHeaderState('Nav')
    }}>&#10008;</button>
  </form>):null}/>
  
  {currentCategory && (<Categories choice={currentCategory}/>)}
  
  <Newsletter/>
  <Footer/>
  </>)
}

export default Home