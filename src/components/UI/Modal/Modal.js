import React from "react";
import './Modal.scss';

const Modal = ({ handleClose, show, children }) => {

    const divStyle = {
        display: show ? 'block' : 'none'
    };

    function closeModal(e) {
        e.stopPropagation()
        handleClose();
    }

    return (
        <div
            className="modal"
            onClick={ closeModal }
            style={divStyle}>
            <div
                className="modal-content"
                onClick={ e => e.stopPropagation() } >
                {children}
                <span
                    className="close"
                    onClick={ closeModal }>&times;</span>
            </div>
        </div>
    );
};

export default Modal;
