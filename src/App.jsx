import React, {useState} from 'react';

const projects = [
    {
        id: 1,
        title: 'Weather Dashboard',
        description: 'A real‑time weather app using OpenWeatherMap API and React Hooks.'
    },
    {
        id: 2,
        title: 'Todo List',
        description: 'A minimal todo list with drag‑and‑drop reordering and localStorage sync.'
    },
    {id: 3, title: 'Portfolio Site', description: 'My personal portfolio built with Next.js and Tailwind CSS.'},
];

function App() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Dark gradient layer */}
            <div
                className={`
          absolute inset-0 transition-opacity duration-700 ease-in-out
          ${darkMode ? 'opacity-100' : 'opacity-0'}
          bg-gradient-to-b from-gray-800 to-gray-900
        `}
            />
            {/* Light gradient layer */}
            <div
                className={`
          absolute inset-0 transition-opacity duration-700 ease-in-out
          ${darkMode ? 'opacity-0' : 'opacity-100'}
          bg-gradient-to-b from-blue-50 to-white
        `}
            />

            {/* Content */}
            <div
                className={`relative flex items-center justify-center min-h-screen transition-colors duration-500 ease-in-out ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className={`
            absolute top-4 right-4 px-4 py-2 rounded-md shadow
            transition-colors duration-300
            ${darkMode ? 'bg-gray-700 text-gray-100' : 'bg-gray-200 text-gray-800'}
          `}
                >
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>

                <div className={`
          w-full max-w-4xl rounded-lg shadow-lg p-6
          transition-colors duration-500 ease-in-out
          ${darkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-white bg-opacity-90'}
        `}>
                    <div className="flex items-center space-x-2 mb-4">
                        <>
                            <span className="w-3 h-3 bg-red-500 rounded-full"/>
                            <span className="w-3 h-3 bg-yellow-400 rounded-full"/>
                            <span className="w-3 h-3 bg-green-500 rounded-full"/>
                        </>
                    </div>

                    <h1 className={`text-center text-3xl font-bold mb-6 transition-colors duration-500 ease-in-out ${darkMode ? 'text-white' : 'text-teal-600'}`}>
                        PORTFOLIO
                    </h1>

                    <div className="group grid grid-cols-1 md:grid-cols-3 gap-6">
                        {projects.map((proj) => (
                            <div
                                key={proj.id}
                                className="
        cursor-pointer space-y-4
        transition-transform duration-300
        hover:scale-105
        group-hover:blur-sm hover:blur-none
      "
                            >
                                <div className={`
        w-full aspect-square rounded-md
        transition-colors duration-500 ease-in-out
        ${darkMode
                                    ? 'bg-gradient-to-b from-gray-600 to-gray-500'
                                    : 'bg-gradient-to-b from-teal-300 to-white'}
      `}/>
                                <div className="space-y-1">
                                    <h2 className={`
          text-lg font-semibold
          transition-colors duration-500 ease-in-out
          ${darkMode ? 'text-gray-200' : 'text-gray-800'}
        `}>
                                        {proj.title}
                                    </h2>
                                    <p className={`
          text-sm transition-colors duration-500 ease-in-out
          ${darkMode ? 'text-gray-400' : 'text-gray-600'}
        `}>
                                        {proj.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </div>

    );
}

export default App;
