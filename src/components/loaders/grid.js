import './grid.css';

const source = {
    css: `.lds-grid {\n
        display: inline-block;\n
        position: relative;\n
        width: 80px;\n
        height: 80px;\n
      }\n
    .lds-grid div {\n
      position: absolute;\n
      width: 16px;\n
      height: 16px;\n
      border-radius: 50%;\n
      background: #fff;\n
      animation: lds-grid 1.2s linear infinite;\n
    }\n
    .lds-grid div:nth-child(1) {\n
      top: 8px;\n
      left: 8px;\n
      animation-delay: 0s;\n
    }\n
    .lds-grid div:nth-child(2) {\n
      top: 8px;\n
      left: 32px;\n
      animation-delay: -0.4s;\n
    }\n
    .lds-grid div:nth-child(3) {\n
      top: 8px;\n
      left: 56px;\n
      animation-delay: -0.8s;\n
    }\n
    .lds-grid div:nth-child(4) {\n
      top: 32px;\n
      left: 8px;\n
      animation-delay: -0.4s;\n
    }\n
    .lds-grid div:nth-child(5) {\n
      top: 32px;\n
      left: 32px;\n
      animation-delay: -0.8s;\n
    }\n
    .lds-grid div:nth-child(6) {\n
      top: 32px;\n
      left: 56px;\n
      animation-delay: -1.2s;\n
    }\n
    .lds-grid div:nth-child(7) {\n
      top: 56px;\n
      left: 8px;\n
      animation-delay: -0.8s;\n
    }\n
    .lds-grid div:nth-child(8) {\n
      top: 56px;\n
      left: 32px;\n
      animation-delay: -1.2s;\n
    }\n
    .lds-grid div:nth-child(9) {\n
      top: 56px;\n
      left: 56px;\n
      animation-delay: -1.6s;\n
    }\n
    @keyframes lds-grid {\n
      0%, 100% {\n
        opacity: 1;\n
      }\n
      50% {\n
        opacity: 0.5;\n
      }\n
    }`,
    html: `<div className="lds-grid"<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`
}

function Grid({toggle}) {
    return (
        <div className='loader-container' onClick={toggle.bind(this,source)}>
            <div className="lds-grid">
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

export default Grid;