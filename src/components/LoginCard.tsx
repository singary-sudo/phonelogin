import React from 'react';
// @ts-expect-error CSS imports are handled by the bundler
import './LoginCard.css';

const LoginCard: React.FC = ({ children }) => {
    return (
        <div className="login-card">
            {children}
        </div>
    );
};

export default LoginCard;