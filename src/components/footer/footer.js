import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__info">
                <div className="footer__info__left">
                    <span>Univerza v Mariboru</span>
                    <span>
                        Fakulteta za elektrotehniko, računalništvo in
                        informatiko
                    </span>
                    <span>Koroška cesta 46, 2000 Maribor</span>
                    <span>feri@um.si</span>
                    <span>+386 2 220 7000</span>
                </div>
                <div className="footer__info__middle">
                    <div className="footer__links">
                        <span>Donacije</span>
                        <span>Kontakt</span>
                    </div>
                    <div className="footer__socials">
                        <span>A</span>
                        <span>B</span>
                        <span>C</span>
                    </div>
                </div>
                <div className="footer__info__right">
                    <span>Vodja projekta</span>
                    <span>Jernej Kranjec, mag. inž.</span>
                    <span>
                        Koroška cesta 46, 2000 Maribor, Kabinet G2-3N-59
                    </span>
                    <span>jernej.kranjec@um.si</span>
                    <span>(02) 220 7491</span>
                </div>
            </div>
            <div id="copyright">© zzz.feri.um.si 2018-2021</div>
        </footer>
    );
}

export default Footer;
