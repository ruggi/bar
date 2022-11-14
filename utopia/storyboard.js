import * as React from 'react'
import { Scene, Storyboard } from 'utopia-api'
import { App } from '/src/app.js'
import { Playground } from '/src/playground.js'
import { View } from 'utopia-api'

export var storyboard = (
  <Storyboard data-uid='0cd'>
    <View
      style={{
        backgroundColor: '#0091FFAA',
        position: 'absolute',
        left: -302,
        top: 48,
        width: 279,
        height: 382,
      }}
      data-uid='adb'
    >
      <View
        className='rounded-xl shadow-xl'
        style={{
          backgroundColor: '#0091FFAA',
          position: 'absolute', // uh uh uh
          left: 51,
          top: 65,
          width: 175,
          height: 197,
        }}
        data-uid='42d'
      />
    </View>
  </Storyboard>
)
