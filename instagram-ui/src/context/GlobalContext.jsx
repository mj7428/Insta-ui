import { useEffect,useState, createContext} from "react";
import { StoryDataUser } from "../constants/story-data-user";
import toast from 'react-hot-toast'; 


const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
    const [StoryDataUser , setStoryDataUser] = useState([]);

    useEffect(()=>{
        const Fetchusers= async()=>{
          try{
            const res = await fetch("https://api.github.com/users/Faraz-mobin17/followers");
            const data = await res.json();
            setStoryDataUser(data);
            toast.success("Data fetch Sucessfully");
          }
          catch(error){
            console.log(error);
          }
        }
        Fetchusers();
      },[])

    return (
        <GlobalContext.Provider value={{StoryDataUser}}>
            {children}
        </GlobalContext.Provider>
    )
}

export {GlobalProvider,GlobalContext}