import React, { useState } from 'react'
import { Alert, Button, FloatingLabel, Form, Modal } from "react-bootstrap";



const BookingForm = ({ singleShow }) => {
    const [modalShow, setModalShow] = React.useState(false);
    const [success, setSuccess] = useState(false);

    // modal
    function MyVerticallyCenteredModal(props) {
        const handleSubmit = (e) => {
            // handle page reload
            e.preventDefault();
            setSuccess(true)

        }
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title
                        className='text-center'
                        id="contained-modal-title-vcenter">
                        <h3>Movie: {singleShow?.show?.name}</h3>
                        <p>Language: {singleShow?.show?.language}</p>
                        <p>Runtime: {singleShow?.show?.runtime}</p>
                        {
                            success && <Alert variant='success'>
                                Successfully Place Booking!
                            </Alert>
                        }
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                        <form onSubmit={handleSubmit}>

                            <FloatingLabel className='mb-3' controlId="floatingInput" label="Your Name">
                                <Form.Control type="text" placeholder="Your Name" />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mb-3"
                            >
                                <Form.Control type="email" placeholder="name@example.com" />
                            </FloatingLabel>
                            <FloatingLabel
                                className='mb-3' controlId="floatingInput" label="Your Address">
                                <Form.Control type="text" placeholder="Your Name" />
                            </FloatingLabel>
                            <FloatingLabel
                                className='mb-3'
                                controlId="floatingInput" label="Your Phone">
                                <Form.Control type="number" placeholder="Your Phone" />
                            </FloatingLabel>
                            <Button style={{ backgroundColor: '#e12454', width: '100%', color: 'white' }} type='submit'>Place Booking</Button>
                        </form>
                    </>
                </Modal.Body>

            </Modal>
        );
    }

    return (
        <>
            <Button style={{ backgroundColor: 'white', color: '#e12454' }} onClick={() => setModalShow(true)}>
                Book Now
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );

}
export default BookingForm;