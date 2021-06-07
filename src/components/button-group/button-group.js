import { useTranslation } from 'react-i18next';
import Button from '../button/button';
import './button-group.css';

function ButtonGroup({ options, selectedOptionIndex, onChange }) {
    const { t } = useTranslation(['translation']);

    const onChangeHadler = (event) => {
        const optionIndex = event.target.dataset.optionIndex;
        onChange(parseInt(optionIndex));
    };

    return (
        <div className="button_group">
            {options.map((opt, index) => (
                <Button
                    key={index}
                    active={index === parseInt(selectedOptionIndex)}
                    onClick={onChangeHadler}
                    attributes={{ 'data-option-index': index }}
                >
                    {typeof opt === 'string' ? t(opt) : opt}
                </Button>
            ))}
        </div>
    );
}

export default ButtonGroup;
