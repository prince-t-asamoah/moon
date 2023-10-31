import { Button, Input } from '@nextui-org/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { forgotPasswordSchema } from '../util/valitations';
import { forgotPasswordAPI } from '../apis/authAPI';
import { ForgotPasswordFormData } from '../types/authTypes';
import toast from 'react-hot-toast';
import { useState } from 'react';

const formInputStyles = {
    label: 'lg:text-[0.9375rem] lg:py-1.5 text-gray-950 font-semibold',
    input: 'lg:text-medium',
};

export default function ForgotPasswordForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(forgotPasswordSchema) });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleForgotPassword: SubmitHandler<ForgotPasswordFormData> = (
        data: ForgotPasswordFormData
    ) => {
        setIsSubmitting(true);
        forgotPasswordAPI(data)
            .then((response) => {
                if (response) {
                    setIsSubmitting(false);
                    toast.success('Reset link sent to email');
                }
            })
            .catch((error) => {
                setIsSubmitting(false);
                toast.error(error);
            });
    };

    return (
        <form onSubmit={handleSubmit(handleForgotPassword)}>
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
            </div>
            <div className="py-2">
                <Button
                    type="submit"
                    size="lg"
                    radius="sm"
                    className="w-full font-semibold bg-boson-blue lg:hover:opacity-70 lg:transition-all text-gray-100"
                    isLoading={isSubmitting}
                >
                    Send reset link
                </Button>
            </div>
        </form>
    );
}
