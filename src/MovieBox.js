import { Modal, show, Button } from 'react-bootstrap';
import React, { useState } from 'react';

const API_IMG = 'https://image.tmdb.org/t/p/w500';

const MovieBox = ({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className='text-center bg-light mb-3'>
      <div className='card'>
        <img
          className='card-img'
          src={API_IMG + poster_path}
          onClick={handleShow}
          alt=''
        />
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              className='card-img-top'
              style={{ width: '14rem' }}
              src={API_IMG + poster_path}
              alt=''
            />
            <h3>{title}</h3>
            <h4>ImDb: {vote_average}</h4>
            <h5>Release Date: {release_date}</h5>
            <br />
            <h6>Overview</h6>
            <p>{overview}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default MovieBox;
