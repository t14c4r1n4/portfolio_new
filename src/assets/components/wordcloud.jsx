import React, { useEffect } from 'react';
import cloud from 'd3-cloud';

const words = [
    'webdeveloper',
    'reactjs',
    'documentation',
    'python',
    'stateoftheart',
    'tools',
    'techniques',
    'project'
].map(function (d) {
    return { text: d, size: 10 + Math.random() * 90 };
});

function createCloud() {
    cloud().size([500, 500])
        .canvas(() => createCanvas(1, 1))
        .words(words)
        .padding(5)
        .rotate(() => Math.floor(Math.random() * 2) * 90)
        .font("Impact")
        .fontSize(d => d.size)
        .on("end", words => console.log(JSON.stringify(words)))
        .start();
}

const WordCloud = () => {
    useEffect(() => {
        createCloud();
    }, []); // Call createCloud only once when the component mounts

    return (
        <div>
            {/* The word cloud will be rendered here */}
        </div>
    );
}

export default WordCloud;
