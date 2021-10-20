
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user,isLoading} =useAuth();
    if(isLoading){
        return <>
        <Spinner animation="border" size="sm" />
        <Spinner animation="border" className="text-warning" />
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" />
      </>
    }
    
    return (
        <Route
        {...rest}
        render={
            ({location})=>user.email ? children: <Redirect
            to={{
                pathname: "/login",
                state: { from: location }
              }}
            >

            </Redirect>
        }
        >

        </Route>
    );
};

export default PrivateRoute;