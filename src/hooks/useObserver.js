import {useState, useRef, useEffect} from 'react';

const useObserver = (options) => {
    const [elements, setElements] = useState([]);
    const [entries, setEntries] = useState([]);

    const observer = useRef()

    // const observer = useRef(new IntersectionObserver(obEntries => {
    //     // console.log(obEntries);
    //     setEntries(obEntries);
    // }));
    useEffect(()=>{
        observer.current = new IntersectionObserver(obEntries => {
            // console.log(obEntries);
            setEntries(obEntries);
        })
    },[])

    useEffect(()=>{
        const {current: currentObserved} = observer;
        currentObserved.disconnect();
        if(elements.length > 0){
            elements.forEach(element => currentObserved.observe(element));  
        }
        return function cleanObserver(){
            if(currentObserved){
                currentObserved.disconnect();
            }
        }
    },[elements]);

    return [observer.current, setElements, entries];
}

export default useObserver;