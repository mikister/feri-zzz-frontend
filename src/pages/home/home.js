import { Fragment, useState } from 'react';
import ButtonGroup from '../../components/button-group/button-group';
import { useTranslation } from 'react-i18next';
import OverviewView from './views/overview';
import ProbeView from './views/probe';
import './home.css';

import gridIcon from '../../icons/grid.svg';
import gridIconWhite from '../../icons/grid--white.svg';
import listIcon from '../../icons/list.svg';
import listIconWhite from '../../icons/list--white.svg';
import { probes } from '../../configs/home.json';

function HomePage() {
    const { t } = useTranslation(['translation']);
    const [viewIndex, selectView] = useState(0);
    const [layoutIndex, selectLayout] = useState(0);

    // probeCount
    let views = ['control_bar.view.overview'];
    let layouts = [
        <img
            src={listIcon}
            className="control_bar__icon"
            alt={t('control_bar.layout.listAlt')}
        />,
        <img
            src={gridIconWhite}
            className="control_bar__icon"
            alt={t('control_bar.layout.gridAlt')}
        />,
    ];

    probes.forEach(({ name }) => {
        views.push(`${t('control_bar.view.probe')} ${name}`);
    });

    if (layoutIndex === 0)
        layouts = [
            <img
                src={listIconWhite}
                className="control_bar__icon"
                alt={t('control_bar.layout.listAlt')}
            />,
            <img
                src={gridIcon}
                className="control_bar__icon"
                alt={t('control_bar.layout.gridAlt')}
            />,
        ];

    return (
        <Fragment>
            <div className="control_bar">
                <div className="control_bar__left">
                    <ButtonGroup
                        options={views}
                        selectedOptionIndex={viewIndex}
                        onChange={selectView}
                    />
                </div>
                <div className="control_bar__right">
                    <ButtonGroup
                        options={layouts}
                        selectedOptionIndex={layoutIndex}
                        onChange={selectLayout}
                    />
                </div>
            </div>
            <div
                className={
                    'panels' +
                    (layoutIndex === 0 ? ' panels--list' : ' panels--grid')
                }
            >
                {viewIndex === 0 ? (
                    <OverviewView />
                ) : (
                    <ProbeView probeIndex={viewIndex} />
                )}
            </div>
        </Fragment>
    );
}

export default HomePage;
