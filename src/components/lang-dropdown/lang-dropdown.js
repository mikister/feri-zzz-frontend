import { useTranslation } from 'react-i18next';
import Dropdown from '../dropdown/dropdown';
import './lang-dropdown.css';

function LangDropdown() {
    const { i18n, ready } = useTranslation(['translation'], {
        useSuspense: false,
    });

    let languages = {};

    if (ready) {
        for (const lang of i18n.languages.sort()) {
            languages[lang] = lang;
        }
    }

    const onLangChange = (event) => {
        let selectedLang = event.target.value;
        i18n.changeLanguage(selectedLang);
    };

    return (
        <div className="lang_dropdown">
            <Dropdown
                id="lang-dropdown"
                values={languages}
                defaultValue={i18n.language}
                onChange={onLangChange}
            />
        </div>
    );
}

export default LangDropdown;
