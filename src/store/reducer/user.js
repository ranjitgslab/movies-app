const initValue = {
    user: null
}

const reducer = (state = initValue, {type, value}) => {
    switch (type) {
        case 'GET_USER':
            return {
                ...state,
                user: value
            };
    
        default:
            return {...state};
    }
}

export default reducer;