import { Button, Checkbox, Input } from '@nextui-org/react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';

import { loginSchema } from '../util/valitations';
import { loginAPI } from '../apis/loginAPI';

const formInputStyles = {
    label: 'lg:text-[0.9375rem] lg:py-1.5 text-gray-950 font-semibold',
    input: 'lg:text-medium',
};

interface LoginFormData {
    email: string;
    password: string;
}

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
    });
    const navigate = useNavigate();
    const [isSubmiting, setIsSubmiting] = useState(false);

    const handleLogin: SubmitHandler<LoginFormData> = (data: LoginFormData) => {
        setIsSubmiting(true);
        loginAPI(data)
            .then((response) => {
                if (response) {
                    setIsSubmiting(false);
                    toast.success('Login successful');
                    sessionStorage.setItem(
                        'auth',
                        JSON.stringify(response.data)
                    );
                    navigate('/dashboard/home');
                }
            })
            .catch((error) => {
                setIsSubmiting(false);
                toast.error(error.message);
            });
    };

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
                    disabled={isSubmiting}
                />
                <Input
                    type="password"
                    label="Password"
                    placeholder="Enter your password"
                    classNames={formInputStyles}
                    {...register('password')}
                    errorMessage={errors.password?.message}
                    isInvalid={!!errors.password?.message}
                    disabled={isSubmiting}
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
                    isLoading={isSubmiting}
                >
                    Login
                </Button>
            </div>
        </form>
    );
}
