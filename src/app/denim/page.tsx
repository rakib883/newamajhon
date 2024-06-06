"use client";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { denimData, } from "../../Redux/productSlice";
import Image from 'next/image';

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
//    header filter are staaaart
    const denimSelector = useSelector((state:any) => state.allData.addData);
    const searchDataItems = useSelector((state:any) => state.allData.searchData.searchDataItem) || ""; // Ensure default value

    const filteredDenimData = denimSelector.filter((item:any) =>
        searchDataItems ? item.title.toLowerCase().includes(searchDataItems.toLowerCase()) : true
    );

//   filter are end

    return (
        <div>
            <div className="allcontent">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4">
                     {
                      filteredDenimData.length ?  filteredDenimData.map((item:any) => (
                        <div key={item.id} className="main border p-4 rounded shadow">
                            <div className="image flex justify-center items-center">
                                <Image  src={item.image} width={100} height={100}  alt="image"/>
                            </div>
                            <h3 className="font-bold">{item.title.substring(0,30)}</h3>
                            <p>{item.description.substring(0,30)}</p>
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
