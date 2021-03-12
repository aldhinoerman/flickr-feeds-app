import React, { useState } from "react";
import NoImages from "./NoImages";
import Image from "./Image";
import { Modal, Button, Container } from 'react-bootstrap';

const Gallery = props => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const results = props.data;
    let images;
    let noImages;
    results.length > 0 ?
        images = results.map(image => {
            let farm = image.farm;
            let server = image.server;
            let id = image.id;
            let secret = image.secret;
            let title = image.title;
            let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
            return <Image url={url} key={id} alt={title} />
        })
        : noImages = <NoImages />;

    return (
        <React.Fragment>
            <Container>
                <ul onClick={handleShow}>{images}</ul>
                {noImages}
                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Photo details has didn't avaible yet</Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
            </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </React.Fragment>
    );
};

export default Gallery;