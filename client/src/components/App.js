import React from "react"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"

// Application
import Dashboard from "./Application/Dashboard"
import Loads from './Application/Loads';
import Drivers from './Application/Drivers';
import Financials from './Application/Financials';
import Notifications from './Application/Notifications.js'


// Landing 
import JumbotronPage from './LandingPage/JumbotronPage'
import FeaturesPage from "./LandingPage/FeaturePage/FeaturesPage"
import ContactPage from "./LandingPage/ContactPage/ContactPage"
import PricingPage from "./LandingPage/PricingPage/PricingPage"

// Auth
import Login from "./Auth/Login"
import Signup from "./Auth/Signup"

import Hello from './Hello'


function App(){
  return (
  <Router>
    <AuthProvider>
      <Switch>
        {/* Application */}
        <PrivateRoute exact path="/app/" component={Dashboard} />
        <PrivateRoute path='/app/loads' component={Loads}/>
        <PrivateRoute path='/app/drivers' component={Drivers}/>
        <PrivateRoute path='/app/loads' component={Financials}/>
        <PrivateRoute path='/app/loads' component={Notifications}/>

        <Route exact path='/tracking/:loadNumber' component={Hello}/>
        <Route exact path="/" component={JumbotronPage} />
        <Route exact path="/features" component={FeaturesPage} />
        <Route exact path="/pricing" component={PricingPage} />
        <Route exact path="/contact" component={ContactPage} />


        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/forgot-password" component={ForgotPassword} />


        

      </Switch>
    </AuthProvider>
  </Router>
  )
}

export default App
