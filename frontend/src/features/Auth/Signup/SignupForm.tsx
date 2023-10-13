import { Button, Input } from '@nextui-org/react';
import { useForm, SubmitHandler } from 'react-hook-form';

const formInputStyles = {
    label: 'lg:text-[0.9375rem] lg:py-1.5 text-gray-950 font-semibold',
    input: 'lg:text-medium',
};

interface SignupFormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export default function SignupForm() {
    const { register, handleSubmit } = useForm<SignupFormData>();

    const handleSignup: SubmitHandler<SignupFormData> = () => {};

    return (
        <form onSubmit={handleSubmit(handleSignup)}>
            <div className="flex flex-col gap-5 lg:gap-1">
                <div className="flex flex-col gap-4 md:py-5">
                    <Input
                        type="text"
                        label="First Name"
                        placeholder="Enter your first name"
                        classNames={formInputStyles}
                        {...register('firstName')}
                    />
                    <Input
                        type="text"
                        label="Last Name"
                        placeholder="Enter your last name"
                        classNames={formInputStyles}
                        {...register('lastName')}
                    />
                    <Input
                        type="email"
                        label="Email"
                        placeholder="Enter your email"
                        classNames={formInputStyles}
                        {...register('email')}
                    />
                    <Input
                        type="password"
                        label="Password"
                        placeholder="Enter your password"
                        classNames={formInputStyles}
                        {...register('password')}
                    />
                    <Input
                        type="password"
                        label="Confirm Password"
                        placeholder="Enter your password again"
                        classNames={formInputStyles}
                        {...register('confirmPassword')}
                    />
                </div>
                <Button
                    type="submit"
                    size="lg"
                    radius="sm"
                    className="font-semibold bg-boson-blue lg:hover:opacity-70 lg:transition-all text-gray-100"
                >
                    Signup
                </Button>
            </div>
        </form>
    );
}
