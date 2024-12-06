import { Fragment } from "react";
import ForwardCounter from "./ForwardCounter";
import BackwardCounter from "./BackwardCounter";

const Counters = () =>{
    return (
        <Fragment>
            <ForwardCounter />
            <BackwardCounter />
        </Fragment>
    );
}

export default Counters; 