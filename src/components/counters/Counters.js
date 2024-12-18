import { Fragment } from "react";
import ForwardCounter from "./ForwardCounter";
import BackwardCounter from "./BackwardCounter";
import './Counters.css';

const Counters = () =>{
    return (
        <Fragment>
            <div className="container">
                <ForwardCounter />
                <BackwardCounter />
            </div>
        </Fragment>
    );
}

export default Counters; 