import React from "react";
import logoescudo from "../../assets/img/logocarroscol.jpg";
import loginin from "../../assets/img/logincarro.jpg";
import loginwhite from "../../assets/img/logocarroscol.jpg";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  {/*const navigate = useNavigate();
  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });
  const { email, password } = formValues;*/}

  {/* const handleLogin = (e) => {
    e.preventDefault();
    LoginService(formValues).then( (resp) => {
      alert(`Bienvenido ${resp.data.data.name}`)
      if (resp.data.success){
        console.log(resp)
        localStorage.setItem('user', JSON.stringify(resp.data.data))
        setTimeout(() => {
          navigate('/certificate')
        }, 1000);
      }
    })
  }; */}

  return (
    <>
      <div id="midiv"
        style={{backgroundImage: `url(${loginin})`}}
        className=" bg-cover bg-no-repeat  h-screen ml-96"><img className="w-64 mx-12 py-9 absolute bottom-0 left-3/4" src={loginwhite}/>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 gap-x-4">
        <div className="col-span-6 sm:col-span-6 md:col-span-1">
          <div className="Containerlogin-box absolute bottom-0 h-screen w-100 py-0 m-0 bg-[#93b33a]">
            <form onSubmit>
              <div className="mb-3 my-44">
                <img className="w-64 mx-12 py-9" src={logoescudo}/>
                <input 
                  type="text"
                  placeholder="E-MAIL"
                  className="form-control text-3x1 font-bold mx-10 border rounded-full w-100 py-4 px-8 text-center text-gray-700 leading-tight bg-gray-200"
                  name="email"
                  autoComplete="off"
               
                  
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  placeholder="CONTRASEÑA"
                  className="form-control text-3x1 font-bold mx-10 border rounded-full w-100 py-4 px-8 text-center text-gray-700 leading-tight bg-gray-200"
                  name="password"
                  autoComplete="off"
                 
                  
                />
              </div>
              <input
              className="text-xl font-bold text-center mx-32 border rounded-full w-70 py-3 px-5 text-black leading-tight bg-white" 
              type="button" 
              value={"ENTRAR"}/>
            </form>
          </div> 
        </div>
      </div>
    </>                  
  );
}
