import classes  from './Header.module.css';
import cover from './../../../assets/images/cover.jpg';

const Header = props =>{
    return (
        <header className={classes.header}>
            <div className={classes.hero}>
                <div className={classes['header-text']}>
                    <h1>Learn how to bulid custom hook</h1>
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