import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
    const { t } = useTranslation(['footer']);

    return (
        <footer className="footer">
            <div className="footer__info">
                <div className="footer__info__left">
                    <span>{t('uni_mb')}</span>
                    <span>{t('feri.name')}</span>
                    <span>{t('feri.address')}</span>
                    <span>{t('feri.email')}</span>
                    <span>{t('feri.phone')}</span>
                </div>
                <div className="footer__info__middle">
                    <div className="footer__links">
                        <span>{t('links.donations')}</span>
                        <span>{t('links.contact')}</span>
                    </div>
                    <div className="footer__socials">
                        <span>A</span>
                        <span>B</span>
                        <span>C</span>
                    </div>
                </div>
                <div className="footer__info__right">
                    <span>{t('project_leader.project_leader')}</span>
                    <span>{t('project_leader.name')}</span>
                    <span>{t('project_leader.address')}</span>
                    <span>{t('project_leader.email')}</span>
                    <span>{t('project_leader.phone')}</span>
                </div>
            </div>
            <div>{t('copyright', { currYear: new Date().getFullYear() })}</div>
        </footer>
    );
}

export default Footer;
