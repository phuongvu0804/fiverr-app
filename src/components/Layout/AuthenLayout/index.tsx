import Footer from '@/components/Layout/components/Footer';
import Header from '@/components/Layout/components/Header';
import React from 'react';
import AuthBackground from '../components/AuthBackground';

const AuthenLayout = ({ children }: { children: JSX.Element }) => {
    return (
        <div>
            <AuthBackground />
            <div className="content">{children}</div>
        </div>
    );
};

export default AuthenLayout;
