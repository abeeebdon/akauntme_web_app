'use client';
import { useState, useEffect } from 'react';

export default function NetworkStatusWidget() {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return (
        <div>
            {isOnline ? (
                <p>You are online</p>
            ) : (
                <p>You are offline. Some features may not be available.</p>
            )}
        </div>
    );
}
