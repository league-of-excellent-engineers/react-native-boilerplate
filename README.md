# Jokes Mobile

## Prerequisites

| Name                                                                  | Version | Notes       |
| --------------------------------------------------------------------- |:-------:|-------------|
| [Node.js](https://nodejs.org)                                         | 8.9.3   | required    |
| [yarn](https://yarnpkg.com)                                           | 1.3.2   | required    |

## Getting Started

Clone and enter the project

```bash
git clone https://github.com/league-of-excellent-engineers/react-native-boilerplate
cd react-native-boilerplate
```

Install dependencies

```bash
yarn install
```

## Build Instructions

### iOS

Requirements:

| Name                                           | Version | Notes                             |
| ---------------------------------------------- |:-------:|-----------------------------------|
| [Xcode](https://developer.apple.com/xcode/)    | 9       | packaged with most modern Macs    |

#### Simulator/Local Device

Build and run on an iOS device (simulator or usb connected device):

```bash
yarn run ios
```

View process logs:

```bash
yarn run log:ios
```

### Android

Requirements:

| Name                                                                                              | Version | Notes                             |
| ------------------------------------------------------------------------------------------------- |:-------:|-----------------------------------|
| [Android Studio](https://developer.android.com/studio/index.html)                                 | 3.0.1   | Must be downloaded and installed  |
| [Java SDK 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) | 8u151   | Java 9 does not work w/ RN yet    |

**`Note:`**
If you are going to use a simulator, that needs to be installed as well. Look at [this guide](https://facebook.github.io/react-native/docs/getting-started.html) for details.

#### Simulator/Local Device

Build and run on an Android device (simulator or usb connected device):

**`Note:`** If using a simulator - launch the simulator first before running the next steps.

```bash
yarn run android
```

View process logs:

```bash
yarn run log:android
```

## Project Commands (see npm scripts defined in [package.json](package.json))

### NPM scripts (see [package.json](package.json))

These commands can be run using [yarn](https://yarnpkg.com/lang/en/docs/cli/run/)(recommended) or [npm](https://docs.npmjs.com/misc/scripts).

| Command                     | Description                                                             |
| --------------------------- |-------------------------------------------------------------------------|
| `android`                   | Build and run on Android device                                         |
| `ios`                       | Build and run on iOS device                                             |
| `lint`                      | Execute all project linting checks.                                     |
| `lint:watch`                | Execute linting checks, and lint when files change.                     |
| `nuke`                      | Remove native build directories and Node.js modules.                    |
| `nuke:android`              | Remove Android build directory.                                         |
| `nuke:ios`                  | Remove iOS build directory.                                             |
| `nuke:native`               | Remove iOS and Android build directories.                               |
| `nuke:node`                 | Remove all Node.js modules.                                             |
| `nuke:the-big-one`          | Remove all build directories, reinstall Node.js modules, and reset git. |
| `postinstall`               | Automatically runs `react-native link` after installing dependencies.   |
| `prepush`                   | Ensure module stability and lint, test checks before `git push`.        |
| `start`                     | Starts React Native's Metro Bundler.                                    |
| `log:android`               | Streams Android process logs to the commandline.                        |
| `log:ios`                   | Streams iOS process logs to the commandline.                            |
| `test`                      | Execute tests.                                                          |