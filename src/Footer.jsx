import {useState} from "react";

function Footer() {
    const [scoreLeft, setScoreLeft] = useState(0);
    const [scoreRight, setScoreRight] = useState(0);
    return <div className={'footer'}>
        <button>Pause</button>
        <p>
            {scoreLeft}: {scoreRight}
        </p>
        <button>Restart</button>
    </div>
}

export default Footer;
