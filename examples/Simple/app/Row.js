import React, { Component } from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import StretchView from 'react-native-stretchview';

const styles = StyleSheet.create({
  container: {
    height: 50,
  },
});

export default class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  componentWillMount() {
    this.stretch = this.stretch.bind(this);
  }

  stretch() {
    const { expanded } = this.state;
    this.setState({
      expanded: !expanded,
    });
  }

  renderTopFace() {
    const { title } = this.props;
    return (
      <View>
        <View style={{
          height: styles.container.height,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
          <Text>First View</Text>
          <Text>{title}</Text>
          <TouchableOpacity onPress={this.stretch}>
            <Text>Touch Me</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 1, backgroundColor: 'red' }} />
      </View>
    );
  }

  renderBottomFace() { // eslint-disable-line class-methods-use-this
    return (
      <View style={{
        height: styles.container.height,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text>Second View</Text>
      </View>
    );
  }

  render() {
    const { expanded } = this.state;
    return (
      <StretchView
        renderTopFace={this.renderTopFace}
        renderBottomFace={this.renderBottomFace}
        animateDistance={styles.container.height}
        expanded={expanded}
      />
    );
  }
}
