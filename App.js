import React, {Component} from 'react';
import {Button,View,Text} from 'react-native';
import {Audio} from 'expo-av'

export class Sound1 extends Component{
   displayAlert() {
    alert('Play Sound 1');
   }
     playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'},
      { shouldPlay: true }
    );}
  render(){
    return(
      <Button color="red" title="Sound1" onPress={this.playSound}></Button>
      
    )
  }
}

export class Sound2 extends Component{
  displayAlert() {
    alert('Play Sound 2');
   }
    playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'},
      { shouldPlay: true }
    );}
  render(){
    return(
      <Button color="green" title="Sound2"  onPress={this.playSound}></Button>
      
    )
  }
}

export class Sound3 extends Component{
  displayAlert() {
    alert('Play Sound 3');
  }
   playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'},
      { shouldPlay: true }
    );}
  render(){
    return(
      <Button color="blue" title="Sound3"  onPress={this.playSound}></Button>
      
    )
  }
}

export class Sound4 extends Component{
   displayAlert() {
    alert('Play Sound 4');
   }
    playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'},
      { shouldPlay: true }
    );}
  render(){
    return(
      <Button color="orange" title="Sound4"  onPress={this.playSound}></Button>
      
    )
  }
}

export default class App extends Component{
  render() {
    return(
      <View style={{marginTop: 100, width: "100%"}}>
      <Sound1/>
      <Sound2/>
      <Sound3/>
      <Sound4/>
      </View>
    );
  }
}
