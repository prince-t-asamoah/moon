import { FaChevronLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

interface AuthNavBarProps {
    path: string;
}
export default function AuthNavBar({ path }: AuthNavBarProps) {
    return (
        <div className="px-5 py-8 md:p-8 lg:px-10 lg:pt-10 w-full">
            <Link
                to={path}
                className="font-semibold text-boson-blue lg:hover:underline inline-flex items-center gap-2"
            >
                <FaChevronLeft />
                <span>Back</span>
            </Link>
        </div>
    );
}
