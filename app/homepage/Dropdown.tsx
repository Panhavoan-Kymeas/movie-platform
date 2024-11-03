// components/Dropdown.js
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Dropdown() {
    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <button
                className="btn btn-secondary"
                style={{
                    border: 'none',
                    color: 'white',
                    padding: '10px',
                    borderRadius: '5px',
                    display: 'flex',
                    alignItems: 'center',
                }}
                disabled
            >
                <span style={{ marginRight: '10px', fontSize: '20px'}}>EN</span>
                <i className="bi bi-chevron-down"></i> {}
            </button>
        </div>
    );
}