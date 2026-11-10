import React, { useState } from 'react';

const PhoneInput: React.FC = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        // Simple validation to allow only digits and format the phone number
        const formattedValue = value.replace(/\D/g, '').slice(0, 10); // Limit to 10 digits
        setPhoneNumber(formattedValue);
    };

    return (
        <div>
            <label htmlFor="phone">Phone Number:</label>
            <input
                type="tel"
                id="phone"
                value={phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
                maxLength={10}
            />
        </div>
    );
};

export default PhoneInput;