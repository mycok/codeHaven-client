import React from 'react';

import { useWindowDimensions } from '../hooks/useWindowDimensions';

export default function Rightmenu() {
    const { width } = useWindowDimensions();

    if (width <= 768) return null;

    return (
        <div className="rightmenu">Right Menu</div>
    )
}