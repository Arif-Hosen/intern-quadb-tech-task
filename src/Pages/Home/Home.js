import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    const [allShow, setAllShow] = useState([]);

    // load data and set in a state
    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(res => res.json())
            .then(data => setAllShow(data))
    }, [])
    // console.log(allShow);

    return (
        <div className='container'>
            <h3 className='mt-5 p-3' style={{ color: 'lightgray', backgroundColor: '#e12454' }}>Welcome to Movie Show</h3>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mt-5">
                {
                    allShow.map(movie => <div class="col">
                        <div className="card h-100">
                            <img className='movie-img' src={movie?.show?.image?.medium} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h4 style={{ color: '#e12454', textAlign: 'left' }} class="card-title">{movie.show.name}</h4>

                                <div className='text-start' style={{ color: 'slategray' }}>
                                    <p className='ml-3'>Language: {movie?.show?.language}</p>
                                    <p>Run Time: {movie?.show?.runtime} </p>



                                    <p style={{ color: 'slategray' }} className='text-start'>premiered: {movie?.show?.premiered}</p>
                                    <div style={{ color: 'gold' }}><span style={{ color: 'slategray' }}>Rating:</span>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                </div>
                                <Link to={`/summary/${movie.show.id}`}>
                                    <button style={{ backgroundColor: '#e12454', width: '100%', color: 'white' }} type="button" class="btn mt-3">Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    )
                }

            </div>
        </div >
    );
};

export default Home;