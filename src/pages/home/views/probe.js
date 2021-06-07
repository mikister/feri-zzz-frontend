import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import Panel from '../../../components/panel/panel';

function ProbeView({ probeIndex }) {
    const { t } = useTranslation(['translation']);

    return (
        <Fragment>
            <Panel>Map {probeIndex}</Panel>
            <Panel>Data</Panel>
            <Panel>...</Panel>
            <Panel>...</Panel>
        </Fragment>
    );
}

export default ProbeView;
