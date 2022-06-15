import './default-spinner.css';

function DefaultSpinner() {
    return (
        <div className='loader-container'>
            <div className="lds-default">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <p>source</p>
        </div>
        
    )
}

export default DefaultSpinner;