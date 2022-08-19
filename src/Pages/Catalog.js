import React from 'react';
import{ CatalogList }from "../helpers/CatalogList";
import CatalogItem from "../Components/CatalogItem";
import '../style/Catalog.css'

function Catalog () {
return (
    <div className = "catalog">
    <h1 className = "catalogTitle"> Car Catalog</h1>
    <div className = "catalogList">
{CatalogList.map((catalogItem, key) => {
        return <CatalogItem
        key={key} 
        image={catalogItem.image}
         model={catalogItem.model}
          price={catalogItem.price}/>
})}
</div>
</div>
);
}

export default  Catalog;