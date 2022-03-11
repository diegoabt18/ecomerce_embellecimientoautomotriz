import React from 'react'
import Modal from 'react-modal'

const ModalShoppingCart = ({modalIsOpen, setModalIsOPen,}) => {

    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.62)',
            zIndex: '99',
        },
        content: {
           // position: 'absolute',
            //width: '15rem',
            //height: '100vh',
            //top: '0px',
            //left: '100%',
            right: 'auto',
            bottom: 'auto',
            /*marginRight: '-50%',*/
            //transform: 'translate(-100%, 0)',
            background: '#fff',
            borderRadius: '0px',
            //padding: '15px',
            //overflow: 'scroll',

        },
    };
    Modal.setAppElement('#root');

    function closeModal() {
        setModalIsOPen(false);
    }


    return (
        <>
            <Modal
                className="animate-[slide_1s_ease-out] overflow-y-scroll no-scrollbar"
                isOpen={modalIsOpen}
                style={customStyles}
                onAfterClose={closeModal}
                ariaHideApp={false}
                contentLabel="Example Modal"
            /*appElement={document.getElementById('root')}*/
            >
                    hola que esta haciendo
            </Modal>
        </>
    )
}

export default ModalShoppingCart