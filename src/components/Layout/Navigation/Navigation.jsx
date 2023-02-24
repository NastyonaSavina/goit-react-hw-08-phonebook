import { NavLink } from 'react-router-dom';



export const Navigation = () => {

    return (
        <>
            <div className="d-flex flex-column justify-content-between h-100">
                <div className="d-flex flex-column justify-content-between">
                    {/* {!token && <h2 className="h3 mb-4">Please log in!</h2>}

            {token && profile && (
            <>
                <h2 className="h5 mb-4">Welcome back!</h2>
                <small className="d-block">{profile.first_name} {profile.last_name}</small>
                <small>{profile.email}</small>
                <br />
                <br />
            </>
            )} */}

                    <NavLink to="" className="btn btn-outline-primary mb-3" >
                        Home page
                    </NavLink>
                    <NavLink to="login" className="btn btn-outline-primary mb-3" >
                        Sign in
                    </NavLink>
                    <NavLink to="register" className="btn btn-outline-primary mb-3" >
                        Register
                    </NavLink>
                    <NavLink to="add-contact" className="btn btn-outline-primary mb-3" >
                        Add contact
                    </NavLink>
                    <NavLink to="contacts" className="btn btn-outline-primary mb-3" >
                        Contacts
                    </NavLink>
           
                </div>
            </div>
        </>
    );
}