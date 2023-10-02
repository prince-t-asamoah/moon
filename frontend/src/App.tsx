import './index.css';
import { useState } from 'react';
import { CgMenu } from 'react-icons/cg';
import { AiOutlineUser } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { MdOutlineDarkMode } from 'react-icons/md';

import SearchInput from './components/SearchInput';

export default function App() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleCancelSearch = () => setSearchTerm('');

    return (
        <div className="App">
            <header className="bg-boson-blue pt-8 px-5 lg:px-50 lg:pb-22">
                <div className="flex justify-end">
                    <div className="hidden relative">
                        <div className="bg-lepton-lilac w-10 h-10 rounded-full flex items-center justify-center hover:cursor-pointer hover:border-2 hover:border-gray-100 transition-all">
                            <span className="text-gray-100">P</span>
                        </div>
                        <ul className="w-[200px] p-1.5 bg-white rounded-md flex flex-col gap-1 absolute top-10 right-0">
                            <li className="px-4 py-1.5 text-gray-600 hover:bg-gray-100 rounded-md hover:cursor-pointer flex items-center gap-2">
                                <AiOutlineUser size={20} />
                                <span>Profile</span>
                            </li>
                            <li className="px-4 py-1.5 text-gray-600 hover:bg-gray-100 rounded-md hover:cursor-pointer flex items-center gap-2">
                                <MdOutlineDarkMode size={20} />
                                Dark Mode
                            </li>
                            <li className="px-4 py-1.5 text-gray-600 hover:bg-gray-100 rounded-md hover:cursor-pointer flex items-center gap-2">
                                <BiLogOut size={20} />
                                <span>Log out</span>
                            </li>
                        </ul>
                    </div>
                    <CgMenu size={28} className="text-gray-100 hidden" />
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-2xl text-gray-100 text-center pt-8 pb-5 tracking-[12px] lg:tracking-[20px] uppercase lg:text-3xl lg:py-10">
                        Tangled
                    </h1>
                    <SearchInput
                        value={searchTerm}
                        handleOnChange={handleSearchOnChange}
                        handleCancel={handleCancelSearch}
                    />
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
