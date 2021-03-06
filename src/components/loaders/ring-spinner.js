import './ring-spinner.css';

const source = {
    css : `.lds-ring {\n
        display: inline-block;\n
        position: relative;\n
        width: 80px;\n
        height: 80px;\n
      }\n
    .lds-ring div {\n
      box-sizing: border-box;\n
      display: block;\n
      position: absolute;\n
      width: 64px;\n
      height: 64px;\n
      margin: 8px;\n
      border: 8px solid #fff;\n
      border-radius: 50%;\n
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n
      border-color: #fff transparent transparent transparent;\n
    }\n
    .lds-ring div:nth-child(1) {\n
      animation-delay: -0.45s;\n
    }\n
    .lds-ring div:nth-child(2) {\n
      animation-delay: -0.3s;\n
    }\n
    .lds-ring div:nth-child(3) {\n
      animation-delay: -0.15s;\n
    }\n
    @keyframes lds-ring {\n
      0% {\n
        transform: rotate(0deg);\n
      }\n
      100% {\n
        transform: rotate(360deg);\n
      }\n
    }`,
    html : `<div className="lds-ring"><div></div><div></div><div></div><div></div></div>`
}

function RingSpinner({toggle}) {
    return (
        <div className='loader-container' onClick={toggle.bind(this,source)}>
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <p>source</p>
        </div>
        
    )
}

export default RingSpinner;