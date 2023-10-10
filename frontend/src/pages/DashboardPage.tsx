import DashboardNavBar from '../components/DashboardNavBar';
import DashboardMainHeader from '../components/DashboardMainHeader';
import DashboardHome from '../components/DashboardHome';

export default function DashboardPage() {
    return (
        <div className="h-screen relative">
            <DashboardNavBar />
            <main className="bg-gray-100 absolute right-0 top-0 bottom-0 lg:left-[16.67%] left-0">
                <DashboardMainHeader />
                <section>
                    <DashboardHome />
                </section>
            </main>
        </div>
    );
}
