import { useState } from 'react';
import './loader-source.css';

function LoaderSource({html,css}) {
    const [textCopied, setTextCopied] = useState({});
    
    let copyToClipBoard = (toCopy) => {
        let text = '';
        switch(toCopy) {
            case 'html':
                text = html;
                break;
            case 'css':
                text = css;
                break;
            default:
                break;
        }

        navigator.clipboard.writeText(text)
        .then(() => {
            if (toCopy === 'html') {
                setTextCopied({html:true});
            }else {
                setTextCopied({css:true});
            }
            setTimeout(() => {setTextCopied({});},2000);
        })
        .catch(err => {
            console.log('Something went wrong', err);
        })
    }

    return (
        <div className='source-container'>
            <div className='html-source-cont'>
                <div className='source-copy-cont'>
                    <p className='source-copied' style={textCopied.html?{display:'block'}:{display:'none'}}>Copied!</p>
                    <button className='source-copy' title='Copy HTML' onClick={copyToClipBoard.bind(this,'html')}>
                        HTML
                        <i>
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                width="300px" height="300px" viewBox="0 0 300 300" style={{width:'1rem',height:'1rem'}} xmlSpace="preserve">
                                <g>
                                    <path style={{fill:'none',stroke:'#000000',strokeWidth:'18',strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:'10'}} d="
                                        M215,232c0,12.1-9.9,22-22,22H55c-12.1,0-22-9.9-22-22V53c0-12.1,9.9-22,22-22h138c12.1,0,22,9.9,22,22V232z"/>
                                </g>
                                <g>
                                    <path style={{fill:'#FFFFFF'}} d="M271,262c0,12.1-9.9,22-22,22H111c-12.1,0-22-9.9-22-22V83c0-12.1,9.9-22,22-22h138
                                        c12.1,0,22,9.9,22,22V262z"/>
                                    <path style={{fill:'none',stroke:'#000000',strokeWidth:'18',strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:'10'}} d="
                                        M271,262c0,12.1-9.9,22-22,22H111c-12.1,0-22-9.9-22-22V83c0-12.1,9.9-22,22-22h138c12.1,0,22,9.9,22,22V262z"/>
                                </g>
                            </svg>
                        </i>
                    </button>
                </div>
                <textarea className='source source-html' defaultValue={html}></textarea>
            </div>
            <div className='css-source-cont'>
                <div className='source-copy-cont'>
                    <p className='source-copied' style={textCopied.css?{display:'block'}:{display:'none'}}>Copied!</p>
                    <button className='source-copy' title='Copy CSS' onClick={copyToClipBoard.bind(this,'css')}>
                        CSS
                        <i>
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                width="300px" height="300px" viewBox="0 0 300 300" style={{width:'1rem',height:'1rem'}} xmlSpace="preserve">
                                <g>
                                    <path style={{fill:'none',stroke:'#000000',strokeWidth:'18',strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:'10'}} d="
                                        M215,232c0,12.1-9.9,22-22,22H55c-12.1,0-22-9.9-22-22V53c0-12.1,9.9-22,22-22h138c12.1,0,22,9.9,22,22V232z"/>
                                </g>
                                <g>
                                    <path style={{fill:'#FFFFFF'}} d="M271,262c0,12.1-9.9,22-22,22H111c-12.1,0-22-9.9-22-22V83c0-12.1,9.9-22,22-22h138
                                        c12.1,0,22,9.9,22,22V262z"/>
                                    <path style={{fill:'none',stroke:'#000000',strokeWidth:'18',strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:'10'}} d="
                                        M271,262c0,12.1-9.9,22-22,22H111c-12.1,0-22-9.9-22-22V83c0-12.1,9.9-22,22-22h138c12.1,0,22,9.9,22,22V262z"/>
                                </g>
                            </svg>
                        </i>
                    </button>
                </div>
                <textarea className='source source-css' defaultValue={css}></textarea>
            </div>
        </div>
    )
}

export default LoaderSource;