import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Icon({ icon = '', label = '' }) {
    if (icon === 'user') {
        icon = 'person-fill';
    } else if (icon === 'bell') {
        icon = 'bell-fill';
    } else if (icon === 'star') {
        icon = 'star-fill';
    }

    const iconStyle = {
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '43px',
        height: '43px',
        borderRadius: '50%',
        backgroundColor: '#414040',
        color: 'white',
        fontSize: '20px',
        marginRight: '8px',
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={iconStyle}>
                <i className={`bi bi-${icon}`}></i>
            </div>
            {label && <span style={{ fontSize: '20px' }}>{label}</span>}
        </div>
    );
}
