import Portal from "../portal";
import './Modal.css';

function Modal({children, toggle, active}) {
    return (
        <Portal>
            {
                active && (
                    <>
                        <div className="Modal-container">
                            <div className="Modal-close-cont">
                                <div className="Modal-close" onClick={toggle}>
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        width="30px" height="30px" viewBox="0 0 30 30" style={{width:'1rem', height:'1rem'}} xmlSpace="preserve">
                                    <line style={{fill:'none',stroke:'#E2E2E2',strokeWidth:'3',strokeLinecap:'round',strokeMiterlimit:'10'}} x1="27.765" y1="2.212" x2="2.148" y2="27.85"/>
                                    <line style={{fill:'none',stroke:'#E2E2E2',strokeWidth:'3',strokeLinecap:'round',strokeMiterlimit:'10'}} x1="2.148" y1="2.146" x2="27.765" y2="27.788"/>
                                    </svg>
                                </div>
                            </div>
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