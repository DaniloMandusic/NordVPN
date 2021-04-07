# NordVPN

## About
Library for connecting to NordVPN servers on windows OS. 

## Installation
1.Include nordvpn.js in your project

2.Import library to your main file: const nordvpn = require('./nordvpn')

3.In nordvpn.js file go to exec_options and set cwd to path of your NordVPN installation

4.Make sure to be logged in your NordVPN desktop application, you can download it from: https://nordvpn.com/

## Commands
nordvpn.connect() - connects to fastest server

nordvpn.connectToCountry('Hong Kong') - connects to specific country

nordvpn.connectToCountryGroup('United States') - connects to country group

nordvpn.connectToServer('United States #3710') - connects to specific server

nordvpn.disconnect() - disconnects from NordVPN

You can find them all in examples.js file

### Enjoy,
### Danilo Mandusic

