import { wrapSelectedText } from "../../../toolkit"
import React, { useState, useEffect } from "react"
import { ALL_FONTS } from "./FontList"

export const FontSelector: React.FC = () => {
    const [selctedFont, setSelectedFont] = useState("'Roboto', sans-serif")

    const fontSelectandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const fontFace = event.target.value;
        setSelectedFont(fontFace);
    }

    useEffect(() => {
        wrapSelectedText('div', { fontFamily: selctedFont});
    }, [selctedFont])

    return (
        <select
            onChange={fontSelectandler}
        >
            {ALL_FONTS.map(font => (
                <option value={font.face} key={font.name}>
                    {font.name}
                </option>
            ))}
        </select>
    )
}