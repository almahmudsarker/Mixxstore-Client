import React from 'react';
import useTitle from '../../hooks/useTitle';

const MyToys = () => {
    useTitle("My Toys");
    return (
        <div>
            <h3>This is my toys page</h3>
        </div>
    );
};

export default MyToys;