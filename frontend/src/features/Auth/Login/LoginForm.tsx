import { Button, Checkbox, Input } from '@nextui-org/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const formInputStyles = {
    label: 'lg:text-[0.9375rem] lg:py-1.5 text-gray-950 font-semibold',
    input: 'lg:text-medium',
};

interface LoginFormData {
    email: string;
    password: string;
}

const schema = yup.object().shape({
    email: yup
        .string()
        .required('Email is required')
        .email('Invalid email format'),
    password: yup.string().required('Password is required'),
});

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const handleLogin: SubmitHandler<LoginFormData> = () => {};

    return (
        <form onSubmit={handleSubmit(handleLogin)}>
            <div className="flex flex-col gap-7 md:py-5">
                <Input
                    type="email"
                    label="Email"
                    placeholder="Enter your email"
                    classNames={formInputStyles}
                    {...register('email')}
                    errorMessage={errors.email?.message}
                    isInvalid={!!errors.email?.message}
                />
                <Input
                    type="password"
                    label="Password"
                    placeholder="Enter your password"
                    classNames={formInputStyles}
                    {...register('password')}
                    errorMessage={errors.password?.message}
                    isInvalid={!!errors.password?.message}
                />
            </div>
            <div className="text-sm flex justify-between py-4 md:py-3">
                <Checkbox size="sm" defaultSelected>
                    Remember me
                </Checkbox>
                <Link
                    to="/forgot-password"
                    className="text-boson-blue font-semibold lg:hover:underline"
                >
                    Forgot password?
                </Link>
            </div>
            <div className="py-2">
                <Button
                    type="submit"
                    size="lg"
                    radius="sm"
                    className="w-full font-semibold bg-boson-blue lg:hover:opacity-70 lg:transition-all text-gray-100"
                >
                    Login
                </Button>
            </div>
        </form>
    );
}
