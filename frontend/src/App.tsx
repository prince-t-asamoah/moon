import './index.css';
import { CgMenu } from 'react-icons/cg';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';

export default function App() {
    return (
        <div className="App">
            <header className="bg-boson-blue pt-10 px-5 lg:px-50 lg:pb-22">
                <div className="flex justify-end">
                    <div className="bg-lepton-lilac w-10 h-10 rounded-full hidden lg:flex items-center justify-center hover:cursor-pointer hover:border-2 hover:border-gray-100 transition-all">
                        <span className="text-gray-100">P</span>
                    </div>
                    <CgMenu size={28} className="text-gray-100 lg:hidden" />
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-2xl text-gray-100 text-center pt-8 pb-5 tracking-[12px] lg:tracking-[20px] uppercase lg:text-3xl lg:py-10">
                        Tangled
                    </h1>
                    <div className="w-full md:w-8/12 lg:w-6/12 bg-white px-2.5 rounded-md shadow-md flex items-center justify-center relative top-5 focus-within:ring-2 focus-within:ring-lepton-lilac">
                        <AiOutlineSearch size={30} className="text-gray-400" />
                        <input
                            type="search"
                            className="p-1.5 h-[3rem] w-full focus:outline-none placeholder:text-gray-400 search-cancel:appearance-none"
                            placeholder="Search for tasks"
                        />
                        <button
                            type="button"
                            title="Cancel search"
                            className="text-gray-500 lg:hover:text-gray-600 bg-gray-100 rounded-full transition-colors"
                        >
                            <IoClose size={28} />
                        </button>
                    </div>
                </div>
            </header>
            <main className="flex justify-center">
                <section className="w-8/12 px-10 py-5 flex justify-center gap-10">
                    <button
                        type="button"
                        className="text-sm font-semibold text-gray-200 bg-lepton-lilac px-3.5 py-1 rounded-md hover:bg-white hover:text-lepton-lilac transition-colors"
                    >
                        Add task
                    </button>
                </section>
            </main>
        </div>
    );
}
