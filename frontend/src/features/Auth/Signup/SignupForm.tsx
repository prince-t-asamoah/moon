import { Button, Input } from '@nextui-org/react';

const formInputStyles = {
    label: 'lg:text-[0.9375rem] lg:py-1.5 text-gray-950 font-semibold',
    input: 'lg:text-medium',
};

export default function SignupForm() {
    return (
        <form>
            <div className="flex flex-col gap-5 lg:gap-8">
                <div className="flex flex-col gap-4 md:py-5">
                    <Input
                        type="text"
                        label="First Name"
                        placeholder="Enter your first name"
                        classNames={formInputStyles}
                    />
                    <Input
                        type="text"
                        label="Last Name"
                        placeholder="Enter your last name"
                        classNames={formInputStyles}
                    />
                    <Input
                        type="email"
                        label="Email"
                        placeholder="Enter your email"
                        classNames={formInputStyles}
                    />
                    <Input
                        type="password"
                        label="Password"
                        placeholder="Enter your password"
                        classNames={formInputStyles}
                    />
                    <Input
                        type="password"
                        label="Confirm Password"
                        placeholder="Enter your password again"
                        classNames={formInputStyles}
                    />
                </div>
                <Button
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
