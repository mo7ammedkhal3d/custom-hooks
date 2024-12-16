import { Fragment } from "react";
import ForwardCounter from "./ForwardCounter";
import BackwardCounter from "./BackwardCounter";
import classes from './Counters.modules.css';

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