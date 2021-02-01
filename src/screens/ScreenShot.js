import React, { Component } from 'react';
import { StatusBar, Button, CameraRoll, Image, Text, View, StyleSheet, Dimensions } from 'react-native';
import { Constants, takeSnapshotAsync } from 'expo';

const {width, height} = Dimensions.get('screen');

export default class App extends Component {
  state = {
    cameraRollUri: '',
  };

  render() {
    return (
      <View
        style={styles.container}
        collapsable={false}
         ref={view => {
          this._container = view;
        }}>
        <Text style={styles.paragraph}>
          Change code in the editor and watch it change on your phone!
          Save to get a shareable url. You get a new url each time you save.
        </Text>

        {this.state.cameraRollUri &&
          <Image
            source={{ uri: this.state.cameraRollUri }}
            style={{ width: 200, height: 200, resizeMode:"contain", borderWidth: 2, borderColor: "red" }}
          />}

        <Button title="Snappy snap" onPress={this._saveToCameraRollAsync} />
      </View>
    );
  }

  _saveToCameraRollAsync = async () => {
    await StatusBar.setHidden(true);
    let result = await takeSnapshotAsync(this._container, {
      format: 'png',
      result: 'file',
      height,
      width,
      quality: 1
    });
    console.log(result);

    let saveResult = await CameraRoll.saveToCameraRoll(result, 'photo');
    await StatusBar.setHidden(false);
    this.setState({ cameraRollUri: result });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 2,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
