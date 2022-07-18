import React, {useState, useEffect,useMemo,useCallback} from 'react';
import {getSingle, useSingleHook} from "../utils";

export default function HooksExample( {id} ) {
    const [data,setData] = useState();
    const [dummyData, setDumyData] = useState(0);
    const hookData = useSingleHook(id);

    useEffect(()=>{ 
        console.log("[HooksExample] data recomputing in useEffect");
     const data =  getSingle(id);
        setData(data);

        return () => console.log("component umonount");
},[id]);

useEffect(()=> {
    console.log("[HooksExample] dummydata recomputing in useEffect");
},[dummyData]);

const memoData = useMemo(() => {
    console.log("Called memoData useMemo callback");
    return getSingle(id)
},[id]);

const handleClick = useCallback(() => {
    setDumyData(dummyData + 1)
},[]);

    return(
        <>
        <pre>
            HooksExample
            {JSON.stringify({data},null,2)}
            {JSON.stringify({memoData},null,2)}
            {JSON.stringify({hookData},null,2)}
        </pre>
        <Button onClick={handleClick}>Change dummy data</Button>
        </>
    );
}

const Button = React.memo(({onClick, children}) => {
    console.log({onClick});
    return <button onClick={onClick}>{children}</button>
})
