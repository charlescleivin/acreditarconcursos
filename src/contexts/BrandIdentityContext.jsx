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
      Logo1,
      Logo2,
      Logo3,
      Logo4,
      Logo5,
      Logo6,
      Logo7,
      Logo8,
      Logo9,
  }

    return(
        <BrandIdentityContext.Provider value={value}>
        <div>
            {children}
        </div>
        </BrandIdentityContext.Provider>
    )
}

