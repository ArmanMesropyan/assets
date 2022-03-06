import React from 'react';
import { Route, Routes } from 'react-router-dom';


//=============================================
import AboutPage from './components/content/aboutPage/aboutPage';
import HomePage from './components/content/homePage/homePage';
import ServicesPage from './components/content/servicesPage/servicesPage';
import Team from './components/content/team/team';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import JoinOurTeam from './components/content/joinOurTeam/joinOurTeam';
import BecomeAPartner from './components/content/becomeaPartner/becomeAPartner';
import Blog from './components/content/blog/blog';
import CalculatorPage from './components/content/calculatorPage/calculatorPage';
import Libary from './components/content/libary/libary';



const  App = () => {
  return (
    <div className="App">
      <Header/>
       
      <Routes>
        <Route path='/' element= {<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/services' element={<ServicesPage/>}/>
        <Route path='/calculator/*' element={<CalculatorPage/>}/>
        <Route path='/libary' element={<Libary/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/contactUs' element={<Blog/>}/>

        <Route path='/joinTeam' element={<JoinOurTeam/>}/>
        <Route path='/BecomePartner' element={<BecomeAPartner/>}/>

      
       
        
        
      </Routes>
      
       <hr/>
      <Footer/>
    </div>
  );
}

export default App;
