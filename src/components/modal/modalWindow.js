import React from 'react';
import PropTypes from 'prop-types';
import Portal from './portal';

const Modal = ({
    title, isOpen, onSubmit, onCancel, onClickOverlay, children
}) => {
    return (
        <>
            { isOpen && (
            <Portal>
                    <div onClick={(e) => onClickOverlay(e)} className="modalOverlay">
                            <div className="modalWindow">
                                <div className="modalHeader">
                                    <div className="modalTitle">{title}</div>
                                    <div className="modalClose" onClick={onCancel}>x</div>
                                </div>
                                <div className="modalBody">
                                    {children}
                                </div>
                                <div className="modalFooter">
                                    <button className="modalButton" onClick={onSubmit}>Submit</button>
                                    <button className="modalButton" onClick={onCancel}>Cancel</button>
                                </div>
                            </div>
                    </div>
            </Portal>
        )}
        </>
    )
}

export default Modal;