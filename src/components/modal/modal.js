import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ModalWindow from './modalWindow';
import './modal.css';

class Modal extends Component {
    state = {
        isOpen: false
    }

    onClickOverlay = (e) => {
        const target = e.target;
        if(target && target.matches('div.modalOverlay')){
            this.setState({isOpen: false})
        }
    }

    openModal = () => {
        console.log('opened!');
        this.setState({
            isOpen: true,
            isOverlay: true
        })
    }

    onHandleSubmit = () => {
        console.log('submitted!');
        this.setState({
            isOpen: false
        })
    }

    onHandleCancel = () =>{
        console.log('cancelled')
        this.setState({
            isOpen: false
        })
    }

    render(){
        return(
            <>
                <h2 className="title1">Modal Window Realization</h2>
                <button className="modalButton" onClick={this.openModal}>Click</button>
                <ModalWindow 
                    title='Window'
                    isOpen={this.state.isOpen}
                    onClickOverlay= {this.onClickOverlay}
                    onSubmit={this.onHandleSubmit}
                    onCancel={this.onHandleCancel}>
                        <p className="modalText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, vitae laudantium? Accusamus dolor odio eum, nesciunt nihil quasi doloremque. Voluptatum consequuntur exercitationem quisquam provident. Omnis consequuntur ea doloribus minima rerum?</p>
                    </ModalWindow>
            </>
        )
    }
}

export default Modal;