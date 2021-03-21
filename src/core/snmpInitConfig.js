const snmp = require("net-snmp");

const USER = 'rouser';
const authKey = '12345678';
const SNMP_HOST = '127.0.0.1';
const SNMP_PORT = 161;

const options = {
    port: SNMP_PORT,
    retries: 1,
    timeout: 20000,
    backoff: 1.0,
    transport: "udp4",
    trapPort: 161,
    version: snmp.Version3,
    backwardsGetNexts: true,
    idBitsSize: 32,
    context: ""
};

const user = {
    name: USER,
    level: snmp.SecurityLevel.authPriv,
    authProtocol: snmp.AuthProtocols.sha,
    authKey: authKey,
    privProtocol: snmp.PrivProtocols.aes,
    privKey: authKey
};

const session = snmp.createV3Session(SNMP_HOST, user, options);

function changeSessionUser(name, level, protocol, authKey, privProtocol, privKey) {
    user.name = name
    user.level = level
    user.authProtocol = protocol
    user.authKey = authKey
    user.privProtocol = privProtocol
    user.privKey = privKey
}

module.exports = {
    session,
    changeSessionUser
}
