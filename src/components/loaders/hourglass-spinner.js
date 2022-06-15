import './hourglass-spinner.css';

function HourGlass() {
    return (
        <div className='loader-container'>
            <div className="lds-hourglass"></div>
            <p>source</p>
        </div>
    )
}

export default HourGlass;