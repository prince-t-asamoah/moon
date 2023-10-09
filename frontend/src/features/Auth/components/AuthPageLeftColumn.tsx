interface AuthPageLeftColumnProps {
    bgImage: string;
}
export default function AuthPageLeftColumn({
    bgImage,
}: AuthPageLeftColumnProps) {
    return (
        <div className="lg:flex flex-1 hidden bg-boson-blue items-center justify-center">
            <div className="p-16">
                <img src={bgImage} width="100%" height="100%" />
            </div>
        </div>
    );
}
