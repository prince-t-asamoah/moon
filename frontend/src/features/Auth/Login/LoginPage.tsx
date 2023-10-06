import { FaChevronLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import AuthFooter from '../components/AuthFooter';
import AuthHeader from '../components/AuthHeader';

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-gray-100 flex">
            <div className="lg:block flex-1 hidden bg-boson-blue"></div>
            <div className="flex-1 flex flex-col lg:gap-8 items-center relative">
                <div className="px-5 py-8 md:p-8 lg:px-10 lg:pt-10 w-full">
                    <Link
                        to="/"
                        className="font-semibold text-boson-blue lg:hover:underline inline-flex items-center gap-2"
                    >
                        <FaChevronLeft />
                        <span>Back</span>
                    </Link>
                </div>
                <div className="flex-grow py-4 w-full flex justify-center items-center">
                    <div className="w-4/5 md:w-3/5">
                        <AuthHeader
                            title="Welcome back"
                            subTitle="Login to access account"
                        />
                        <LoginForm />
                        <AuthFooter
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
