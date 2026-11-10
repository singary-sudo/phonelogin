import { useState, useEffect } from 'react';

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    const login = async (phoneNumber: string) => {
        // Simulate an API call for authentication
        setLoading(true);
        try {
            // Replace with actual API call
            const response = await fakeApiLogin(phoneNumber);
            if (response.success) {
                setIsAuthenticated(true);
            }
        } catch (error) {
            console.error("Login failed", error);
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    useEffect(() => {
        // Check authentication status on mount
        const checkAuthStatus = async () => {
            // Replace with actual API call
            const response = await fakeApiCheckAuth();
            setIsAuthenticated(response.isAuthenticated);
            setLoading(false);
        };

        checkAuthStatus();
    }, []);

    return { isAuthenticated, loading, login, logout };
};

// Simulated API functions (to be replaced with real API calls)
const fakeApiLogin = async (phoneNumber: string) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ success: true });
        }, 1000);
    });
};

const fakeApiCheckAuth = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ isAuthenticated: false });
        }, 1000);
    });
};

export default useAuth;