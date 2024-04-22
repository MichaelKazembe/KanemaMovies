import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import { BASE_URL, API_KEY, API_IMG } from '../../api/tmdb';

const MovieDetails = ({ movieID }) => {
    const [movie, setMovie] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const movieDetails = `/movie/${movieID}?`;

            try {
                const response = await fetch(
                    `${BASE_URL}${movieDetails}${API_KEY}`
                );
                const data = await response.json();
                setMovie(data);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovieDetails();
    }, [movieID]);

    return (
        <div className="card text-center bg-secondary mb-3">
            <div className="card-body">
                {movie && (
                    <>
                        <img className="card-img-top" src={API_IMG + movie.poster_path} alt={movie.title} />
                        <div className="card-body">
                            <button type="button" className="btn btn-dark" onClick={handleShow}>View More</button>
                            <Modal show={showModal} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{movie.title}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <img className="card-img-top" style={{ width: '14rem' }} src={API_IMG + movie.poster_path} alt={movie.title} />
                                    <h3>{movie.title}</h3>
                                    <h4>IMDb: {movie.vote_average}</h4>
                                    <h5>Release Date: {movie.release_date}</h5>
                                    <br></br>
                                    <h6>Overview</h6>
                                    <p>{movie.overview}</p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default MovieDetails;
