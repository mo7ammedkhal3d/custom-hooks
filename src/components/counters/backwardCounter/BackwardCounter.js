import { useEffect, useState } from 'react';
import Card from '../UI/Card/Card';
import useCounter from '../../../hooks/use-counter';
import classes from './BackwardCounter.module.css';

const BackwardCounter = () => {

  const [rightAnimation,setRightAnimation] = useState(true);
  const counter = useCounter(false)

  useEffect(()=>{
    const identifier = setTimeout(() => {
      setRightAnimation(false);
    }, 6000);

    return () => clearTimeout(identifier);

  },[]);

  return <Card className={rightAnimation ? 'right-anomation':''}>{counter}</Card>;
};

export default BackwardCounter;
