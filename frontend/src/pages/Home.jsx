import React from 'react'
import { useState } from "react";
import MovieForm from "../components/MovieForm"
import MovieList from "../components/MovieList"
import { fetchRecommendation } from "../services/api"

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (input) => {
    setLoading(true);
    const data = await fetchRecommendation(input)
    const movieArray = data.movies
      .split("\n")
      .map(m => m.replace(/^\d+\.\s*/, "").trim());

    setMovies(movieArray);
    setLoading(false);
  }
  console.log("Movies state:", movies);

  return (
    <div className="max-w-xl mx-auto mt-20 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center"> 🎥 AI Movie Recommendation</h1>
      <MovieForm onSubmit={handleSubmit} loading={loading} />
      <MovieList movies={movies} />

    </div>
  )
}

