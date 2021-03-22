import React, { useState} from 'react';
import { Switch,  Route, Link } from "react-router-dom";
import axios from 'axios';
import UserChoice from './pages/UserChoice';
import WelcomePage from './pages/WelcomePage';
import AllSet from './pages/AllSet';
import DashBoard from './pages/DashBoard';
import { useEffect } from 'react';
import GlobalContext from './context/Context';
import DateUpdate from './Adapters/DateUpdate';





const App = () => {
  

const [name, setName] = useState('')

const [userOptions, setUserOptions] = useState([]) 



const newsHandler = (id) => {
  const url = '' 
  //`http://newsapi.org/v2/everything?q=${id}&from=${DateUpdate()}&sortBy=popularityAt&apiKey=2085a55016ef4a84a3777e09204d759e`
  
  axios.get(url)
  .then(data => {
    // console.log(data)
  })
  
 
}


useEffect(() => {
  
  // userOptions.forEach(val => {
  //   newsHandler(val)
    
  // })

 
})

  return (

  
          <div>
<GlobalContext.Provider value = ''>
    <Switch>
      <Route exact path='/'>
        <WelcomePage setName = {setName}/>
      </Route>
      <Route path='/pages/UserChoice.js'>
          <UserChoice name = {name}  userOptions= {userOptions} setUserOptions = {setUserOptions}/>
      </Route>
      <Route path='/pages/AllSet.js'>
          <AllSet/>
      </Route>
      <Route path='/pages/DashBoard.js'>
          <DashBoard name= {name} userOptions = {userOptions}/>
      </Route>
    </Switch>
</GlobalContext.Provider>        
        
        <Link to='/'> Welcome Page</Link>
        <Link to='/pages/UserChoice.js'> User Choice</Link>
        <Link to='/pages/AllSet.js'> All Set! </Link>
        <Link to='/pages/DashBoard.js'> DashBoard </Link>
        
    
        </div>
  
  )
}


export default App
