import React from 'react'
import HomePageContent from './homeContent/homePageContent'
import HomePageHeader from './homeHeader/homePageHeader'
import HomeContentFooter from './homeFooter/homeContentFooter';


 const  HomePage = () => {
  return (
    <div className='home__Page'>
        <HomePageHeader/>
        <HomePageContent/>
        <HomeContentFooter/>
       
    </div>
  )
}
export default HomePage