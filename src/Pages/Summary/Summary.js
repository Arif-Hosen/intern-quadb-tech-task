import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'
import BookingForm from '../BookingForm/BookingForm';
const Summary = () => {
    const [allShow, setAllShow] = useState([]);
    const [singleShow, setSingleShow] = useState({});
    // get id from dynamic route
    const { id } = useParams();
    useEffect(() => {
        // load data from api
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(res => res.json())
            .then(data => setAllShow(data));
    }, [])
    console.log(allShow)

    useEffect(() => {
        // find specific movie show and display summary
        const movies = allShow.find(movie => movie?.show?.id == id)
        setSingleShow(movies)
    }, [allShow])

    return (
        <div >
            <h2 className='my-5' style={{ color: '#e12454' }} >{singleShow?.show?.name}</h2>
            <Link to='/home'><Button>Home</Button></Link>


            <div class="card mb-3 mx-auto" style={{ maxWidth: '74%' }}>
                <div class="row g-0">

                    <div class="col-md-4">
                        <img width='100%' src={singleShow?.show?.image?.medium} class="img-fluid rounded-start " alt="..." />
                    </div>
                    <div style={{ color: 'white', backgroundColor: '#e12454' }} class="col-md-8 p-3 d-flex align-items-center">
                        <div class="card-body">
                            <p class="card-text">{singleShow?.show?.summary}</p>


                            <BookingForm
                                id={singleShow?.show?.id}
                                singleShow={singleShow}
                            ></BookingForm>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Summary;