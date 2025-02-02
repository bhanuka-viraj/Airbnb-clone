import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Post from './src/components/Post/Post';
import feed from './assets/data/feed';
import SearchResultsPage from './src/screens/SearchResults/SearchResultsPage';
import DestinationSearchScreen from './src/screens/DestinationSearch/DestinationSearchScreen';
import GuestsScreen from './src/screens/Guests/GuestsScreen';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : '#fff',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      {/* <HomeScreen/> */}
      {/* <SearchResultsPage/> */}
      {/* <DestinationSearchScreen/> */}
      <GuestsScreen/>
    </SafeAreaView>

  );
}


export default App;
