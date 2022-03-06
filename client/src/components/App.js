import React from "react"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"

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

// Forms
import LoadForm from "./Forms/Loads/LoadsForm"

function App(){
  return (
  <Router>
    <AuthProvider>
      <Switch>
        {/* Application */}
        <PrivateRoute exact path="/app/" component={Dashboard} />
        <PrivateRoute exact path='/app/loads/' component={Loads}/>
        <PrivateRoute exact path='/app/loads/new' component={LoadForm} />
        <PrivateRoute path='/app/drivers' component={Drivers}/>
        <PrivateRoute path='/app/financials' component={Financials}/>
        <PrivateRoute path='/app/notifications' component={Notifications}/>

        <Route exact path='/tracking/:loadNumber' component={JumbotronPage}/>
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
