import './index.css';
import 'react-circular-progressbar/dist/styles.css';
import { Route, Routes } from 'react-router-dom';

import LoginPage from './features/Auth/Login/LoginPage';
import SignUpPage from './features/Auth/Signup/SignupPage';
import DashboardPage from './DashboardPage';
import ForgotPasswordPage from './features/Auth/ForgotPassword/ForgotPasswordPage';

export default function App() {
    return (
        <Routes>
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
    );
}
