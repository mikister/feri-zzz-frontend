import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

function NotFoundPage() {
    const { t } = useTranslation(['translation']);

    return <Fragment>{t('errors.page404')}</Fragment>;
}

export default NotFoundPage;
