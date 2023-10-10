import DashboardNavBar from '../components/DashboardNavBar';
import DashboardMainHeader from '../components/DashboardMainHeader';

export default function DashboardPage() {
    return (
        <div className="h-screen relative">
            <DashboardNavBar />
            <main className="bg-gray-100 absolute right-0 top-0 bottom-0 lg:left-[16.67%] left-0">
                <DashboardMainHeader />
                <section>
                    <h2 className="text-gray-700 font-bold text-lg lg:text-2xl px-5 py-4 md:p-8 flex items-center gap-2">
                        Home
                    </h2>
                </section>
            </main>
        </div>
    );
}
