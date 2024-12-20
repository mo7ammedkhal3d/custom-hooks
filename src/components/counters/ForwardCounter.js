import { useEffect, useState } from 'react';
import useCounter from '../../hooks/use-counter';
import Card from './UI/Card/Card';

const ForwardCounter = () => {

  const [leftAnimation,setLeftAnimation] = useState(true);
  const counter = useCounter(true);

  useEffect(()=>{
    const identifire = setTimeout(() => {
      setLeftAnimation(false);
    }, 6000);

  },[]);

  return <Card className={leftAnimation ? 'left-anomation':''}>{counter}</Card>;
};

export default ForwardCounter;
