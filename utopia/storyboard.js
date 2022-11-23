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
        backgroundColor: '#FFA787',
        width: 279,
        height: 382,
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
    <img
      data-aspect-ratio-locked
      src='./assets/revert-modal-all.png'
      style={{
        position: 'absolute',
        width: 466,
        height: 242,
        top: 223,
        left: -246.5,
        transform: 'rotate(-15deg)',
      }}
      data-uid='53e'
    />
    <img
      data-aspect-ratio-locked
      src='./assets/Screenshot 2022-11-23 at 1.31.28 PM.png'
      style={{
        position: 'absolute',
        width: 77,
        height: 112,
        top: 41,
        left: -124,
      }}
      data-uid='987'
    />
    <img
      data-aspect-ratio-locked
      src='./assets/Screenshot 2022-11-23 at 1.48.55 PM.png'
      style={{
        position: 'absolute',
        width: 264,
        height: 202,
        top: 502,
        left: -217.5,
      }}
      data-uid='f04'
    />
    <img
      alt=''
      src='./assets/Screenshot 2022-11-23 at 2.02.49 PM.png'
      style={{
        position: 'absolute',
        left: -339,
        top: 18,
        width: 228,
        height: 190,
      }}
      data-uid='382'
      data-aspect-ratio-locked
    />
  </Storyboard>
)
