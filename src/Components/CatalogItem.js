import React from 'react'

function CatalogItem({ image, model,price}) {
  return (
    <div className = "catalogItem">
    <div style={{backgroundImage: `url(${image})`}}></div>
    <h1>{model}</h1>
    <p>${price}</p>
    </div>
  );
}

export default CatalogItem;