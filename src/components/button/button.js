import './button.css';

function Button({ children, active, onClick, attributes }) {
    return (
        <button
            className={'button' + (active ? ' button--active' : '')}
            onClick={onClick}
            {...attributes}
        >
            {children}
        </button>
    );
}

export default Button;
