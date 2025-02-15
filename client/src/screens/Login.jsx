import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            alert('Login Successful');
            navigate("/");
        }
    };

    return (
        <div className="login-container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
            <div className="card shadow p-4 animate__animated animate__fadeIn" style={{ width: '400px', borderRadius: '15px', border: 'none' }}>
                <h3 className="text-center mb-4" style={{ color: '#333', fontWeight: 'bold' }}>Welcome Back!</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label" style={{ color: '#555' }}>Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                            style={{ borderRadius: '10px', border: '1px solid #ddd', padding: '10px' }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label" style={{ color: '#555' }}>Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                            style={{ borderRadius: '10px', border: '1px solid #ddd', padding: '10px' }}
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="btn w-100 mb-3" 
                        style={{ 
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                            color: '#fff', 
                            borderRadius: '10px', 
                            padding: '10px', 
                            border: 'none',
                            fontWeight: 'bold'
                        }}
                    >
                        Login
                    </button>
                </form>

                <p className="text-center mt-3" style={{ color: '#555' }}>
                    Don't have an account? <a href="/signup" className="text-primary" style={{ textDecoration: 'none', fontWeight: 'bold' }}>Sign Up</a>
                </p>
            </div>
        </div>
    );
}

export default Login;