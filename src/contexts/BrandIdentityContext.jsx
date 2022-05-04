import React, {useContext, createContext, useState} from 'react'
import Logo1 from '../assets/images/logo (1).png'
import Logo2 from '../assets/images/logo (2).png'
import Logo3 from '../assets/images/logo (3).png'
import Logo4 from '../assets/images/logo (4).png'
import Logo5 from '../assets/images/logo (5).png'
import Logo6 from '../assets/images/logo (6).png'
import Logo7 from '../assets/images/logo (7).png'
import Logo8 from '../assets/images/logo (8).png'
import Logo9 from '../assets/images/logo (9).png'
import Aprovado1 from '../assets/images/aprovado (1).jpeg'
import Aprovado2 from '../assets/images/aprovado (2).jpeg'
import Aprovado3 from '../assets/images/aprovado (3).jpeg'
import Aprovado4 from '../assets/images/aprovado (4).jpeg'
import Aprovado5 from '../assets/images/aprovado (5).jpeg'
import Aprovado6 from '../assets/images/aprovado (6).jpeg'
import Aprovado7 from '../assets/images/aprovado (7).jpeg'
import Aprovado8 from '../assets/images/aprovado (8).jpeg'
import Aprovado9 from '../assets/images/aprovado (9).jpeg'
import Aprovado10 from '../assets/images/aprovado (10).jpeg'
import Aprovado11 from '../assets/images/aprovado (11).jpeg'
import Aprovado12 from '../assets/images/aprovado (12).jpeg'
import Aprovado13 from '../assets/images/WhatsApp Image 2022-05-04 at 15.43.55.jpeg'

const BrandIdentityContext = createContext()

export const useBrandIdentityContext = () => {
       return useContext(BrandIdentityContext)
}

export const BrandIdentityContextProvider = ({children}) => {

  // this context exists to assist with branding changes in the future.
  // the brand colors are listed here both as a passable variable for CSS use
  // AND in the tailwind.config.js file. If the brand changes it`s identity or new colors
  // are put it should be updated here AND in the tailwind.config.js file.
  // in the tailwind.config.js file, the colors are named with a "custom-" prefix.
  // for example, "brandColors.a" is the same as in tailwind "custom-a"
  // so bg-custom-a will get the color brandColors.a

  const [aprovados] = useState([
  {id:1, imageUrl:Aprovado1},
  {id:2, imageUrl:Aprovado2},
  {id:3, imageUrl:Aprovado3},
  {id:4, imageUrl:Aprovado4},
  {id:5, imageUrl:Aprovado5},
  {id:6, imageUrl:Aprovado6},
  {id:7, imageUrl:Aprovado7},
  {id:8, imageUrl:Aprovado8},
  {id:9, imageUrl:Aprovado9},
  {id:10, imageUrl:Aprovado10},
  {id:11, imageUrl:Aprovado11},
  {id:12, imageUrl:Aprovado12},
  {id:13, imageUrl:Aprovado13},
  ])

  const [logos] = useState([
    { id: 1, imageUrl: Logo1 },  
    { id: 2, imageUrl: Logo2 },
    { id: 3, imageUrl: Logo3 },
    { id: 4, imageUrl: Logo4 },
    { id: 5, imageUrl: Logo5 },
    { id: 6, imageUrl: Logo6 },
    { id: 7, imageUrl: Logo7 },
    { id: 8, imageUrl: Logo8 },
    { id: 9, imageUrl: Logo9 }
  ])

  const [businessInformation] = useState({
    businessName: 'Acreditar Concursos',
    address: 'Avenida Meriti, 2029, 2º andar - Vila da Penha',
    phone: '(21)99286-9819',	
  })

  const [brandColors] = useState({
    a: '#050a37',
    b: '#8EC5E4',
    c: '#7f1523',
    d: '#ff0000',
  })
  
  const value={
      brandColors,
      businessInformation,
      aprovados,
      logos,
  }

    return(
        <BrandIdentityContext.Provider value={value}>
        <div>
            {children}
        </div>
        </BrandIdentityContext.Provider>
    )
}

