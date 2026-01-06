import React from 'react'
import { useState } from "react"

export default function MovieForm({ onSubmit, loading }) {

    const [input, setInput] = useState("");

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onSubmit(input)
        }}>
            <input
                className="w-full p-3 rounded border"
                placeholder="e.g. action movies with strong female lead"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <br />
            <button 
                className="bg-black text-white px-5 rounded"
                disabled={loading}
            >
                {loading ? "Loading..." : "Get Recommendations"}
            </button>
            
        </form>
    )
}

