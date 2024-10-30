"use client";

import Icon from "./Icon";
import Dropdown from "./Dropdown";

export default function Header() {
    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '46px',
        paddingRight: '46px',
        paddingTop: '25px',
    };

    const separatorStyle = {
        height: '1px',
        backgroundColor: '#ccc',
        margin: '40px auto',
        width: '95%',
        alignItem: 'center'
    };

    return (
        <header>
            <div style={headerStyle}>
                <div className='col-md-2 text-center'>
                    <Icon icon='user' label='LOG IN'/>
                </div>
                
                <div className='col-md-8 text-center'>
                    <span style={{ margin: 0, fontSize: '32px' }}>CINEMAers</span>
                </div>
                
                <div className='col-md-2 text-center' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Icon icon='bell' />
                    <Icon icon='ticket' />
                    <Icon />
                    <Dropdown />
                </div>
            </div>
            <div style={separatorStyle}></div>
        </header>
    );
}
