import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            alert('Sign Up Successful');
            navigate("/login");
        } else {
            alert('Passwords do not match');
        }
    };

    return (
        <div className="signup-container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
            <div className="card shadow-lg p-4 animate__animated animate__fadeIn" style={{ width: '400px', borderRadius: '15px', border: 'none' }}>
                <h3 className="text-center mb-4" style={{ color: '#333', fontWeight: 'bold' }}>Join Us!</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label" style={{ color: '#555' }}>Full Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                            style={{ borderRadius: '10px', border: '1px solid #ddd', padding: '10px' }}
                        />
                    </div>

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

                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label" style={{ color: '#555' }}>Confirm Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="confirmPassword" 
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
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
                        Sign Up
                    </button>
                </form>

                <p className="text-center mt-3" style={{ color: '#555' }}>
                    Already have an account? <a href="/login" className="text-primary" style={{ textDecoration: 'none', fontWeight: 'bold' }}>Log In</a>
                </p>
            </div>
        </div>
    );
}

export default SignUp;