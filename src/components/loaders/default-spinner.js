import './default-spinner.css';

const source = {
    css: `.lds-default {\n
        display: inline-block;\n
        position: relative;\n
        width: 80px;\n
        height: 80px;\n
      }\n
    .lds-default div {\n
      position: absolute;\n
      width: 6px;\n
      height: 6px;\n
      background: #fff;\n
      border-radius: 50%;\n
      animation: lds-default 1.2s linear infinite;\n
    }\n
    .lds-default div:nth-child(1) {\n
      animation-delay: 0s;\n
      top: 37px;\n
      left: 66px;\n
    }\n
    .lds-default div:nth-child(2) {\n
      animation-delay: -0.1s;\n
      top: 22px;\n
      left: 62px;\n
    }\n
    .lds-default div:nth-child(3) {\n
      animation-delay: -0.2s;\n
      top: 11px;\n
      left: 52px;\n
    }\n
    .lds-default div:nth-child(4) {\n
      animation-delay: -0.3s;\n
      top: 7px;\n
      left: 37px;\n
    }\n
    .lds-default div:nth-child(5) {\n
      animation-delay: -0.4s;\n
      top: 11px;\n
      left: 22px;\n
    }\n
    .lds-default div:nth-child(6) {\n
      animation-delay: -0.5s;\n
      top: 22px;\n
      left: 11px;\n
    }\n
    .lds-default div:nth-child(7) {\n
      animation-delay: -0.6s;\n
      top: 37px;\n
      left: 7px;\n
    }\n
    .lds-default div:nth-child(8) {\n
      animation-delay: -0.7s;\n
      top: 52px;\n
      left: 11px;\n
    }\n
    .lds-default div:nth-child(9) {\n
      animation-delay: -0.8s;\n
      top: 62px;\n
      left: 22px;\n
    }\n
    .lds-default div:nth-child(10) {\n
      animation-delay: -0.9s;\n
      top: 66px;\n
      left: 37px;\n
    }\n
    .lds-default div:nth-child(11) {\n
      animation-delay: -1s;\n
      top: 62px;\n
      left: 52px;\n
    }\n
    .lds-default div:nth-child(12) {\n
      animation-delay: -1.1s;\n
      top: 52px;\n
      left: 62px;\n
    }\n
    @keyframes lds-default {\n
      0%, 20%, 80%, 100% {\n
        transform: scale(1);\n
      }\n
      50% {\n
        transform: scale(1.5);\n
      }\n
    }`,
    html: `<div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`
}

function DefaultSpinner({toggle}) {
    return (
        <div className='loader-container' onClick={toggle.bind(this,source)}>
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