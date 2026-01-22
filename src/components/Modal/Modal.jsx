import React from 'react'
import './Modal.css'


function Modal({ children, title, close, isOpen }) {
    return (
        <>
            {isOpen ? (
                <div className='modal' onClick={() => close(false)}>
                    <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-content" >
                            <div className="modal-header">
                                <h5 className='modal-title'>{title}</h5>
                                <button onClick={() => close(false)} className='close'>&times;</button>
                            </div>
                            <div className="modal-body">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            ) :
            null}
        </>

    )
}


export default Modal
