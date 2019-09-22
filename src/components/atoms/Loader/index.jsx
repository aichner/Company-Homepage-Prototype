//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { 
    MDBSpinner,
} from 'mdbreact';

const Loader = () => {
    return (
        <div className="text-center my-3 w-100">
            <MDBSpinner red />
        </div>
    );
}

export default Loader;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
