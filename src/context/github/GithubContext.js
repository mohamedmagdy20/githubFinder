import githubReducer from "./GithubReduser";

const { createContext, useEffect, useReducer } = require("react");

const GithubContext = createContext()
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children})=>{
    const initalState = {
        users:[],
        loading:false
    }
    const [state , dispatch] = useReducer(githubReducer,initalState)
    // useEffect(()=>{
    //     // const
    //     fetchUser()

    // },[]);

    // get Inital Users
    // Get Search Results 
    const SearchUsers = async (text)=>{
        setLoading()
        const params = new URLSearchParams({
            q:text
        })
        const responce = await fetch(`${GITHUB_URL}/search/users?${params}`)
        const {items} = await responce.json()
        // setUser(data)
        // setLoading(false)
        dispatch({
            type:'GET_USERS',
            payload: items,
        })
    }

    const setLoading = ()=> dispatch({
        type:'SET_LOADING'
    })

    const clearUsers = ()=> dispatch({
        type:'CLEAR_USERS'
    })
    return <GithubContext.Provider value={{
        users:state.users,
        loading:state.loading
        ,SearchUsers,clearUsers
    }}>
        {children}
    </GithubContext.Provider>
}
export default GithubContext