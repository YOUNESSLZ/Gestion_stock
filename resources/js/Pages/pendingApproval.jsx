// resources/js/Pages/PendingApproval.jsx
import React from 'react';
import { router } from '@inertiajs/react';

export default function PendingApproval() {
    const handleLogout = (e) => {
        e.preventDefault();
        router.post(route('logout'));
    };

    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#F5F7FA' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow-sm border-0 text-center p-5" style={{ backgroundColor: '#FFFFFF', borderRadius: '15px' }}>
                            <div className="mb-4">
                                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="#4A90C4"/>
                                </svg>
                            </div>
                            
                            <h1 className="mb-4" style={{ color: '#2C5F8A', fontSize: '1.8rem', fontWeight: '600' }}>Account Pending Approval</h1>
                            
                            <div className="alert mb-4" style={{ backgroundColor: '#E8F4FD', borderColor: '#B8D9F0', color: '#2C5F8A', borderRadius: '10px' }}>
                                <p className="mb-2">Your account is waiting for administrator approval.</p>
                                <p className="mb-0">You will be notified once your account is validated.</p>
                            </div>
                            
                            <form onSubmit={handleLogout}>
                                <button 
                                    type="submit" 
                                    className="btn px-4 py-2"
                                    style={{ backgroundColor: '#4A90C4', borderColor: '#4A90C4', color: 'white', borderRadius: '8px' }}
                                    onMouseEnter={(e) => e.target.style.backgroundColor = '#2C5F8A'}
                                    onMouseLeave={(e) => e.target.style.backgroundColor = '#4A90C4'}
                                >
                                    Logout
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}