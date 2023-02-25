import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/auth.selectors';



export const Navigation = () => {

    const loggedIn = useSelector(selectIsLoggedIn);

    return (
        <>
            <div className="d-flex flex-column justify-content-between h-100">
                <div className="d-flex flex-column justify-content-between">
                    {!loggedIn ? (<p className="m-3"> Please sign in!</p>) : (<UserMenu />)} 

                    {!loggedIn ? (
                        <>
                            <NavLink to="" className="btn btn-outline-primary mb-3" >
                                Home page
                            </NavLink>
                            <NavLink to="/login" className="btn btn-outline-primary mb-3" >
                                Sign in
                            </NavLink>
                            <NavLink to="/register" className="btn btn-outline-primary mb-3" >
                                Register
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink to="/contacts" className="btn btn-outline-primary mb-3" >
                                Contacts
                            </NavLink>
                            <NavLink to="/add-contact" className="btn btn-outline-primary mb-3" >
                                Add contact
                            </NavLink>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}