import React from 'react';
import { Editable } from './Editable';

export const Document: React.FC = () => {
    return(
        <div style={{
            display: 'flex',
            backgroundColor: '#ddd'
        }}>
            <Editable />
        </div>
    )
}