import { NavLink } from 'react-router-dom';
import { GoHome } from 'react-icons/go';
import { BsChevronDown } from 'react-icons/bs';

const defaultLinkStyle =
    'font-semibold text-gray-100 px-5 py-2 flex items-center gap-2 hover:bg-gray-500 rounded-md';

export default function DashboardPage() {
    return (
        <div className="h-screen relative">
            <aside className="bg-boson-blue absolute left-0 top-0 h-full w-2/12 hidden lg:flex flex-col">
                <div className="px-8 py-5">
                    <span className="text-gray-100 text-xl">Task Manager</span>
                </div>
                <nav className="flex-grow">
                    <ul>
                        <li className="px-2">
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) => {
                                    return isActive
                                        ? defaultLinkStyle + ' bg-gray-500'
                                        : defaultLinkStyle;
                                }}
                            >
                                <GoHome size={20} />
                                <span>Home</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </aside>
            <aside className="w-full p-5 fixed bottom-0 z-10 bg-white rounded-t-2xl lg:hidden">
                <nav>
                    <ul className="flex justify-center">
                        <li className="flex items-center justify-center">
                            <NavLink
                                to="/dashboard"
                                className="p-2 rounded-md text-gray-600"
                            >
                                <GoHome size={28} />
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </aside>
            <main className="bg-gray-100 absolute right-0 top-0 bottom-0 lg:left-[16.67%] left-0">
                <div className="w-full border-b px-5 py-3  sticky top-0 justify-end hidden lg:flex">
                    <div className="flex gap-1 items-center">
                        <button
                            type="button"
                            className="flex items-center gap-1"
                        >
                            <span className="text-white flex items-center justify-center w-9 h-9 rounded-full bg-gray-400">
                                A
                            </span>
                            <BsChevronDown
                                size={16}
                                className="text-gray-400"
                            />
                        </button>
                    </div>
                </div>
                <div>
                    <h1 className="text-gray-700 font-bold text-lg lg:text-2xl p-5 md:p-8 flex items-center gap-2">
                        <GoHome size={28} />
                        <span>Home</span>
                    </h1>
                </div>
            </main>
        </div>
    );
}
