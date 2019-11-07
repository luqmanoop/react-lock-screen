# react-lock-screen

> Simple lock-screen for idle React applications

Display a lock-screen when your React applications becomes idle

## Prerequisites

- [React 16.8+](https://reactjs.org/blog/2019/02/06/react-v16.8.0.html)

## Installation

```bash
$ npm install react-lock-screen
```

## Usage

```js
import LockScreen from 'react-lock-screen'
...

function App() {

  const getLockScreenUi = (setLock) => {
    return <button onClick={() => setLock(false)}>unlock</button>
  }

  return (
    <LockScreen
      timeout={2000}
      ui={getLockScreenUi}>
      <p>Lorem Ipsum is not simply</p>
    </LockScreen>
  )
```

## APIs (props)

### timeout
type: `number`

The number of idle (milliseconds) time before screen is locked

### ui
type: `function`

A function that returns some jsx representing the UI to show when screen is locked. Recieves a function argument that can be used to toggle lock-screen state.

```js
<LockScreen 
  ui={setLock => <button onClick={setLock(false)}>unlock</button>}>
  ...
</LockScreen>
```

### onScreenLocked
type: `function`

Callback function that gets called when screen is locked

### onScreenUnlocked
type: `function`

Callback function that gets called when screen is unlocked

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
`react-lock-screen` is licensed under [MIT]()
