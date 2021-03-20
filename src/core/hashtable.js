const table = {
    '1.3.6.1.2.1.25.2.3': {
        name: 'hrStorageTable',
        lastUpdatedAt: '',
        oid: '1.3.6.1.2.1.25.2.3',
        type: 'table',
        storage: []
    },
    '1.3.6.1.2.1.25.2.2.0': {
        name: 'hrMemorySize',
        oid: '1.3.6.1.2.1.25.2.2.0',
        lastUpdatedAt: '',
        type: 'object',
        storage: []
    },
    '1.3.6.1.2.1.7.4.0': {
        name: 'udpOutDatagrams',
        oid: '1.3.6.1.2.1.7.4.0',
        lastUpdatedAt: '',
        type: 'object',
        storage: []
    },
    '1.3.6.1.2.1.7.1.0': {
        name: 'udpInDatagrams',
        oid: '1.3.6.1.2.1.7.1.0',
        lastUpdatedAt: '',
        type: 'object',
        storage: []
    },
    '1.3.6.1.2.1.6.10.0': {
        name: 'tcpInSegs',
        lastUpdatedAt: '',
        oid: '1.3.6.1.2.1.6.10.0',
        type: 'object',
        storage: []
    },
    '1.3.6.1.2.1.6.11.0': {
        name: 'tcpOutSegs',
        oid: '1.3.6.1.2.1.6.11.0',
        lastUpdatedAt: '',
        type: 'object',
        storage: []
    }
}

const getByNameValue = {
    hrStorageTable: table['1.3.6.1.2.1.25.2.3'],
    hrMemorySize: table['1.3.6.1.2.1.25.2.2.0'],
    udpOutDatagrams: table['1.3.6.1.2.1.7.4.0'],
    udpInDatagrams: table['1.3.6.1.2.1.7.1.0'],
    tcpInSegs: table['1.3.6.1.2.1.6.10.0'],
    tcpOutSegs: table['1.3.6.1.2.1.6.11.0]'],
}

module.exports = {
    table,
    getByNameValue
}
