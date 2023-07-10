import React from 'react';
import { useMediaQuery } from 'react-responsive';
import AppbarDekstop from './AppbarDekstop';
import AppbarMobile from './AppbarMobile';



const Appbar = () => {
  const IsMobileScreen = useMediaQuery({ maxWidth: 500 }); // Set the breakpoint for mobile screens
  return (
    <nav>
       {IsMobileScreen ? <AppbarMobile /> : <AppbarDekstop />}
    </nav>
     
    
  );
};

export default Appbar;
