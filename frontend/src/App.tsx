import './index.css';
import 'react-circular-progressbar/dist/styles.css';
import { Route, Routes } from 'react-router-dom';

import LoginPage from './features/Auth/Login/LoginPage';
import SignUpPage from './features/Auth/Signup/SignupPage';
import DashboardPage from './pages/DashboardPage';
import ForgotPasswordPage from './features/Auth/ForgotPassword/ForgotPasswordPage';
import ResetPassword from './features/Auth/ResetPassword/ResetPasswordPage';
import HomePage from './pages/HomePage';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/dashboard/*" element={<DashboardPage />} />
        </Routes>
    );
}
