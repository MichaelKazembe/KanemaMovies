import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import { API_IMG } from '../../api/tmdb';

const MovieDetails = ({ movie }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div onClick={handleShow}>
                <img src={`${API_IMG}${movie.poster_path}`} alt={movie.title} />
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{movie.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={`${API_IMG}${movie.poster_path}`} alt={movie.title} />
                    <p>{movie.overview}</p>
                    <p>Release Date: {movie.release_date}</p>
                    <p>Rating: {movie.vote_average}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default MovieDetails;

