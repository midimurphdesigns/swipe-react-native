import React, { Component } from 'react'
import { Text, StyleSheet, View, Animated } from 'react-native'

export default class Deck extends Component {

  renderCards() {
    return this.props.data.map(item => {
      return this.props.renderCard(item);
    });
  }

  render() {
    return (
      <View>
        {this.renderCards()}
      </View>
    )
  }
}

const styles = StyleSheet.create({})
