import React, {useRef, useState} from 'react';
import BackgroundBlobs from './components/BackgroundBlobs';

const articles = [
    {
        id: 1,
        category: 'Category',
        title: 'Title',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        imageUrl: 'https://i.pinimg.com/736x/99/d6/c3/99d6c37ea8db11ac8148deede4f67407.jpg',
    },
    {
        id: 2,
        category: 'Category',
        title: 'Title',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        imageUrl: 'https://i.pinimg.com/736x/78/6e/c9/786ec95ec685685e7d3ff3e1140e56ca.jpg',
    },
    {
        id: 3,
        category: 'Category',
        title: 'Title',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        imageUrl: 'https://i.pinimg.com/736x/99/d6/c3/99d6c37ea8db11ac8148deede4f67407.jpg',
    },
];

export default function App() {
    const carouselRef = useRef(null);
    const [hoveredId, setHoveredId] = useState(null);

    const scroll = (direction) => {
        if (!carouselRef.current) return;
        const cardWidth = 400;
        carouselRef.current.scrollBy({
            left: direction === 'left' ? -cardWidth : cardWidth,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <section className="relative w-full h-screen bg-white overflow-hidden">
                <section className="relative w-full h-screen bg-white overflow-hidden">
                    <div className="absolute inset-0 bg-gray-200 z-0"></div>
                    <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 rounded-full filter blur-3xl opacity-50 z-0" />
                    <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-400 rounded-full filter blur-2xl opacity-40 z-0" />

                    <div className="absolute top-0 left-0 w-full z-10">
                        <h1 className="accent-gray-500 font-extrabold text-[19.5vw] leading-none whitespace-nowrap text-center">
                            WELCOME
                        </h1>
                    </div>
                </section>
            </section>

            <section className="relative h-[70vh] py-12 pl-6 flex items-center">
                <BackgroundBlobs/>

                <div className="ml-auto pl-[30%] w-full">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-5xl font-extrabold px-10">Projects</h2>
                        <div className="flex space-x-2">
                            <button
                                onClick={() => scroll('left')}
                                className="w-[30px] h-[30px] p-0 bg-transparent rounded-full shadow hover:shadow-md transition"
                                aria-label="Scroll Left"
                            >
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="w-[30px] h-[30px] p-0 bg-transparent rounded-full shadow hover:shadow-md transition"
                                aria-label="Scroll Left"
                            >
                            </button>
                        </div>
                    </div>

                    <div
                        ref={carouselRef}
                        className="flex space-x-8 overflow-x-auto overflow-visible hide-scrollbar px-12 py-5 pb-8"
                    >
                        {articles.map((a) => {
                            const isOther = hoveredId !== null && hoveredId !== a.id;
                            return (
                                <article
                                    key={a.id}
                                    onMouseEnter={() => setHoveredId(a.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                    className={`
                    flex-none w-96 bg-white rounded-xl
                    transition-transform duration-200
                    hover:shadow-[0_4px_10px_rgba(111,78,55,0.25)]
                    hover:scale-102

                    filter
                    ${isOther ? 'blur-sm' : 'blur-none'}
                  `}
                                >
                                    <img
                                        src={a.imageUrl}
                                        alt={a.title}
                                        className="w-full h-44 object-cover rounded-t-xl"
                                    />
                                    <div className="p-4">
                                        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                                            {a.category}
                                        </p>
                                        <h3 className="mt-2 text-lg font-semibold text-gray-900 leading-tight">
                                            {a.title}
                                        </h3>
                                        <p className="mt-3 text-sm text-gray-600">
                                            {a.description}
                                        </p>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
