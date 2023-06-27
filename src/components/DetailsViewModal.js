import React from 'react'
import { Button, Modal } from 'react-bootstrap'
function DetailsViewModal({ show, onClose, currentItem }) {  
 const article = currentItem ? currentItem.article : "";
 const views = currentItem ? currentItem.views : "" ;
return (
    <>
        <Modal show={show} onHide={onClose} animation={true}>
            <Modal.Header closeButton>
                <Modal.Title>{article}</Modal.Title>
            </Modal.Header>
            <Modal.Body><div>{article}</div><div>{views}</div></Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </>
)
}
export default DetailsViewModal