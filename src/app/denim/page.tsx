"use client";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { denimData } from "../../Redux/productSlice";

function Page() {
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(res => {
                // setProduct(res);
                dispatch(denimData(res)); // Dispatch the action after fetching the data
            });
    }, [dispatch]);

    const denimSelector = useSelector((state:any) => state.allData.addData);
    const searchDataItems = useSelector((state:any) => state.allData.searchData.searchDataItem) || ""; // Ensure default value

    const filteredDenimData = denimSelector.filter((item:any) =>
        searchDataItems ? item.title.toLowerCase().includes(searchDataItems.toLowerCase()) : true
    );

 
    
    return (
        <div>
            <div className="allcontent">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                     {
                      filteredDenimData.length ?  filteredDenimData.map((item:any) => (
                        <div key={item.id} className="main border p-4 rounded shadow">
                            <h3 className="font-bold">{item.title}</h3>
                            <p>{item.description}</p>
                            <p className="font-semibold">${item.price}</p>
                        </div>
                       )) 
                       : <div className="">
                            Data is loading
                         </div>
                    } 
                </div>
            </div>
        </div>
    );
}

export default Page;
