import { Fragment, useState } from 'react';
import ButtonGroup from '../../components/button-group/button-group';
import Panel from '../../components/panel/panel';
import './home.css';

import gridIcon from '../../icons/grid.svg';
import gridIconWhite from '../../icons/grid--white.svg';
import listIcon from '../../icons/list.svg';
import listIconWhite from '../../icons/list--white.svg';
import { useTranslation } from 'react-i18next';

function HomePage() {
    const { t } = useTranslation(['translation']);
    const [view, selectView] = useState(0);
    const [layout, selectLayout] = useState(0);

    const setView = (index) => selectView(index);
    const setLayout = (index) => selectLayout(index);

    const Views = ['Overview', 'Sonda 1', 'Sonda 2', 'Sonda 3'];
    let Layouts = [
        <img src={listIcon} className="control_bar__icon" alt={t('todo')} />,
        <img
            src={gridIconWhite}
            className="control_bar__icon"
            alt={t('todo')}
        />,
    ];

    if (parseInt(layout) === 0)
        Layouts = [
            <img
                src={listIconWhite}
                className="control_bar__icon"
                alt={t('todo')}
            />,
            <img
                src={gridIcon}
                className="control_bar__icon"
                alt={t('todo')}
            />,
        ];

    return (
        <Fragment>
            <div className="control_bar">
                <div className="control_bar__left">
                    <ButtonGroup
                        options={Views}
                        selectedOptionIndex={view}
                        onChange={setView}
                    />
                </div>
                <div className="control_bar__right">
                    <ButtonGroup
                        options={Layouts}
                        selectedOptionIndex={layout}
                        onChange={setLayout}
                    />
                </div>
            </div>
            <div
                className={
                    'panels' +
                    (parseInt(layout) === 0 ? ' panels--list' : ' panels--grid')
                }
            >
                <Panel>Map</Panel>
                <Panel>Data</Panel>
                <Panel>...</Panel>
                <Panel>...</Panel>
            </div>
        </Fragment>
    );
}

export default HomePage;
