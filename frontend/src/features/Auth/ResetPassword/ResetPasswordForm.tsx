import { Button, Input } from '@nextui-org/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { resetPasswordSchema } from '../util/valitations';
import { resetPasswordAPI } from '../apis/authAPI';

const formInputStyles = {
    label: 'lg:text-[0.9375rem] lg:py-1.5 text-gray-950 font-semibold',
    input: 'lg:text-medium',
};

interface ResetPasswordFormData {
    password: string;
    confirmPassword: string;
}

export default function ResetPasswordForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(resetPasswordSchema),
    });
    const [query] = useSearchParams();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleReset: SubmitHandler<ResetPasswordFormData> = (
        data: ResetPasswordFormData
    ) => {
        setIsSubmitting(true);
        resetPasswordAPI(data)
            .then((response) => {
                if (response) {
                    setIsSubmitting(false);
                    toast.success('Reset successful');
                    sessionStorage.removeItem('auth');
                    navigate('/login', { replace: true });
                }
            })
            .catch((error) => {
                setIsSubmitting(false);
                toast.error(error);
            });
    };

    useEffect(() => {
        const token = query.get('token');
        if (token) {
            sessionStorage.setItem('auth', JSON.stringify({ token }));
        }
    }, [query]);

    return (
        <form onSubmit={handleSubmit(handleReset)}>
            <div className="flex flex-col gap-7 md:py-5">
                <Input
                    type="password"
                    label="New Password"
                    placeholder="Enter your new password"
                    classNames={formInputStyles}
                    {...register('password')}
                    errorMessage={errors.password?.message}
                    isInvalid={!!errors.password?.message}
                />
                <Input
                    type="password"
                    label="Repeat Password"
                    placeholder="Enter your password again"
                    classNames={formInputStyles}
                    {...register('confirmPassword')}
                    errorMessage={errors.confirmPassword?.message}
                    isInvalid={!!errors.confirmPassword?.message}
                />
            </div>

            <div className="py-2">
                <Button
                    type="submit"
                    size="lg"
                    radius="sm"
                    className="w-full font-semibold bg-boson-blue lg:hover:opacity-70 lg:transition-all text-gray-100"
                    isLoading={isSubmitting}
                >
                    Reset Password
                </Button>
            </div>
        </form>
    );
}
