import { useEffect, useState } from 'react';
import useCounter from "./../../hooks/use-counter";
import Card from './Card';

const BackwardCounter = () => {

  const [leftAnimation,setLeftAnimation] = useState(true);
  const counter = useCounter(false)

  useEffect(()=>{
    const identifier = setTimeout(() => {
      setLeftAnimation(false);
    }, 1000);

    return () => clearTimeout(identifier);

  },[]);

  return <Card className={leftAnimation ? 'left-animation':''}>{counter}</Card>;
};

export default BackwardCounter;
