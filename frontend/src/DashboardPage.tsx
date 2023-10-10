import { GoHome } from 'react-icons/go';
import { BsChevronDown } from 'react-icons/bs';
import DashboardNavBar from './components/DashboardNavBar';

export default function DashboardPage() {
    return (
        <div className="h-screen relative">
            <DashboardNavBar />
            <main className="bg-gray-100 absolute right-0 top-0 bottom-0 lg:left-[16.67%] left-0">
                <header className="w-full border-b px-8 py-3 sticky top-0 justify-between hidden lg:flex">
                    <h1 className="text-gray-700 font-semibold flex items-center gap-2">
                        <GoHome size={18} />
                        <span>Home</span>
                    </h1>
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
                </header>
                <section>
                    <h2 className="text-gray-700 font-bold text-lg lg:text-2xl px-5 py-4 md:p-8 flex items-center gap-2">
                        Home
                    </h2>
                </section>
            </main>
        </div>
    );
}
