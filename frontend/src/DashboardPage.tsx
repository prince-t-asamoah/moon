import { NavLink } from 'react-router-dom';
import { GoHome } from 'react-icons/go';

export default function DashboardPage() {
    return (
        <div className="h-screen relative">
            <aside className="w-full p-5 fixed bottom-0 z-10 bg-white rounded-t-2xl">
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
                Main
            </main>
        </div>
    );
}
