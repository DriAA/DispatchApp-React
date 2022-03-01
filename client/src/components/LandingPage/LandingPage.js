// Dependencies 
import React from 'react';
import { Outlet, useLocation } from "react-router-dom"
import '../../App.css';
import '../../scrollbar.css';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { useState } from 'react';
import JumbotronPage from '../JumbotronPage/JumbotronPage';
import Footer from '../../components/Footer/Footer';


function LandingPage(props) {  
  const location = useLocation()
  const [content,SetContent] = useState(<Outlet/>)

  React.useEffect(() => {
    // runs on location, i.e. route, change
    location.pathname === '/'?
    SetContent(<JumbotronPage/>):SetContent(<Outlet/>)
  }, [location])


  return (
      <div className="App">
          <NavigationBar authActive={false} links={[{link:'/features', title:'features'}, {link:'/pricing', title:"pricing"}, {link:'/contact', title:'contact'}, {link:'/app', title:'portal'}]}/>
          {content}
          <Footer/>
      </div>

  );
}

export default LandingPage;
