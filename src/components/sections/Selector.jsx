import React from 'react'

const Selector = ({categories, setCurrentCategory})=>{
  return(
    <nav className="max-[600px]:flex-col flex gap-4 justify-between">
      {Array.isArray(categories) ? (
        <>{categories.map(eachCategory=>(
          <button className="category" 
          value={eachCategory} 
          onClick={() => {setCurrentCategory(eachCategory)}}>
          {eachCategory}
          </button>))}</>
      ): (<button>{categories}</button>)}
    </nav>
    )
}

export default Selector