import { Button } from '@nextui-org/button';
import HomeBackgroundImage from './assets/homepage-bg.svg';

export default function HomePage() {
    return (
        <div
            style={{
                background: `url(${HomeBackgroundImage}) no-repeat`,
                backgroundSize: 'cover',
            }}
        >
            <main className="min-h-screen flex flex-col items-center justify-center">
                <header className="text-center">
                    <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl py-3 lg:py-5">
                        An intuitive way to manage your tasks.
                    </h1>
                    <h2 className="text-gray-500 md:text-xl lg:text-2xl">
                        Click on get started to sigup for free.
                    </h2>
                </header>
                <div className="py-5 flex gap-2">
                    <Button
                        className="bg-boson-blue text-white font-bold"
                        size="lg"
                    >
                        Get Started
                    </Button>
                    <Button size="lg">Login</Button>
                </div>
            </main>
        </div>
    );
}
