import { BsChevronDown } from 'react-icons/bs';
import { GoHome } from 'react-icons/go';

export default function DashboardHeader() {
    return (
        <header className="w-full border-b px-8 py-3 sticky top-0 justify-between hidden lg:flex">
            <h1 className="text-gray-700 font-semibold flex items-center gap-2">
                <GoHome size={18} />
                <span>Home</span>
            </h1>
            <div className="flex gap-1 items-center">
                <button type="button" className="flex items-center gap-1">
                    <span className="text-white flex items-center justify-center w-9 h-9 rounded-full bg-gray-400">
                        A
                    </span>
                    <BsChevronDown size={16} className="text-gray-400" />
                </button>
            </div>
        </header>
    );
}
