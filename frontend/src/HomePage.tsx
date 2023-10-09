import HomeBackgroundImage from './assets/homepage-bg.svg';

export default function HomePage() {
    return (
        <div
            style={{
                background: `url(${HomeBackgroundImage}) no-repeat`,
                backgroundSize: 'cover',
            }}
        >
            <main className="min-h-screen">
                <header>
                    <h1 className="font-bold text-2xl">
                        An intuitive way to manage your tasks.
                    </h1>
                    <h2 className="text-gray-400">Features include:</h2>
                    <ul>
                        <li>Tasks</li>
                        <li>Reminders</li>
                        <li>Milestones</li>
                    </ul>
                </header>
            </main>
        </div>
    );
}
