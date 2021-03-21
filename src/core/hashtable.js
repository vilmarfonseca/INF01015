const table = {
    '1.3.6.1.2.1.25.2.3': {
        name: 'hrStorageTable',
        lastUpdatedAt: '',
        oid: ['1.3.6.1.2.1.25.2.3'],
        type: 'table',
        runInterval: 608000,
        interval: null,
        columns: [1, 2, 3, 4, 5, 6],
        storage: []
    },
    '1.3.6.1.2.1.25.5.1':{
        name: 'hrSWRunPerfTable',
        lastUpdatedAt: '',
        oid: ['1.3.6.1.2.1.25.5.1'],
        type: 'table',
        runInterval: 120000,
        interval: null,
        columns: [1, 2],
        storage: []
    },
    '1.3.6.1.2.1.2.2':{
        name: 'ifTable',
        lastUpdatedAt: '',
        oid: ['1.3.6.1.2.1.2.2'],
        type: 'table',
        runInterval: 3000,
        columns: [2, 10, 16],
        interval: null,
        storage: []
    },
    '1.3.6.1.2.1.25.2.2.0': {
        name: 'hrMemorySize',
        oid: ['1.3.6.1.2.1.25.2.2.0'],
        lastUpdatedAt: '',
        type: 'object',
        runInterval: 600000,
        interval: null,
        storage: []
    },
    '1.3.6.1.2.1.7.4.0': {
        name: 'udpOutDatagrams',
        oid: ['1.3.6.1.2.1.7.4.0'],
        lastUpdatedAt: '',
        type: 'object',
        runInterval: 3000,
        interval: null,
        storage: []
    },
    '1.3.6.1.2.1.6.10.0': {
        name: 'tcpInSegs',
        lastUpdatedAt: '',
        oid: ['1.3.6.1.2.1.6.10.0'],
        type: 'object',
        runInterval: 3000,
        interval: null,
        storage: []
    },
    '1.3.6.1.2.1.6.11.0': {
        name: 'tcpOutSegs',
        oid: ['1.3.6.1.2.1.6.11.0'],
        lastUpdatedAt: '',
        type: 'object',
        runInterval: 3000,
        interval: null,
        storage: []
    },
    '1.3.6.1.2.1.4.9.0': {
        name: 'ipInDelivers',
        oid: ['1.3.6.1.2.1.4.9.0'],
        lastUpdatedAt: '',
        type: 'object',
        runInterval: 3000,
        interval: null,
        storage: []
    },
    '1.3.6.1.2.1.4.10.0': {
        name: 'ipOutRequests',
        oid: ['1.3.6.1.2.1.4.10.0'],
        lastUpdatedAt: '',
        type: 'object',
        runInterval: 3000,
        interval: null,
        storage: []
    },
    '1.3.6.1.2.1.4.3.0': {
        name: 'ipInReceives',
        oid: ['1.3.6.1.2.1.4.3.0'],
        lastUpdatedAt: '',
        type: 'object',
        runInterval: 3000,
        interval: null,
        storage: []
    }
}

const getByName = {
    hrStorageTable: table['1.3.6.1.2.1.25.2.3'],
    hrMemorySize: table['1.3.6.1.2.1.25.2.2.0'],
    ifTable: table['1.3.6.1.2.1.2.2'],
    udpOutDatagrams: table['1.3.6.1.2.1.7.4.0'],
    tcpInSegs: table['1.3.6.1.2.1.6.10.0'],
    tcpOutSegs: table['1.3.6.1.2.1.6.11.0'],
    ipInReceives: table['1.3.6.1.2.1.4.3.0'],
    ipInDelivers: table['1.3.6.1.2.1.4.9.0'],
    ipOutRequests: table['1.3.6.1.2.1.4.10.0'],
    hrSWRunPerfTable: table['1.3.6.1.2.1.25.5.1'],
}

module.exports = {
    table,
    getByName
}
