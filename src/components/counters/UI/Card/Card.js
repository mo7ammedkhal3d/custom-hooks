import classes from './Card.module.css';

const Card = (props) => {

  const cardStyle = `${props.className || ''} ${classes.card}`.trim();
  
  console.log(cardStyle);
  

  return <div className={cardStyle}>{props.children}</div>;
};

export default Card;
