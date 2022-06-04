import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
function SignIn() {
    let history = useNavigate();
    const [fullName,setFullName]= useState()
    const [username,setUsername]= useState()
    const [email,setEmail]= useState()
    const [password,setPassword]= useState()

    const handleSignUp=(e)=>{
        e.preventDefault()
        axios
        .post("http://localhost:4000/app/signup", {
          fullName: fullName,
          username: username,
          email: email,
          password: password
        })
        .then(function(response) {
          console.log(response.data);
            alert('User: '+username +'successfuly')
        })
        .catch(function(error) {
          console.log(error);
          alert(error)
        });    }

        const handleSignIn=(e)=>{
            e.preventDefault()
            axios
            .post("http://localhost:4000/app/signin",{
                email: email,
                password: password
              })
            .then(function(response) {
                console.log(response.data);
                alert('data: '+JSON.stringify(response.data) + ' successfuly')
                history('/dashbord')
            })
            .catch(function(error) {
              console.log(error);
              alert(error)
            });    }
  return (
      
    <div className='sign'>
        {/* <a href="https://front.codes/" className="logo" target="_blank">
        <img src="https://assets.codepen.io/1462889/fcy.png" alt=""/>
</a> */}

<video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
    <source src="https://assets.mixkit.co/videos/preview/mixkit-enterprising-mom-plays-with-her-baby-while-working-33046-large.mp4" type="video/mp4"/>
  </video>
<div className="section">
    <div className="container">
        <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
                <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3" class='login_title' style={{width:"108%",fontSize: "32px"}}><span>Log In </span><span>Sign Up</span></h6>
                      <input className="checkbox" type="checkbox" id="reg-log"   name="reg-log"/>
                      <label for="reg-log" className='regL' style={{marginTop:"5%", left:"4%"}}></label>
                    <div className="card-3d-wrap mx-auto">
                        <div className="card-3d-wrapper">
                          <form onSubmit={handleSignIn}>
                          <div className="card-front">
                                <div className="center-wrap">
                                    <div className="section text-center">
                                        <h4 className="mb-4 pb-3">Log In</h4>
                                        <div className="form-group">
                                            <input required type="email" name="logemail" className="form-style" placeholder="Your Email" id="loginemail" onChange={e => setEmail(e.target.value)} autoFocus autocomplete="off"/>
                                            <i className="input-icon uil uil-at"></i>
                                        </div>	
                                        <div className="form-group mt-2">
                                            <input type="password" required name="logpass" className="form-style" placeholder="Your Password" id="loginpass" onChange={e => setPassword(e.target.value)} autocomplete="off"/>
                                            <i className="input-icon uil uil-lock-alt"></i>
                                        </div>
                                        <button href="#"  className="btn mt-4">submit</button>
                                        <p className="mb-2 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
                                        
                                                      <div className="icons_container">
                                                          <div className="icon facebook">
                                                              <div className="tooltip">
                                                                  Facebook
                                                              </div>
                                                              <span><i className="fab fa-facebook-f"></i></span>
                                                          </div>
                                                          <div className="icon youtube">
                                                              <div className="tooltip">
                                                                  Google
                                                              </div>
                                                              <span><i className="fab fa-google"></i></span>
                                                          </div>
                                                          <div className="icon github">
                                                              <div className="tooltip">
                                                                  Github
                                                              </div>
                                                              <span><i className="fab fa-github"></i></span>
                                                          </div>
                                                      </div>
                                      </div>
                                  </div>
                              </div>
                          </form>
                        <div className="card-back">
                                <div className="center-wrap">
                                    <div className="section text-center">
                                       <form onSubmit={handleSignUp}>
                                       <h4 className="mb-4 pb-3">Sign Up</h4>
                                        <div className="form-group">
                                            <input type="text" name="logname" className="form-style" required  onChange={e => setFullName(e.target.value)} placeholder="Your Full Name..." id="logname" autocomplete="off"/>
                                            <i className="input-icon uil uil-user"></i>
                                        </div>
                                        <div className="form-group mt-2">
                                            <input type="text" name="loguser" className="form-style" required placeholder="Your User Name..." onChange={e => setUsername(e.target.value)} id="logname" autocomplete="off"/>
                                            <i className="input-icon uil uil-lock-alt"></i>
                                        </div>	
                                        <div className="form-group mt-2">
                                            <input type="email" name="logemail" className="form-style" required onChange={e => setEmail(e.target.value)} placeholder="Your Email..." id="logemail" autocomplete="off"/>
                                            <i className="input-icon uil uil-at"></i>
                                        </div>	
                                        <div className="form-group mt-2">
                                            <input type="password" name="logpass" className="form-style" required  placeholder="Your Password..." onChange={e => setPassword(e.target.value)} id="logpass" autocomplete="off"/>
                                            <i className="input-icon uil uil-lock-alt"></i>
                                        </div>
                                        <button  className="btn mt-4">submit</button>
                                       </form>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
</div></div>
  )
}

export default SignIn