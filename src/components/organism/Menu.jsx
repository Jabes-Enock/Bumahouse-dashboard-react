import { useState } from "react"


/* components */
import Links from "../molecules/Links"
import Header from "../molecules/Header"

const Menu = () => {
  const [open, setOpen] = useState(false)

  const handleState = () => {
    setOpen(!open)
  } 

  const styleMenu = `z-10 fixed pt-16 left-0 overflow-y-auto bg-white w-screen ${ open? 'h-0': 'h-screen'} md:h-screen md:w-60 duration-300`



  return (
    <>  
      <Header handleStateMenu={handleState} />
      <menu className={`${styleMenu}`} >
        <Links handleStateMenu={handleState} openState={open}/>
      </menu> 
    </>
  )
}

export default Menu