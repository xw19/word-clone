import React, { useEffect } from 'react';
import { ALL_FONTS } from './Font/FontList';
import { FontSelector } from './Font/FontSelector';

export const Topbar: React.FC = () => {

    useEffect(() => {
        const fontPromises = ALL_FONTS.map(font => (new FontFace(font.name, `url(${font.url})`)).load())
        Promise.all(fontPromises).then(results => {
            results.forEach(result => document.fonts.add(result));
        })
    }, [])

    return (
        <div style={{
            height: '15vh',
            borderBottom: '1px solid #bbb'
        }}>
            <div>
                <FontSelector />
            </div>          
        </div>
    )
};