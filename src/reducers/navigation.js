import { NavigationActions } from 'react-navigation';
import { Navigation } from '../screens/AppNavigation';


/* Returns the next state after navigating to a specific screen in the app,
which is then returned in the reducer */
const navigateToScreen =
    (routeName, params, state) => Navigation.router.getStateForAction(
        NavigationActions.navigate({
            params,
            routeName,
        }),
        state
    );

const navigationReducer = (state, action) => {
    let nextState;
    switch (action.type) {
    case 'GOTO_HOME':
        nextState = navigateToScreen('Home', {}, state);
        break;

    default:
        nextState = Navigation.router.getStateForAction(action, state);
        break;
    }

    return nextState || state;
};

export { navigationReducer };
