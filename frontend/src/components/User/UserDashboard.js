import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserDashboard = () => {
    const [links, setLinks] = useState([]);

    useEffect(() => {
        const fetchLinks = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5000/api/links', {
                    headers: { Authorization: token },
                });
                setLinks(response.data);
            } catch (error) {
                console.error('Failed to fetch links', error);
            }
        };
        fetchLinks();
    }, []);

    return (
        <div className="container">
            <h1>User Dashboard</h1>
            <div className="dashboard">
                {links.map((link) => (
                    <div key={link._id} className="dashboard-item">
                        <p>{link.url}</p>
                        <img src={link.qrCode} alt="QR Code" className="qr-code" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserDashboard;