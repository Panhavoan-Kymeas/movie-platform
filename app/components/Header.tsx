"use client";

import Icon from "./Icon";
import Dropdown from "./Dropdown";

export default function Header() {
    const headerStyle: React.CSSProperties = {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '46px',
        paddingRight: '46px',
        paddingTop: '25px',
        backgroundColor: 'transparent',
        zIndex: 10,
        position: 'absolute', // Ensure this is one of the valid position values
    };

    return (
        <header>
            <div style={headerStyle}>
                <div className='col-md-2 text-center'>
                    <Icon icon='user' label='LOG IN'/>
                </div>
                
                <div className='col-md-2 text-center' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Icon icon='bell' />
                    <Icon icon='star' />
                    <Icon />
                    <Dropdown />
                </div>
            </div>
        </header>
    );
}
