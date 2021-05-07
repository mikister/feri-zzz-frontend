import Button from '../button/button';
import './button-group.css';

function ButtonGroup({ options, selectedOptionIndex, onChange }) {
    const onChangeHadler = (event) => {
        const optionIndex = event.target.dataset.optionIndex;
        onChange(optionIndex);
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
                    {opt}
                </Button>
            ))}
        </div>
    );
}

export default ButtonGroup;
