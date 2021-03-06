import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LobbyScreen from "./screens/LobbyScreen";
import AnswerFeedbackScreen from "./screens/AnswerFeedbackScreen";
import UserNameScreen from "./screens/UserNameScreen";
import SelectGameScreen from "./screens/SelectGameScreen";
import QuestionScreen from "./screens/QuestionScreen";


const RootStack = createStackNavigator({
  UserNameScreen: UserNameScreen,
  SelectGameScreen: SelectGameScreen,
  LobbyScreen: LobbyScreen,
  AnswerFeedbackScreen: AnswerFeedbackScreen,
  QuestionScreen: QuestionScreen
},
{
  initialRouteName: 'UserNameScreen',
});


export default class App extends React.Component {
  render() {
      return (
      <RootStack />
    );
  }
}