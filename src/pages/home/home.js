import { Fragment, useState } from 'react';
import ButtonGroup from '../../components/button-group/button-group';
import './home.css';

function HomePage() {
    const [view, selectView] = useState(0);
    const [layout, selectLayout] = useState(0);

    const Views = ['Overview', 'Sonda 1', 'Sonda 2', 'Sonda 3'];
    const Layouts = ['List', 'Grid'];

    return (
        <Fragment>
            <div className="control_bar">
                <div className="control_bar__left">
                    <ButtonGroup
                        options={Views}
                        selectedOptionIndex={view}
                        onChange={selectView}
                    />
                </div>
                <div className="control_bar__right">
                    <ButtonGroup
                        options={Layouts}
                        selectedOptionIndex={layout}
                        onChange={selectLayout}
                    />
                </div>
            </div>
        </Fragment>
    );
}

export default HomePage;
