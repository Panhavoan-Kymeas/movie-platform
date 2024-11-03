import SocialMediaIcons from './SocialMediaIcons'

export default function Footer() {
    const footerStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1.5fr 1fr',
        backgroundColor: '#151414',
        paddingTop: '50px',
        paddingBottom: '50px'
    };

    const textStyle = {
        fontSize: '15px',
        margin: '10px 0'
    };

    return (
        <div style={footerStyle}>
            <div style={{textAlign: 'center'}}>
                <h1 style={{ fontWeight: '50', fontSize: '50px' , marginBottom: '0px'}}>CINEMAers</h1>
                <p style={{ fontSize: '15px', marginTop: '0px'}}>Alright reserved © 2024</p>
            </div>
            <div>
                <h2 style={{ fontWeight: '50', fontSize: '25px'}}>ROYAL UNIVERSITY OF PHNOM PENH</h2>
                <p style={textStyle}>CINEMAER@ABC.COM</p>
                <p style={textStyle}>+855 12 345 6789</p>
                <p style={textStyle}>Russian Federation Boulevard, Toul Kork, Phnom</p>
                <p style={textStyle}>Penh, Cambodia.</p>
            </div>
            <div>
                <h2 style={{ fontWeight: '50', fontSize: '25px'}}>FOLLOW US ON SOCIAL MEDIA</h2>
                <SocialMediaIcons/>
            </div>
        </div>
    );
}
