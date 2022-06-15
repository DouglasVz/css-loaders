import ReactDOM from "react-dom";
import {useEffect} from 'react';
function Portal({children}) {
    let portalRoot = document.getElementById('portal');
    let element = document.createElement('div');
    useEffect(() => {
        portalRoot.appendChild(element);
        return () => {
            portalRoot.removeChild(element);
        }
    })

    return ReactDOM.createPortal(children, element);
}

export default Portal;