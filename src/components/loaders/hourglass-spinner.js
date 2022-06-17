import './hourglass-spinner.css';

const source = {
    css: `.lds-hourglass {\n
        display: inline-block;\n
        position: relative;\n
        width: 80px;\n
        height: 80px;\n
      }\n
    .lds-hourglass:after {\n
      content: " ";\n
      display: block;\n
      border-radius: 50%;\n
      width: 0;\n
      height: 0;\n
      margin: 8px;\n
      box-sizing: border-box;\n
      border: 32px solid #fff;\n
      border-color: #fff transparent #fff transparent;\n
      animation: lds-hourglass 1.2s infinite;\n
    }\n
    @keyframes lds-hourglass {\n
      0% {\n
        transform: rotate(0);\n
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n
      }\n
      50% {\n
        transform: rotate(900deg);\n
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n
      }\n
      100% {\n
        transform: rotate(1800deg);\n
      }\n
    }`,
    html: `<div className="lds-hourglass"></div>`
}

function HourGlass({toggle}) {
    return (
        <div className='loader-container' onClick={toggle.bind(this, source)}>
            <div className="lds-hourglass"></div>
            <p>source</p>
        </div>
    )
}

export default HourGlass;