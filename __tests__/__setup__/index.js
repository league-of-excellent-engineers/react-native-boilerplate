import fetch from 'jest-fetch-mock';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


// Enzyme:
// See: http://airbnb.io/enzyme/
configure({ adapter: new Adapter() });

// This will mutate `react-native`'s require cache with `react-native-mock`'s.
// Note: Not yet updated for React Native v50.
// require('react-native-mock/mock'); // <-- side-effects!!!


// Jest Fetch Mock:
// See: https://github.com/jefflau/jest-fetch-mock
global.fetch = fetch;
