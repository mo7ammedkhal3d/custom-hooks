import classes from './Footer.module.css';

const Footer = props => {

    const year = new Date().getFullYear();

    return (
        <footer className={classes.footer}>
            <h3><span>&copy;</span> All copy is reserved {year} <a target='_blank' className={classes['github-link']} href='https://github.com/mo7ammedkhal3d'>Mo-khaled <sup>&reg;</sup></a> </h3>
        </footer>
    );
}

export default Footer;