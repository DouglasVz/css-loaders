import './Board.css';
import { useState } from 'react';

import RollerSpinner from './loaders/roller-spinner';
import RingSpinner from './loaders/ring-spinner';
import DualRingSpinner from './loaders/dual-ring-spinner';
import DefaultSpinner from './loaders/default-spinner';
import LightsSpinner from './loaders/lights-spinner';
import HourGlass from './loaders/hourglass-spinner';
import EllipsisSpinner from './loaders/ellipsis-spinner';
import RippleSpinner from './loaders/ripple-spinner';
import Grid from './loaders/grid';
import Modal from './Modal';
import LoaderSource from './loader-source';

function Board () {
    const [modalStatus, setModalStatus] = useState(false);
    const [currentCode, setCurrentCode] = useState({});

    let toggle = (source) => {
        setModalStatus(!modalStatus);
        setCurrentCode(source);
    }

    return (
        <div className="Board">
            <RollerSpinner toggle={toggle}/>
            <RingSpinner toggle={toggle}/>
            <DualRingSpinner toggle={toggle}/>
            <DefaultSpinner toggle={toggle}/>
            <LightsSpinner toggle={toggle}/>
            <HourGlass toggle={toggle}/>
            <EllipsisSpinner toggle={toggle}/>
            <RippleSpinner toggle={toggle}/>
            <Grid toggle={toggle}/>
            <Modal active={modalStatus} toggle={toggle}>
                <LoaderSource html={currentCode.html} css={currentCode.css}/>
            </Modal>
        </div>
    )
}

export default Board;