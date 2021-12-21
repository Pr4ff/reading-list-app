import React, { Fragment, useState, useEffect } from 'react';

const Category = () => {
    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        try {
            const response = await fetch('http://localhost:5000/category');
            const jsonData = await response.json();

            setCategories(jsonData);
            console.log(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getCategories();
    }, []);

    return <Fragment>                
        <h1 style={{textAlign: "center"}}>READING LIST</h1>
        <ul className="mt-5 text-center">
            {categories.map(category => (
                <button
                    onClick={() => {
                        // display list of authors for respective category
                    }}    
                >{category.description}</button>
            ))}                
        </ul>        
    </Fragment>
};

export default Category;