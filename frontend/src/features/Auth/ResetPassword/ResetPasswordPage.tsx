import AuthFormHeader from '../components/AuthFormHeader';
import AuthPageLeftColumn from '../components/AuthPageLeftColumn';
import ResetPasswordForm from './ResetPasswordForm';
import ResetPasswordBgImage from '../assets/reset-password-bg.svg';

export default function ResetPasswordPage() {
    return (
        <div className="min-h-screen bg-gray-100 flex">
            <AuthPageLeftColumn bgImage={ResetPasswordBgImage} />
            <div className="flex-1 flex flex-col lg:gap-8 items-center relative">
                <div className="flex-grow py-4 w-full flex justify-center items-center">
                    <div className="w-4/5 md:w-3/5">
                        <AuthFormHeader
                            title="Set new password"
                            subTitle="Your new password must be different from the previous password"
                        />
                        <ResetPasswordForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
