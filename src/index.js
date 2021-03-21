import {
  QMainWindow,
  QWidget,
  QLabel,
  FlexLayout,
  QPushButton,
  QProgressBar,
  QIcon
} from '@nodegui/nodegui';
import { firstViewStyle } from './styles/styleSheet';
import { hash } from './core/core';
const { Worker } = require('worker_threads');

//********* INIT - Declare Main Elements *********

const win = new QMainWindow();
win.setWindowTitle("Gerenciamento de Desempenho");

//System Mem Display
const SystemMemRow = new QWidget();
const SystemMemRowLayout = new FlexLayout();
SystemMemRow.setObjectName('SystemMemRow');
SystemMemRow.setLayout(SystemMemRowLayout);

const availableMemLabel = new QLabel();
availableMemLabel.setObjectName("availableMemLabel");
availableMemLabel.setText("Available Memory: ");
availableMemLabel.setInlineStyle("margin-right: 5px;")

const availableMemValue = new QLabel();
availableMemValue.setObjectName("availableMemValue");
availableMemValue.setText('Calculating...');
availableMemValue.setInlineStyle("margin-left: 5px;")

SystemMemRowLayout.addWidget(availableMemLabel);
SystemMemRowLayout.addWidget(availableMemValue);

//System Used HD Display
const SystemHDAvailableRow = new QWidget();
const SystemHDAvailableRowLayout = new FlexLayout();
SystemHDAvailableRow.setObjectName('SystemHDAvailableRow');
SystemHDAvailableRow.setLayout(SystemHDAvailableRowLayout);

const availableHDLabel = new QLabel();
availableHDLabel.setObjectName("availableHDLabel");
availableHDLabel.setText("Available HD Space: ");
availableHDLabel.setInlineStyle("margin-right: 5px;")

const availableHDValue = new QLabel();
availableHDValue.setObjectName("availableHDValue");
availableHDValue.setText("Calculating...");
availableHDValue.setInlineStyle("margin-left: 5px;")

SystemHDAvailableRowLayout.addWidget(availableHDLabel);
SystemHDAvailableRowLayout.addWidget(availableHDValue);

//System Used HD Display
const SystemHDRow = new QWidget();
const SystemHDRowLayout = new FlexLayout();
SystemHDRow.setObjectName('SystemHDRow');
SystemHDRow.setLayout(SystemHDRowLayout);

const usedHDLabel = new QLabel();
usedHDLabel.setObjectName("usedHDLabel");
usedHDLabel.setText("Used HD Space: ");
usedHDLabel.setInlineStyle("margin-right: 5px;")

const usedHDValue = new QLabel();
usedHDValue.setObjectName("usedHDValue");
usedHDValue.setText("Calculating...");
usedHDValue.setInlineStyle("margin-left: 5px;")

SystemHDRowLayout.addWidget(usedHDLabel);
SystemHDRowLayout.addWidget(usedHDValue);

//CPU Data Display
const CPUBarRow = new QWidget();
const CPUBarRowLayout = new FlexLayout();
CPUBarRow.setObjectName('CPUBarRow');
CPUBarRow.setLayout(CPUBarRowLayout);

const CPUBarLabel = new QLabel();
CPUBarLabel.setObjectName("CPUBarlabel");
CPUBarLabel.setText("CPU Usage in Last Minute");
CPUBarLabel.setInlineStyle("margin-right: 5px;")

const CPUBar = new QProgressBar();
CPUBar.setMaximum(100)
CPUBar.setMinimum(0)
CPUBar.setValue(50)
CPUBar.isVisible(true)

const CPUBarValue = new QLabel();
CPUBarValue.setObjectName("CPUBarValue");
CPUBarValue.setText("24 %");
CPUBarValue.setInlineStyle("margin-left: 5px;")

CPUBarRowLayout.addWidget(CPUBarLabel);
CPUBarRowLayout.addWidget(CPUBar);
CPUBarRowLayout.addWidget(CPUBarValue);

//TCP In Data Display
const tcpInRow = new QWidget();
const tcpInRowLayout = new FlexLayout();
tcpInRow.setObjectName('tcpInRow');
tcpInRow.setLayout(tcpInRowLayout);

const tcpInLabel = new QLabel();
tcpInLabel.setObjectName("tcpInlabel");
tcpInLabel.setText("TCP Received Segments");
tcpInLabel.setInlineStyle("margin-right: 5px;")

const tcpInValue = new QLabel();
tcpInValue.setObjectName("tcpInValue");
tcpInValue.setText("Calculating...");
tcpInValue.setInlineStyle("margin-left: 5px;")

tcpInRowLayout.addWidget(tcpInLabel);
tcpInRowLayout.addWidget(tcpInValue);

//TCP Out Data Display
const tcpOutRow = new QWidget();
const tcpOutRowLayout = new FlexLayout();
tcpOutRow.setObjectName('tcpOutRow');
tcpOutRow.setLayout(tcpOutRowLayout);

const tcpOutLabel = new QLabel();
tcpOutLabel.setObjectName("tcpOutlabel");
tcpOutLabel.setText("TCP Sent Segments");
tcpOutLabel.setInlineStyle("margin-right: 5px;")

const tcpOutValue = new QLabel();
tcpOutValue.setObjectName("tcpOutValue");
tcpOutValue.setText("Calculating...");
tcpOutValue.setInlineStyle("margin-left: 5px;")

tcpOutRowLayout.addWidget(tcpOutLabel);
tcpOutRowLayout.addWidget(tcpOutValue);

//IP Out Data Display
const ipInRow = new QWidget();
const ipInRowLayout = new FlexLayout();
ipInRow.setObjectName('ipInRow');
ipInRow.setLayout(ipInRowLayout);

const ipInLabel = new QLabel();
ipInLabel.setObjectName("ipInlabel");
ipInLabel.setText("IP Received Datagrams");
ipInLabel.setInlineStyle("margin-right: 5px;")

const ipInValue = new QLabel();
ipInValue.setObjectName("ipInValue");
ipInValue.setText("Calculating...");
ipInValue.setInlineStyle("margin-left: 5px;")

ipInRowLayout.addWidget(ipInLabel);
ipInRowLayout.addWidget(ipInValue);

//IP Out Data Display
const ipOutRow = new QWidget();
const ipOutRowLayout = new FlexLayout();
ipOutRow.setObjectName('ipOutRow');
ipOutRow.setLayout(ipOutRowLayout);

const ipOutLabel = new QLabel();
ipOutLabel.setObjectName("ipOutlabel");
ipOutLabel.setText("IP Sent Datagrams");
ipOutLabel.setInlineStyle("margin-right: 5px;")

const ipOutValue = new QLabel();
ipOutValue.setObjectName("ipOutValue");
ipOutValue.setText("Calculating...");
ipOutValue.setInlineStyle("margin-left: 5px;")

ipOutRowLayout.addWidget(ipOutLabel);
ipOutRowLayout.addWidget(ipOutValue);

//Upload Data Display
const upBarRow = new QWidget();
const upBarRowLayout = new FlexLayout();
upBarRow.setObjectName('upBarRow');
upBarRow.setLayout(upBarRowLayout);

const upBarLabel = new QLabel();
upBarLabel.setObjectName("upBarlabel");
upBarLabel.setText("Upload");
upBarLabel.setInlineStyle("margin-right: 5px;")

const upBarValue = new QLabel();
upBarValue.setObjectName("upBarValue");
upBarValue.setText("Calculating...");
upBarValue.setInlineStyle("margin-left: 5px;")

upBarRowLayout.addWidget(upBarLabel);
upBarRowLayout.addWidget(upBarValue);

//Download Data Display
const downBarRow = new QWidget();
const downBarRowLayout = new FlexLayout();
downBarRow.setObjectName('downBarRow');
downBarRow.setLayout(downBarRowLayout);

const downBarLabel = new QLabel();
downBarLabel.setObjectName("downBarlabel");
downBarLabel.setText("Download");
downBarLabel.setInlineStyle("margin-right: 5px;")

const downBarValue = new QLabel();
downBarValue.setObjectName("downBarValue");
downBarValue.setText("Calculating...");
downBarValue.setInlineStyle("margin-left: 5px;")

downBarRowLayout.addWidget(downBarLabel);
downBarRowLayout.addWidget(downBarValue);

//Root window style
const centralWidget = new QWidget();
centralWidget.setObjectName("myroot");
const rootLayout = new FlexLayout();
centralWidget.setLayout(rootLayout);

//********* END - Declare Main Elements *********


//********* INIT - Declare Main Functions *********

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function getUpData() {
  let table = hash.getByName.ifTable.storage

  let reads = []

  if (table.length > 1) {
    for (let j = 0; j < table.length; j++) {
      let data = table[j];
      if (data && data.length > 1) {
        for (let i = 0; i < data.length; i++) {
          if (data[i][0].value == 'en13') {
            reads.push({
              value: data[i][2].value,
              timestamp: data[i][2].timestamp,
              id: j
            })
          }
        }
      }
    }

    reads.sort(function (a, b) {
      return a.id - b.id;
    });

    let speed = reads[reads.length - 1]?.value - reads[reads.length - 2]?.value;

    let timeWindow = reads[reads.length - 1]?.timestamp - reads[reads.length - 2]?.timestamp;

    timeWindow = timeWindow / 1000;

    if (speed > -1) {
      return formatBytes(speed / timeWindow)
    }
  }
}

function getDownData() {
  let table = hash.getByName.ifTable.storage

  let reads = []

  if (table.length > 1) {
    for (let j = 0; j < table.length; j++) {
      let data = table[j];
      if (data && data.length > 1) {
        for (let i = 0; i < data.length; i++) {
          if (data[i][0].value == 'en13') {
            reads.push({
              value: data[i][1].value,
              timestamp: data[i][1].timestamp,
              id: j
            })
          }
        }
      }
    }

    reads.sort(function (a, b) {
      return a.id - b.id;
    });

    let speed = reads[reads.length - 1]?.value - reads[reads.length - 2]?.value;

    let timeWindow = reads[reads.length - 1]?.timestamp - reads[reads.length - 2]?.timestamp;

    timeWindow = timeWindow / 1000;

    if (speed > -1) {
      return formatBytes(speed / timeWindow)
    }
  }
}

function getCPUData() {
  let table = hash.getByName.hrProcessorTable.storage[1];
  let acc;

  if (table) {
    acc = 0;
    for (let i = 0; i < table[0].length; i++) {
      acc += table[0][i].value;
    }
    return Math.round(acc / table[0].length);
  }

}

function getTCPInData() {
  let data = hash.getByName.tcpInSegs.storage;

  data = data[data.length - 1];

  if (data) {
    return data;
  }
}

function getTCPOutData() {
  let data = hash.getByName.tcpOutSegs.storage;

  data = data[data.length - 1];

  if (data) {
    return data;
  }
}

function getIPInData() {
  let data = hash.getByName.ipInReceives.storage;

  data = data[data.length - 1];

  if (data) {
    return data;
  }
}

function getIPOutData() {
  let data = hash.getByName.ipOutRequests.storage;

  data = data[data.length - 1];

  if (data) {
    return data;
  }
}

function getHDTotalSize() {
  let table = hash.getByName.hrStorageTable.storage[0];

  if (table) {
    let totalSize = 0;

    for (let i = 0; i < table.length; i++) {
      if (table[i][2].value !== 'Physical memory') {
        totalSize += table[i][5].value * table[i][3].value
      }
    }

    totalSize = formatBytes(totalSize);

    if (totalSize) {
      return totalSize;
    }
  }

}

function getPhysMemSize() {
  let value = hash.getByName.hrMemorySize.storage[0]

  value = formatBytes(value * 1000);

  if (value) {
    return value;
  }
}

function renderMainWidnow() {

  rootLayout.addWidget(SystemMemRow);
  rootLayout.addWidget(SystemHDAvailableRow);
  rootLayout.addWidget(SystemHDRow);
  rootLayout.addWidget(CPUBarRow);
  rootLayout.addWidget(upBarRow);
  rootLayout.addWidget(downBarRow);
  rootLayout.addWidget(tcpInRow);
  rootLayout.addWidget(tcpOutRow);
  rootLayout.addWidget(ipInRow);
  rootLayout.addWidget(ipOutRow);

  win.setCentralWidget(centralWidget);
  win.setStyleSheet(firstViewStyle);
  win.setMinimumSize(350, 450)
  win.show();

  global.win = win;

  setInterval(() => {

    if (getPhysMemSize()) {
      availableMemValue.setText(getPhysMemSize());
    }

    if (getHDTotalSize()) {
      availableHDValue.setText(getHDTotalSize());
    }

    if (getDownData()) {
      downBarValue.setText(getDownData() + '/s')
    }

    if (getUpData()) {
      upBarValue.setText(getUpData() + '/s');
    }

    if (getTCPInData()) {
      tcpInValue.setText(getTCPInData());
    }

    if (getTCPOutData()) {
      tcpOutValue.setText(getTCPOutData());
    }

    if (getIPInData()) {
      ipInValue.setText(getIPInData());
    }

    if (getIPOutData()) {
      ipOutValue.setText(getIPOutData());
    }


  }, 100)
}

//********* END - Declare Main Functions *********

renderMainWidnow();

const child = new Worker('./src/core/core.js');
