import { useEffect, useState } from 'react';
import Card from './../UI/Card/Card';
import useCounter from './../../../hooks/use-counter';
import classes from './ForwardCounter.module.css';

const ForwardCounter = () => {

  const [leftAnimation,setLeftAnimation] = useState(true);
  const counter = useCounter(true);

  // useEffect(()=>{
  //   const identifier = setTimeout(() => {
  //     setLeftAnimation(false);
  //   }, 6000);

  //   return () => clearTimeout(identifier);

  // },[]);

  return <Card className={leftAnimation ? classes['left-animation']:''}>{counter}</Card>;
};

export default ForwardCounter;
