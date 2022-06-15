import './dual-ring-spinner.css';

function DualRingSpinner() {
    return (
        <div className='loader-container'>
            <div className="lds-dual-ring"></div>
            <p>source</p>
        </div>
        
    )
}

export default DualRingSpinner;