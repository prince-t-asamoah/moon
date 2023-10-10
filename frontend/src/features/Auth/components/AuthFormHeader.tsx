interface AuthHeaderProps {
    title: string;
    subTitle: string;
}

export default function AuthFormHeader({ title, subTitle }: AuthHeaderProps) {
    return (
        <header className="text-center pb-5 lg:pt-3 lg:pb-4">
            <h1 className="text-gray-950 text-xl lg:text-3xl font-bold">
                {title}
            </h1>
            <h2 className="text-sm lg:text-base text-gray-600 py-1">
                {subTitle}
            </h2>
        </header>
    );
}
