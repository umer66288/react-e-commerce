import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/ProductReducer'
const AppContext = createContext();

//API
const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
};
const AppProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    //API call for all product
    const getProduct = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.get(url)
            const products = await res.data;
            dispatch({ type: "SET_API_DATA", payload: products });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    }
    //API call for sigel product
    const getSingelProduct = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" });
        try {
            const res = await axios.get(url)
            const singleProduct = await res.data;
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
        } catch (error) {
            dispatch({ type: "API_SINGLE_ERROR" });
        }
    }
    useEffect(() => {
        getProduct(API)
    }, [])
    return (
        <AppContext.Provider value={{ ...state, getSingelProduct }}>
            {props.children}
        </AppContext.Provider>
    )
}
// custom hooks
const useProductContext = () => {
    return useContext(AppContext);
};
export { AppProvider, AppContext, useProductContext };