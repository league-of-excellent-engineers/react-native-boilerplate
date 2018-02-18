const jokesApi = store => next => (action) => {
    next(action);

    const JOKE_API_BASE_URL = 'https://icanhazdadjoke.com';

    if (action.type === 'GET_JOKE') {
        const options = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'User-Agent': 'LoEE (adamgcoulon@gmail.com)',
            },
        };

        store.dispatch({ type: 'GET_JOKE_LOADING' });
        fetch(JOKE_API_BASE_URL, options)
            .then((res) => {
                const data = res._bodyText;
                return JSON.parse(data);
            })
            .then(data => next({
                type: 'GET_JOKE_SUCCESS',
                joke: data.joke,
            }))
            .catch(error => next({
                type: 'GET_JOKE_ERROR',
                error,
            }));
    }
};

export { jokesApi };
