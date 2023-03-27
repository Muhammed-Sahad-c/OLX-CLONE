import React from 'react'
import { useNavigate } from 'react-router-dom';
function ProtextedRoute(props) {
    const navigate = useNavigate();
    const user = localStorage.getItem('user');
    console.log(user)
    if (user === 'USER') {
        return props.children;
    } else {
        return (
            <div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', widht: '100%', height: '100vh', flexDirection: 'column' }}>
                    <p style={{ color: 'red' }}>Create an account First</p>
                    <a href="/login"><button>Login</button></a> <br />
                    <a href="/signup">
                        <button>Signup</button>
                    </a>
                </div>
            </div>
        )
    }
}

export default ProtextedRoute