import { useEffect, useState } from 'react';
import classes  from './Header.module.css';
import cover from './../../../assets/images/cover.jpg';

const Header = props =>{

    const [animatedText,setAnimatedText] = useState('');
    const [writeState,setWriteState] = useState(false);

        useEffect(() => {
            const text = "In more realistic and easy example";
            const interval = setInterval(() => {
                if (writeState) {
                    if (animatedText.length < text.length) {
                        setAnimatedText(prevText => prevText + text[prevText.length]);
                    } else {
                        setWriteState(false);
                    }
                } else {
                    if (animatedText.length > 0) {
                        setAnimatedText(prevText => prevText.slice(0, -1));
                    } else {
                        setWriteState(true);
                    }
                }
            },120); 
            return () => clearInterval(interval);
        }, [writeState, animatedText]);

    return (
        <header className={classes.header}>
            <div className={classes.hero}>
                <div className={classes['header-text']}>
                    <h1>Learn how to bulid custom hook<pre className={classes.test}> in {animatedText}</pre></h1>
                </div>
                <img src={cover} />
            </div>
            <nav>
                <button onClick={props.onShowCounters}>Counters</button>
                <button onClick={props.onShowTaskSched}>Task Scheduling</button>
            </nav>
        </header>
    );
}

export default Header;