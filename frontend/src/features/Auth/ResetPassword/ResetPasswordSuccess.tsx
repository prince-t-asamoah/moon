import { BsCheck2Circle } from 'react-icons/bs';
import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import AuthFormHeader from '../components/AuthFormHeader';

export default function ResetPasswordSuccess() {
    return (
        <div className="w-4/5 md:w-3/5 flex flex-col items-center">
            <BsCheck2Circle
                size={40}
                className="text-green-500 my-5 lg:hidden"
            />
            <BsCheck2Circle
                size={50}
                className="text-green-500 my-5 lg:block"
            />
            <AuthFormHeader
                title="Password reset successful"
                subTitle="Your password has been successfully reset. Click continue to login now"
            />
            <Button
                size="lg"
                radius="sm"
                className="w-full font-semibold bg-boson-blue lg:hover:opacity-70 lg:transition-all text-gray-100"
                as={Link}
                to="/login"
            >
                Continue
            </Button>
        </div>
    );
}
