import React, { memo } from 'react';

function Message() {

    console.log('Message Page');

    return (
        <div>
            <h1>Message Page</h1>
        </div>
    )
}

export default memo(Message);
