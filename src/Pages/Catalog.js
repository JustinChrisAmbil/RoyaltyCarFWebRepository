import React from 'react';
import{ CatalogList }from "../helpers/CatalogList";
import CatalogItem from "../Components/CatalogItem";

function Catalog () {
return (
    <div className = "catalog">
    <h1 className = "catalogTitle"> Cars Catalog</h1>
    <div className = "catalogList">
    {CatalogList.map((catalogItem, key)=> { 
    return <div></div>
  
})};

    


    </div>
    </div>
);
}

export default  Catalog;