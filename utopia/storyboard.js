import * as React from 'react'
import { Storyboard } from 'utopia-api'
import { View } from 'utopia-api'
import uuid from 'react-uuid'

const UUID = () => {
  const uid = React.useMemo(() => uuid(), [])
  return (
    <div
      data-uid='33d'
      className='font-mono text text-center text-gray-300 uppercase'
    >
      {uid}
    </div>
  )
}

export var storyboard = (
  <Storyboard data-uid='0cd'>
    <View
      style={{
        backgroundColor: '#0f9',
        width: 279,
        height: 382, // asd asd
      }}
      data-uid='adb'
    >
      <View
        className='rounded-2xl shadow-xl flex items-center justify-center'
        style={{
          backgroundColor: '#FFFFFF',
          position: 'absolute',
          left: 52,
          top: 93,
          width: 175,
          height: 197,
        }}
        data-uid='42d'
      >
        <UUID data-uid='b11' />
      </View>
    </View>
  </Storyboard>
)
