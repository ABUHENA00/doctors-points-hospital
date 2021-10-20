import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import ServiceDetails from './Pages/Home/ServiceDetails/ServiceDetails';
import Services from './Pages/Home/Services/Services';
import Header from './Pages/Shared/Header/Header';
import Doctors from './Pages/Home/Doctors/Doctors';
import NotFound from './Pages/Home/NotFound/NotFound';
import Departments from './Pages/Home/Departments/Departments';
import Login from './Pages/LogIn/LogIn/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';



function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
            <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/services">
        <Services></Services>
        </Route>
        <PrivateRoute path="/doctors">
        <Doctors></Doctors>
        </PrivateRoute>
        <Route path="/departments">
         <Departments></Departments>
        </Route>
        <Route path="/login">
            <Login></Login>
        </Route>
        <PrivateRoute path="/servicedetails/:detailid">
            <ServiceDetails></ServiceDetails>
        </PrivateRoute>
     
        <Route path="*">
          <NotFound>
          </NotFound>
        </Route>
      </Switch>
      </BrowserRouter> 
      </AuthProvider>
      
    </div>
  );
}

export default App;
