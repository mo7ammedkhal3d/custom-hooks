import { Fragment } from "react";
import ForwardCounter from './forwardCounter/ForwardCounter';
import BackwardCounter from './backwardCounter/BackwardCounter';
import classes from './Counters.module.css';

const Counters = () =>{
    return (
        <Fragment>
            <div className={classes.container}>
                <ForwardCounter />
                <BackwardCounter />
            </div>
        </Fragment>
    );
}

export default Counters; 