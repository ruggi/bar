import * as React from 'react'
import { Scene, Storyboard } from 'utopia-api'
import { App } from '/src/app.js'
import { Playground } from '/src/playground.js'
import { View } from 'utopia-api'

export var storyboard = (
  <Storyboard data-uid='0cd'>
    <View
      style={{
        backgroundColor: '#FF0095AB',
        position: 'absolute',
        left: 42,
        top: 173,
        width: 251,
        height: 295,
      }}
      data-uid='91b'
    >
      <View
        style={{
          backgroundColor: '#001EFFAB',
          position: 'absolute',
          left: 26,
          top: 48,
          width: 200,
          height: 200,
          borderRadius: '100%',
        }}
        data-uid='1c3'
      >
        <View
          style={{
            backgroundColor: '#BFFF00',
            position: 'absolute',
            left: 67,
            top: 67,
            width: 66,
            height: 66,
          }}
          data-uid='aaa'
        />
      </View>
    </View>
  </Storyboard>
)
