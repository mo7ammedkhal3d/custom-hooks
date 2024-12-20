import { useEffect, useState } from 'react';
import Card from './UI/Card/Card';
import useCounter from '../../hooks/use-counter';

const BackwardCounter = () => {

  const [rightAnimation,setRightAnimation] = useState(true);
  const counter = useCounter(false)

  useEffect(()=>{
    const identifire = setTimeout(() => {
      setRightAnimation(false);
    }, 6000);

  },[]);

  return <Card className={rightAnimation ? 'right-anomation':''}>{counter}</Card>;
};

export default BackwardCounter;
