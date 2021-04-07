const cp = require('child_process')

const exec_options = {
    //make sure to put path to your NordVPN installation
    cwd: "D:\\NordVPN"
}

module.exports = {
    name:"nordVPN",
    description: "library for connecting to NordVPN servers",

    connect(){
        cp.exec('nordvpn -c', exec_options, (err,stdout, stderr) => {
            if(err) console.log(err);
            else console.log(stdout)
            
        })
    },

    disconnect(){
        cp.exec('nordvpn -d', exec_options, (err,stdout, stderr) => {
            if(err) console.log(err);
            else console.log(stdout)

        })
    },

    connectToCountry(country){
        cp.exec('nordvpn -c -g "' + country + '"', exec_options, (err,stdout, stderr) => {
            if(err) console.log(err);
            else console.log(stdout)

        })
    },

    connectToServer(name){
        cp.exec('nordvpn -c -n "' + name + '"', exec_options, (err,stdout, stderr) => {
            if(err) console.log(err);
            else console.log(stdout)

        })
    },

    connectToCountryGroup(countryGroup){
        cp.exec('nordvpn -c -g "' + countryGroup + '"', exec_options, (err,stdout, stderr) => {
            if(err) console.log(err);
            else console.log(stdout)

        })
    }
}