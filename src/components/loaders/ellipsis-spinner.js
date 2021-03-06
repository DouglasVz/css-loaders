import './ellipsis-spinner.css';

const source = {
    css: `.lds-ellipsis {\n
        display: inline-block;\n
        position: relative;\n
        width: 80px;\n
        height: 80px;\n
      }\n
    .lds-ellipsis div {\n
      position: absolute;\n
      top: 33px;\n
      width: 13px;\n
      height: 13px;\n
      border-radius: 50%;\n
      background: #fff;\n
      animation-timing-function: cubic-bezier(0, 1, 1, 0);\n
    }\n
    .lds-ellipsis div:nth-child(1) {\n
      left: 8px;\n
      animation: lds-ellipsis1 0.6s infinite;\n
    }\n
    .lds-ellipsis div:nth-child(2) {\n
      left: 8px;\n
      animation: lds-ellipsis2 0.6s infinite;\n
    }\n
    .lds-ellipsis div:nth-child(3) {\n
      left: 32px;\n
      animation: lds-ellipsis2 0.6s infinite;\n
    }\n
    .lds-ellipsis div:nth-child(4) {\n
      left: 56px;\n
      animation: lds-ellipsis3 0.6s infinite;\n
    }\n
    @keyframes lds-ellipsis1 {\n
      0% {\n
        transform: scale(0);\n
      }\n
      100% {\n
        transform: scale(1);\n
      }\n
    }\n
    @keyframes lds-ellipsis3 {\n
      0% {\n
        transform: scale(1);\n
      }\n
      100% {\n
        transform: scale(0);\n
      }\n
    }\n
    @keyframes lds-ellipsis2 {\n
      0% {\n
        transform: translate(0, 0);\n
      }\n
      100% {\n
        transform: translate(24px, 0);\n
      }\n
    }`,
    html: `<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>`
}

function EllipsisSpinner({toggle}) {
    return (
        <div className='loader-container' onClick={toggle.bind(this,source)}>
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