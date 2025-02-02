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


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const post1 = feed[0];

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      {/* <HomeScreen/> */}
      <SearchResultsPage/>
    </SafeAreaView>

  );
}


export default App;
