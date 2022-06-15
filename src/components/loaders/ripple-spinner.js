import './ripple-spinner.css';

const source = {
    css: `.lds-ripple {\n
        display: inline-block;\n
        position: relative;\n
        width: 80px;\n
        height: 80px;\n
      }\n
      .lds-ripple div {\n
        position: absolute;\n
        border: 4px solid #fff;\n
        opacity: 1;\n
        border-radius: 50%;\n
        animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n
      }\n
      .lds-ripple div:nth-child(2) {\n
        animation-delay: -0.5s;\n
      }\n
      @keyframes lds-ripple {\n
        0% {\n
          top: 36px;\n
          left: 36px;\n
          width: 0;\n
          height: 0;\n
          opacity: 0;\n
        }\n
        4.9% {\n
          top: 36px;\n
          left: 36px;\n
          width: 0;\n
          height: 0;\n
          opacity: 0;\n
        }\n
        5% {\n
          top: 36px;\n
          left: 36px;\n
          width: 0;\n
          height: 0;\n
          opacity: 1;\n
        }\n
        100% {\n
          top: 0px;\n
          left: 0px;\n
          width: 72px;\n
          height: 72px;\n
          opacity: 0;\n
        }\n
      }`,
    html: `<div className="lds-ripple"><div></div><div></div></div>`
}

function RippleSpinner({toggle}) {
    return (
        <div className='loader-container' onClick={toggle.bind(this,source)}>
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
            <p>source</p>
        </div>
    )
}

export default RippleSpinner;