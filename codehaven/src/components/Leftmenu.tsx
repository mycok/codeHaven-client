import React from 'react';
import { useWindowDimensions } from '../hooks/useWindowDimensions';

export default function Leftmenu() {
    const { width } = useWindowDimensions();

    if (width <= 768) return null;

    return (
        <div className="leftmenu">Left Menu</div>
    )
}
