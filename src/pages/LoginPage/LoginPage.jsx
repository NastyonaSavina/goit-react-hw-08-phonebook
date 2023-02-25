import { useState } from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { logIn } from "redux/auth/auth.operations";




const initialState = {
  email: '',
  password: '',
};

const LoginPage = () => { 

  const dispatch = useDispatch();
  const navigate = useNavigate();


    const [values, setValues] = useState(initialState);

    const handleChange = event => {
        const { value, name } = event.target;
        setValues(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async event => {
      event.preventDefault();
      const form = event.currentTarget;

      try {
        await dispatch(logIn(values)).unwrap();
        form.reset();
        toast.success('Success');
        navigate('/contacts', { replace: true });
        } catch {
        toast.error('Error');
        }
    };



     return (
    <>

      <form action="#" className="mt-5 mx-auto p-0" style={{ width: '450px' }} onSubmit={handleSubmit} >
        <h1 className="h3 mb-3 fw-normal">Login page</h1>

        <div className="form-floating my-4">
          <input
            type="text"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="form-control"
          />
          <label htmlFor="email" >Email address</label>
        </div>

        <div className="form-floating my-4">
          <input
            id="password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            className="form-control"
                         
          />
          <label htmlFor="password">Password</label>
        </div>

        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    </>
  );
}

export default LoginPage;