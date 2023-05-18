import React from 'react';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
    useTitle("All Toys");
    return (
        <div>
            <h3>This is all toys page</h3>
        </div>
    );
};

export default AllToys;