import React from 'react';

const TextoAbout = ({avatar, informacionuser}) => {
    return (
        <div className="containerAbout">
            {informacionuser}
        </div>
    );
};

export default TextoAbout;