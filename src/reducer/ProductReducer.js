const ProductReducer = (state, action) => {
    
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true
            }
        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case "SET_API_DATA":
            const feacherData = action.payload.filter((curElem) => {
                return curElem.featured === true
            })
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                featureProducts: feacherData
            }
        case "SET_SINGLE_LOADING":
            return {
                ...state,
                isSingleLoading: true,
            }
        case "API_SINGLE_ERROR":
            return {
                ...state,
                isSingleLoading: false,
                isError: true,
            }
        case "SET_SINGLE_PRODUCT":
            return {
                ...state,
                isSingleLoading: false,
                singleProduct: action.payload,
            }
        default:
            return state;
    }
}
export default ProductReducer