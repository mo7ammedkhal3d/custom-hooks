import classes from './Footer.module.css';

const Footer = props => {

    const year = new Date().getFullYear();

    return (
        <footer className={classes.footer}>
            <h3><span>&copy;</span> All copy is reserved {year} <span className={classes.corpration}>Mo-khaled <sup>&reg;</sup></span> </h3>
        </footer>
    );
}

export default Footer;