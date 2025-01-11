import { useEffect, useState } from 'react';
import Card from './Card';
import useCounter from "./../../hooks/use-counter";

const ForwardCounter = () => {

  const [rightAnimation,setRightAnimation] = useState(true);
  const counter = useCounter(true);

  useEffect(()=>{
    const identifier = setTimeout(() => {
      setRightAnimation(false);
    }, 6000);

    return () => clearTimeout(identifier);

  },[]);

  return <Card className={rightAnimation ? 'right-animation':''}>{counter}</Card>;
};

export default ForwardCounter;
