import { useState } from "react";
const LoginFunctional = () => {
  // const [email,setEmai] = useState('');
  // const [password,setPasasword] = useState('');
  const [data, setdata] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit =(e)=> {
   e.preventDefault(); 
   const formData= {...data};
   console.log({formData});
  }
  return (
    <>
      <div className="container mt-5">
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Email Functional
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="inputEmail3"
                name="email"
                onChange={handleChange}
                value={data.email}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Password Functional
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword3"
                name="password"
                onChange={handleChange}
                value={data.password}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginFunctional;
