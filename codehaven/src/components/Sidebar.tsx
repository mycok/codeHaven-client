import React from 'react';

import { useWindowDimensions } from '../hooks/useWindowDimensions';

export default function Sidebar() {
    const { width } = useWindowDimensions();

    if (width <= 768) return null;

    return (
        <div className="sidebar">Side Bar</div>
    )
}
