import React from 'react';
import {Link} from "react-router-dom";

const Form = () => {
    return (
        <div>
            <form action="submit">
                <input type="text"/>
                <input type="text"/>
                <button>
                    <Link to="/todo">
                        Protected Page
                    </Link>
                </button>
            </form>
        </div>
    );
};

export default Form;