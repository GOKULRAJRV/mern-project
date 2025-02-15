import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'; // Import Font Awesome Icons

function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div 
            className="container-fluid p-5" id="contactus"
            style={{ 
                background: 'linear-gradient(135deg,rgb(15, 1, 1),rgb(1, 10, 12))', 
                color: '#fff', 
                minHeight: '100vh',
                fontFamily: 'Arial, sans-serif'
            }}
        >
            <div className="row justify-content-center align-items-center">
                <div className="col-12 col-md-6">
                    <div 
                        className="p-4 rounded shadow-lg" 
                        style={{ 
                            background: 'rgba(3, 27, 9, 0.3)', 
                            backdropFilter: 'blur(10px)', 
                            border: '1px solid rgba(21, 2, 2, 0.2)' 
                        }}
                    >
                        <h3 className="text-center mb-4" style={{ fontWeight: 'bold', fontSize: '2rem' }}>Contact Us</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Full Name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="name" 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)} 
                                    required 
                                    style={{ background: 'rgba(255, 255, 255, 0.2)', color: '#fff', border: 'none' }}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required 
                                    style={{ background: 'rgba(255, 255, 255, 0.2)', color: '#fff', border: 'none' }}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea 
                                    className="form-control" 
                                    id="message" 
                                    rows="4" 
                                    value={message} 
                                    onChange={(e) => setMessage(e.target.value)} 
                                    required 
                                    style={{ background: 'rgba(255, 255, 255, 0.2)', color: 'white', border: 'none' }}
                                />
                            </div>
                            <button 
                                type="submit" 
                                className="btn btn-light w-100 mb-3"
                                style={{ 
                                    color: 'black', 
                                    fontWeight: 'bold', 
                                    transition: 'transform 0.2s, box-shadow 0.2s',
                                    boxShadow: '0 4px 6px rgba(142, 110, 110, 0.48)'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';   
                                    e.currentTarget.style.boxShadow = '0 6px 8px rgb(7, 1, 1)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                                }}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div 
                        className="p-4 rounded shadow-lg mt-4" 
                        style={{ 
                            background: 'rgba(15, 10, 10, 0.1)', 
                            backdropFilter: 'blur(10px)', 
                            border: '1px solid rgba(12, 2, 2, 0.2)' 
                        }}
                    >
                        <div className="mt-4 ">
                            
                            <p><FaEnvelope className="mr-2" /> <strong>Email:</strong> support@gcart.com</p>
                            <p><FaPhoneAlt className="mr-2" /> <strong>Phone:</strong> +91 9345 67890</p>
                            <p><FaMapMarkerAlt className="mr-2" /> <strong>Address:</strong> 12 PT street, Tiruppur, India</p>
                            <p><strong>Working Hours:</strong> Monday to Friday, 9 AM - 6 PM</p>
                        </div>
                        <div className="mt-5">    
                        </div>
                        <div className="mt-6 text-center">
                            
                            <h5 className="mb-3 d-flex justify-content-left " >Follow Us on</h5>
                            <div className="d-flex justify-content-left">
                                <a 
                                    href="https://instagram.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="mx-3"
                                    style={{ transition: 'transform 0.2s' }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                >
                                    <FaInstagram size={30} color="#fff" />
                                </a>
                                <a 
                                    href="https://twitter.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="mx-3"
                                    style={{ transition: 'transform 0.2s' }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                >
                                    <FaTwitter size={30} color="#fff" />
                                </a>
                                <a 
                                    href="https://facebook.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="mx-3"
                                    style={{ transition: 'transform 0.2s' }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                >
                                    <FaFacebook size={30} color="#fff" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;