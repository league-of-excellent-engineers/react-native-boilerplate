import React from 'react';
import { connect } from 'react-redux';
import {
    StackNavigator,
    addNavigationHelpers,
} from 'react-navigation';
import { HomeScreen } from './';


const Navigation = StackNavigator({
    Home: {
        screen: HomeScreen,
    },
});

class NavigationComponent extends React.Component {
    shouldComponentUpdate() {
        return true;
    }

    render() {
        return (
            <Navigation
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.navigation,
                })}
            />
        );
    }
}

const mapStateToProps = state => ({ navigation: state.navigation });
const mapDispatchToProps = dispatch => ({ dispatch });

const AppNavigation = connect(mapStateToProps, mapDispatchToProps)(NavigationComponent);

export {
    AppNavigation,
    Navigation, // used in src/reducers/navigation
};
