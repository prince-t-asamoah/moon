import LoginForm from './LoginForm';
import AuthFormFooter from '../components/AuthFormFooter';
import AuthFormHeader from '../components/AuthFormHeader';
import AuthNavBar from '../components/AuthNavBar';
import AuthPageLeftColumn from '../components/AuthPageLeftColumn';
import LoginBackgroundImage from "../assets/login-bg.svg";

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-gray-100 flex">
            <AuthPageLeftColumn bgImage={LoginBackgroundImage}/>
            <div className="flex-1 flex flex-col lg:gap-8 items-center relative">
                <AuthNavBar path="/" />
                <div className="flex-grow py-4 w-full flex justify-center items-center">
                    <div className="w-4/5 md:w-3/5">
                        <AuthFormHeader
                            title="Welcome back"
                            subTitle="Login to access account"
                        />
                        <LoginForm />
                        <AuthFormFooter
                            message="Don't have an account?"
                            linkText="Signup"
                            linkPath="/signup"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
