import React, {useEffect, useState} from 'react';


const data = [
    {
        id: 1
    },
    {
        id: 2
    },
    {
        id: 3
    },
    {
        id: 4
    },
];

export const getData = () => {
    return data;
}

export const getSingle = id => {
    return data.find(item => item.id === id);
};

export const useSingleHook = id => {
    const [data,setData] = useState();
    useEffect(()=>{ 
        
     const data =  getSingle(id);
        setData(data);
},[id]);
return data;
}