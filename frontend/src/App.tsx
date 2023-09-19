import './index.css';

export default function App() {
    return (
        <div className="App">
            <header className="mt-10 text-center">
                <h1 className="font-bold text-5xl text-gray-200">Tangled</h1>
                <h2 className="text-gray-400 py-4">
                    Unravel Your Tasks, Stay Organized.
                </h2>
            </header>
            <main className="flex justify-center">
                <section className="w-8/12 px-10 py-5 flex justify-center gap-10">
                    <input
                        type="search"
                        className="p-1.5 px-3.5 w-6/12 rounded-md focus:outline-none focus:ring focus:ring-lepton-lilac placeholder:text-lepton-lilac"
                        placeholder="Search tasks by title"
                    />
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
