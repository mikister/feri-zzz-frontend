import { Fragment } from 'react';

function Dropdown({ id = '', label = '', values, defaultValue, onChange }) {
    return (
        <Fragment>
            {label === '' ? null : <label for={id}>{label}</label>}

            <select name={id} id={id} onChange={onChange}>
                {Object.entries(values).map(([valueKey, valueDisplay]) => (
                    <option
                        value={valueKey}
                        key={valueKey}
                        selected={valueKey === defaultValue}
                    >
                        {valueDisplay}
                    </option>
                ))}
            </select>
        </Fragment>
    );
}

export default Dropdown;
