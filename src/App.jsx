import React, {useRef} from 'react';
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
        imageUrl:
            'https://i.pinimg.com/736x/78/6e/c9/786ec95ec685685e7d3ff3e1140e56ca.jpg',
    },
    {
        id: 3,
        category: 'Category',
        title: 'Title',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        imageUrl:
            'https://i.pinimg.com/736x/99/d6/c3/99d6c37ea8db11ac8148deede4f67407.jpg',
    },

];

export default function App() {
    const carouselRef = useRef(null);

    const scroll = (direction) => {
        if (!carouselRef.current) return;
        const cardWidth = 400;
        carouselRef.current.scrollBy({left: direction === 'left' ? -cardWidth : cardWidth, behavior: 'smooth'});
    };

    return (
        <>
            <section className="h-screen bg-black"/>

            <section className="relative h-[70vh] py-12 px-6 flex items-center">
                <BackgroundBlobs/>

                <div className="ml-auto pl-[30%] w-full">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-5xl font-extrabold px-13">Projects</h2>
                        <div className="flex space-x-2">
                            <button
                                onClick={() => scroll('left')}
                                className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
                            >
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
                            >
                            </button>
                        </div>
                    </div>

                    <div
                        ref={carouselRef}
                        className="flex space-x-8 overflow-x-auto overflow-visible hide-scrollbar px-12 py-5 pb-8"
                    >
                        {articles.map((a) => (
                            <article
                                key={a.id}
                                className="
    flex-none w-96 bg-white rounded-xl
    shadow-none
    transform transition-transform duration-200
    hover:shadow-[0_4px_10px_rgba(111,78,55,0.25)]
    hover:scale-102
  "
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
                                    <p className="mt-3 text-sm text-gray-600">by {a.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
