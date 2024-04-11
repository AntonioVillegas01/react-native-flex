import {SafeAreaView} from 'react-native';
// import HelloWorldScreen from './src/presentation/screens/HelloWorldScreen.tsx';
// import CounterScreen from './src/presentation/screens/CounterScreen.tsx';
// import CounterM3Screen from './src/presentation/screens/CounterM3Screen.tsx';
import IonIcon from 'react-native-vector-icons/Ionicons';

import {PaperProvider} from 'react-native-paper';
// import BoxObjectModelScreen from './src/presentation/screens/BoxObjectModelScreen.tsx';
// import DimensionScreen from './src/presentation/screens/DimensionScreen.tsx';
// import PositionScreen from './src/presentation/screens/PositionScreen.tsx';
// import {FlexScreen} from './src/presentation/screens/FlexScreen.tsx';
// import {FlexDirectionScreen} from './src/presentation/screens/FlexDirectionScreen.tsx';
import {HomeworkScreen} from './src/presentation/screens/HomeworkScreen.tsx';

const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcon {...props} />,
      }}>
      <SafeAreaView style={{flex: 1}}>
        {/*<HelloWorldScreen name="Marco Garcia" /> */}
        {/*<CounterScreen /> */}
        {/*<CounterM3Screen /> */}
        {/*<BoxObjectModelScreen /> */}
        <HomeworkScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
