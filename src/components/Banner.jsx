import React, { useState, useEffect } from 'react';
import axios from '../baza-dannix/axios';
import request from '../baza-dannix/request';

const Banner = () => {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        const fetchMovie = async () => {
            const responseData = await axios.get(request.fetchNetflixOriginals)
            setMovie(
                responseData.data.results[
                    Math.floor(Math.random() * responseData.data.results.length)
                ]
            );
        };
        fetchMovie();
    }, [])

    return (
        <header
            style={{
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundSize: "cover",
                backgroundPosition: "center center"
            }}
        >
            <div className='main'>
                <div className='bannerContents'>
                    <h1 className='movieTitle'>{movie.original_name}</h1>
                    <div className='buttons'>
                        <button className='btn'>Play</button>
                        <button className='btn'>My List</button>
                    </div>
                    <p className='movieDesc'>{movie.overview}</p>
                </div>
            </div>
        </header>
    );
};

export default Banner;