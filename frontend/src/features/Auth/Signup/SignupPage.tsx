import SignupForm from './SignupForm';
import AuthFormFooter from '../components/AuthFormFooter';
import AuthFormHeader from '../components/AuthFormHeader';
import AuthNavBar from '../components/AuthNavBar';
import AuthPageLeftColumn from '../components/AuthPageLeftColumn';

export default function SignUpPage() {
    return (
        <div className="min-h-screen bg-gray-100 flex">
            <AuthPageLeftColumn />
            <div className="flex-1 flex flex-col lg:gap-8 items-center relative">
                <AuthNavBar path="/" />
                <div className="flex-grow py-4 w-full flex justify-center items-center">
                    <div className="w-4/5 md:w-3/5">
                        <AuthFormHeader
                            title="Create your account"
                            subTitle="All fields are required to signup"
                        />
                        <SignupForm />
                        <AuthFormFooter
                            message="Don't have an account?"
                            linkText="Login"
                            linkPath="/login"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
