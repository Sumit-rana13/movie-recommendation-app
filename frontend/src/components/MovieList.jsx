import React from 'react'

export default function MovieList({ movies }) {

    if (!Array.isArray(movies) || movies.length === 0) {
        return <p>No recommendations yet</p>;
    }

   

    return (
        <ul className="mt-6 space-y-2">
           

            {movies.map((movie, index) => (
                <li
                    key={index}
                    className="p-3 bg-gray-100 rounded shadow"
                >
                    🎬{movie}
                </li>
            ))}

        </ul>
    );

}

