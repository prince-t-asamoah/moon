import { Button } from '@nextui-org/button';
import { Link } from 'react-router-dom';
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
                        className="bg-quark-purple lg:hover:bg-boson-blue text-white font-bold lg:transition-colors"
                        size="lg"
                        as={Link}
                        to="/signup"
                    >
                        Get Started
                    </Button>
                    <Button
                        size="lg"
                        className="text-quark-purple lg:hover:bg-gray-400 border-2 border-quark-purple"
                        as={Link}
                        to="/login"
                        variant="ghost"
                    >
                        Login
                    </Button>
                </div>
            </main>
        </div>
    );
}
