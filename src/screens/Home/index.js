import React from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    Button,
} from 'react-native';
import { connect } from 'react-redux';
import { Styles } from './styles';


class HomeComponent extends React.Component {
    componentWillMount() {
        this.props.getJoke();
    }

    shouldComponentUpdate() {
        return true;
    }

    render() {
        /**
         * Renders content based on the state of the
         * jokes redux reducer
         * States: joke, loading, error
         */
        let content;
        if (this.props.loading) {
            content = (<ActivityIndicator />);
        } else if (this.props.joke) {
            content = (
                <View>
                    <Text>{this.props.joke}</Text>
                    <Button
                        onPress={() => this.props.getJoke()}
                        title="Get another joke"
                        accessibilityLabel="Click here to get another joke"
                    />
                </View>
            );
        } else if (this.props.error) {
            content = (<Text>{this.props.error}</Text>);
        }

        return (
            <View style={Styles.homeContainer}>
                {content}
            </View>
        );
    }
}

const mapStateToProps =
    state => ({
        joke: state.jokes.joke,
        loading: state.jokes.loading,
        success: state.jokes.success,
        error: state.jokes.error,
    });

const mapDispatchToProps =
    dispatch => ({
        getJoke: () => dispatch({ type: 'GET_JOKE' }),
    });

const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);

export { HomeScreen };
