import { Button, Input } from '@nextui-org/react';

const formInputStyles = {
    label: 'lg:text-[0.9375rem] lg:py-1.5 text-gray-950 font-semibold',
    input: 'lg:text-medium',
};

export default function ResetPasswordForm() {
    return (
        <form>
            <div className="flex flex-col gap-7 md:py-5">
                <Input
                    type="password"
                    label="New Password"
                    placeholder="Enter your new password"
                    classNames={formInputStyles}
                />
                <Input
                    type="password"
                    label="Repeat Password"
                    placeholder="Enter your password again"
                    classNames={formInputStyles}
                />
            </div>

            <div className="py-2">
                <Button
                    size="lg"
                    radius="sm"
                    className="w-full font-semibold bg-boson-blue lg:hover:opacity-70 lg:transition-all text-gray-100"
                >
                    Reset Password
                </Button>
            </div>
        </form>
    );
}
