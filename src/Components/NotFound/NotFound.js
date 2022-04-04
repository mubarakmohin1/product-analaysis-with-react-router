import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found'>

            <h1>404</h1>
            <h2>File Not Found</h2>
            <p>The HTTP 404 Not Found response status code indicates that the server cannot find the requested resource. Links that lead to a 404 page are often called broken or dead links and can be subject to link rot. A 404 status code only indicates that the resource is missing: not whether the absence is temporary or permanent.</p>

        </div>
    );
};

export default NotFound;