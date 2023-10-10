import { GoHome } from 'react-icons/go';
import { NavLink } from 'react-router-dom';

const defaultLinkStyle =
    'text-gray-100 px-5 py-2 flex items-center gap-2 hover:bg-gray-500 rounded-md';

export default function DashboardNavBar() {
    return (
        <>
            <aside className="bg-boson-blue absolute left-0 top-0 h-full w-2/12 hidden lg:flex flex-col">
                <div className="px-4 py-4">
                    <span className="text-gray-100 text-xl">Task Manager</span>
                </div>
                <nav className="flex-grow">
                    <ul className="flex flex-col gap-1.5 py-8">
                        <li className="px-3">
                            <NavLink
                                to="/dashboard/home"
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
                                to="/dashboard/home"
                                className="p-2 rounded-md text-gray-600"
                            >
                                <GoHome size={28} />
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    );
}
