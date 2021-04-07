const nordvpn = require('./nordvpn')

//connects to fastest server
nordvpn.connect()

//connects to specific country
nordvpn.connectToCountry('Hong Kong')

//connects to country group
nordvpn.connectToCountryGroup('United States')

//connects to specific server
nordvpn.connectToServer('United States #3710')

//disconnects from NordVPN
nordvpn.disconnect()