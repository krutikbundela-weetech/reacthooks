import React from 'react'

const useUserDefinedHook = (key , initialValue) => {

     const [name, setName] = useState(
       localStorage.getItem(key) ? localStorage.getItem(key) : initialValue
     );

     useEffect(() => {
       localStorage.setItem(key, name);
     }, [name]);

  return [name,setName]
}

export default useUserDefinedHook