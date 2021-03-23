import { Component } from 'react';
import s from './Modal.module.css'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {

    componentDidMount() {
        console.log('Modal componentDidMount');

        window.addEventListener('keydown', this.handleKeyDown)
    }
    
    componentWillUnmount() {
        console.log('Modal componentWillUnmount');

        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
                console.log("Нажали ESC");

                this.props.onClose();
            }
    }

    handlOverlayClick = event => {
        console.log('кликнули в оверлей');

        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    }

    render() {
        const { children } = this.props;

        return createPortal(
 <div className={s.Overlay} onClick={this.handlOverlayClick}>
                <div className={s.Modal}>

    {children}
    
  </div>
    </div>, modalRoot)
    }
}

Modal.propTypes = {
    children: PropTypes.element.isRequired
};