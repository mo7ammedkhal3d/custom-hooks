import {useEffect, useState } from 'react';
import classes  from './Header.module.css';
import cover from './../../../assets/images/cover.jpg';

const Header = props =>{

    const [animatedText,setAnimatedText] = useState('');
    const [writeState,setWriteState] = useState(false);
    const [displayText, setDisplayText] = useState([]);
    const [delay,setdelay] = useState(150);

        useEffect(() => {
            const text = "In more realistic and easy example";
            const interval = setInterval(() => {
                if (writeState) {
                    if (animatedText.length < text.length) {
                        setAnimatedText(prevText => prevText + text[prevText.length]);
                        setDisplayText(prev =>
                            [...prev, { char: text[animatedText.length], color: getRandomColor() }])
                    } else {
                        setWriteState(false);
                        setdelay(30);
                    }
                } else {
                    if (animatedText.length > 0) {
                        setAnimatedText(prevText => prevText.slice(0, -1));
                        setDisplayText(prev => prev.slice(0, -1));
                    } else {
                        setWriteState(true);
                        setdelay(150);
                    }
                }
            }, delay); 
            return () => clearInterval(interval);
        }, [writeState, animatedText]);

        const getRandomColor = () => {
            const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF"];
            return colors[Math.floor(Math.random() * colors.length)];
        };

    return (
        <header className={classes.header}>
            <div className={classes.hero}>
                <div className={classes['header-text']}>
                    <h1 className={classes.test}>Learn how to bulid custom hook<pre> in {displayText.map((item, index) => (
                        <span
                            key={index}
                            style={{ color: item.color}}
                            className={classes['animated-char']}>
                            {item.char}
                        </span>
            ))}</pre></h1>
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