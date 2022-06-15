import Portal from "../portal";
import './Modal.css';

function Modal({children, toggle, active}) {
    return (
        <Portal>
            {
                active && (
                    <>
                        <div className="Modal-container">
                            <div className="Modal-close" onClick={toggle}>X</div>
                            {children}
                        </div>
                        <div className="overlay" onClick={toggle}></div>
                    </>
                )
            }
        </Portal>
    )
}

export default Modal;