import React from 'react'

export default function Card({username, btntext="visit me"}) {
    return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-md bg-white border border-gray-200">
        <img
        className="w-full h-48 object-cover"
        src="https://images.unsplash.com/photo-1503264116251-35a269479413"
        alt="Card"
        />
        <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{username}</h2>
        <p className="text-gray-600 mt-2">
            This is a simple card component built using Tailwind CSS.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            {btntext}
        </button>
        </div>
    </div>
    );
}