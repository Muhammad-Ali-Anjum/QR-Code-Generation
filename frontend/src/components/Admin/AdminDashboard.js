import React, { useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [url, setUrl] = useState('');
    const [qrCode, setQrCode] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(
                'http://localhost:5000/api/upload',
                { url },
                { headers: { Authorization: token } }
            );
            setQrCode(response.data.qrCode);
        } catch (error) {
            console.error('Failed to upload link', error);
        }
    };

    return (
        <div className="container">
            <h1>Admin Dashboard</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                />
                <button type="submit">Generate QR Code</button>
            </form>
            {qrCode && (
                <div className="qr-code-container">
                    <img src={qrCode} alt="QR Code" className="qr-code" />
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;