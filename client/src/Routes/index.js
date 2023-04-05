import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home/Home'
import Notfound from './Notfound/Notfound'
import Login from '../components/Login/Login.jsx'
import SingUp from '../components/SignUp/SingUp.jsx'
import AdminDashboard from '../components/Admin/AdminDashboard.jsx'
const index = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/login'>
        <Login/>
      </Route>
      <Route path='/signup'>
        <SingUp/>
      </Route>
      <Route path='/admin'>
        <AdminDashboard/>
      </Route>
      <Route path='/*'>
        <Notfound />
      </Route>
      
    </Switch>
  )
}

export default index