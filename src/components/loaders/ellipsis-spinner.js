import './ellipsis-spinner.css';

function EllipsisSpinner() {
    return (
        <div className='loader-container'>
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <p>source</p>
        </div>
    )
}

export default EllipsisSpinner;