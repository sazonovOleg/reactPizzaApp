import React from 'react';
import ContentLoader from "react-content-loader";

function LoadingBlock() {
return (
    <ContentLoader
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="140" cy="140" r="140" />
        <rect x="0" y="291" rx="3" ry="3" width="280" height="24" />
        <rect x="0" y="324" rx="3" ry="3" width="280" height="84" />
        <rect x="0" y="422" rx="3" ry="3" width="90" height="28" />
        <rect x="126" y="414" rx="30" ry="30" width="152" height="44" />
    </ContentLoader>
)
};

export default LoadingBlock;
