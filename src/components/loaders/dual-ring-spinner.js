import './dual-ring-spinner.css';

const source = {
    css: `.lds-dual-ring {\n
        display: inline-block;\n
        width: 80px;\n
        height: 80px;\n
      }\n
    .lds-dual-ring:after {\n
      content: " ";\n
      display: block;\n
      width: 64px;\n
      height: 64px;\n
      margin: 8px;\n
      border-radius: 50%;\n
      border: 6px solid #fff;\n
      border-color: #fff transparent #fff transparent;\n
      animation: lds-dual-ring 1.2s linear infinite;\n
    }\n
    @keyframes lds-dual-ring {\n
      0% {\n
        transform: rotate(0deg);\n
      }\n
      100% {\n
        transform: rotate(360deg);\n
      }\n
    }`,
    html: `<div className="lds-dual-ring"></div>`
}

function DualRingSpinner({toggle}) {
    return (
        <div className='loader-container' onClick={toggle.bind(this,source)}>
            <div className="lds-dual-ring"></div>
            <p>source</p>
        </div>
        
    )
}

export default DualRingSpinner;