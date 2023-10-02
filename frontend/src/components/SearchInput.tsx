import { AiOutlineSearch } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';

interface SearchInputProps {
    value: string;
    handleOnChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function SearchInput({
    value,
    handleOnChange,
}: SearchInputProps) {
    return (
        <div className="w-full md:w-8/12 lg:w-6/12 bg-white px-2.5 rounded-md shadow-md flex items-center justify-center relative top-5 focus-within:ring-2 focus-within:ring-lepton-lilac">
            <AiOutlineSearch size={30} className="text-gray-400" />
            <input
                type="search"
                className="p-1.5 h-[3rem] w-full focus:outline-none placeholder:text-gray-400 search-cancel:appearance-none"
                placeholder="Search for tasks"
                value={value}
                onChange={handleOnChange}
            />
            <button
                type="button"
                title="Cancel search"
                className="text-gray-500 lg:hover:text-gray-600 bg-gray-100 rounded-full transition-colors"
            >
                <IoClose size={28} />
            </button>
        </div>
    );
}
