const initialState = {
    jokes: null,
    error: null,
    success: false,
    loading: false,
};

const jokesReducer =
    (state = initialState, action) => {
        switch (action.type) {
        case 'GET_JOKE_SUCCESS':
            return {
                ...state,
                joke: action.joke,
                success: true,
                loading: false,
            };

        case 'GET_JOKE_LOADING':
            return {
                ...state,
                loading: true,
            };

        case 'GET_JOKE_ERROR':
            return {
                joke: null,
                error: action.error,
                success: false,
                loading: false,
            };

        default:
            return state;
        }
    };

export { jokesReducer };
