import { useState,useEffect } from "react";
import Card from './components/Card';

const useCounter = (props) => {
        const [counter, setCounter] = useState(0);
      
        useEffect(() => {
          const interval = setInterval(() => {
            setCounter((prevCounter) =>(props.type ==='+' ? prevCounter + 1 : prevCounter - 1) );
          }, 1000);
      
          return () => clearInterval(interval);
        }, []);
      
        return counter;
};


export default useCounter;