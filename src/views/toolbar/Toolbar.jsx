<<<<<<< HEAD
import { FaChevronRight } from "react-icons/fa";
import React from 'react'
=======
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
>>>>>>> fae7de41770198b430f97d556f21032111b61f4d

const Toolbar = () => {
    return (
        <div className="col-span-4 bg-white rounded-s-lg px-9">
            <a className="mt-4 flex justify-end" href=""><span><FaChevronRight /></span></a>
            <h2 className="bold text-left">Voor jou</h2>
            <div>
                <input type="text"/>
            </div>
        </div>
    );
};

export default Toolbar;