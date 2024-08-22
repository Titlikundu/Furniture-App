import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginRegister.css';

function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    address: '',
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          fullName: formData.fullName,
          address: formData.address,
        }),
      });

      const data = await response.json();
      console.log(data); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();
      console.log(data); 
      navigate('/Pages/Home'); 
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div className="login-register-header">
      <div className="login-register-wrapper">
        <div className="title-text">
          <div className="login-title">Login and Signup</div>
        </div>
        <div className="form-container">
          <div className={`slide-controls ${isLogin ? 'login-active' : 'signup-active'}`}>
           
            {isLogin ? (
              // Login form
              <form action="#" className="login-form">
                <div className="field">
                  <input
                    type="text"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className="field">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <input type="submit" value="Login" onClick={handleLogin} />
                </div>
                <div className="signup-link">
                  Not a member?{' '}
                  <button type="button" onClick={() => setIsLogin(false)}>
                    Signup now
                  </button>
                </div>
              </form>
            ) : (
              // Signup form
              <form action="#" className="signup-form">
                <div className="field">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className="field">
                  <input
                    type="text"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className="field">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className="field">
                  <input
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <input type="submit" value="Signup" onClick={handleSignup} />
                </div>
                <div className="signup-link">
                  Already a member?{' '}
                  <button type="button" onClick={() => setIsLogin(true)}>
                    Login here
                  </button>
                </div>
              </form>
            )}
         
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;