import React, {useState} from 'react';

const ProductImagery = ({imageData, prdName}) => {
    const [imgSrc, setImgSrc] = useState(imageData[0]);
    const updateImgSrc = (img) => {
        setImgSrc(img)
    }
    return (
        <>
            <div className="image__wrapper">
                <div className="image__hero">
                    <img src={imgSrc} alt={prdName} className="image__responsive mx-auto"/>
                </div>
                <ul className="image__tb d-flex row">
                    {imageData.map((image, index) => <li key={index} className="image__tb-item col-md-3 mt-2"><button className="image__btn" onClick={() => updateImgSrc(image)}><img src={image} alt={prdName} className="image__responsive"/></button></li>)}
                </ul>
            </div>
        </>
    )
};

export default ProductImagery;