import React, {useState, useEffect} from 'react';
import Product from './product';

const ProductsList = (props) => {
    const updateSort = (e) => {
        setSort(e.target.value)
    }
    const [sort, setSort] = useState('asc');
    const [prdList, setPrdList] = useState([]);
    const [searchTerm, setsearchTerm] = useState('');
    useEffect(() => {
        const filteredArr = props.products.filter((prd) => (prd.product_name.indexOf(searchTerm) > -1));
        console.log(filteredArr);
        if(sort === 'asc') {
            setPrdList(filteredArr.slice().sort((a,b) => a.retail_price - b.retail_price))
        }else if(sort==='dsc'){
            setPrdList(filteredArr.slice().sort((a,b) => b.retail_price - a.retail_price))
        }
    }, [sort, props.products, searchTerm]);

    const filterResult = (e) => {
        setsearchTerm(e.target.value);
    };
    return (
        <>
        <div className="d-flex justify-content-between my-3">
            <div className="filterButton">
                Sort by:Price 
                <select onChange={updateSort} className="mx-2">
                    <option value="asc">Ascending</option>
                    <option value="dsc">Descending</option>
                </select>
            </div>
            <div className="search-box">
                Search By Name: <input type="search" placeholder="search" onChange={filterResult} value={searchTerm}/>
            </div>
        </div>
            <ul className="row product-group">
            {prdList && prdList.map((product, index) => (
                    <Product product={product} key={index} updateSelectedPrd={props.updateSelectedPrd}/>
                ))}
            </ul>
        </>

    )
};

export default ProductsList;