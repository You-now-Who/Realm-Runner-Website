import React from 'react';

export default function Landing() {
return (
    <div className="bg-gradient-to-r from-dark-primary-900 to-dark-primary-800 h-screen">
        <div className="flex flex-col items-center justify-center h-full text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-center">Realm Runner</h1>
            <p className="text-xl md:text-2xl text-center mt-4">Embark on an epic adventure through mystical realms.</p>
            <a href="#play-now" className="mt-12 bg-dark-2 text-white py-4 px-8 hover:bg-dark-primary-900 rounded-md transition duration-300 ease-in-out">
                Play Now
            </a>
        </div>
    </div>
);
}
