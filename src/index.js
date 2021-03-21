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
availableMemValue.setText("167768 MB");
availableMemValue.setInlineStyle("margin-left: 5px;")

SystemMemRowLayout.addWidget(availableMemLabel);
SystemMemRowLayout.addWidget(availableMemValue);

//System HD Display
const SystemHDRow = new QWidget();
const SystemHDRowLayout = new FlexLayout();
SystemHDRow.setObjectName('SystemHDRow');
SystemHDRow.setLayout(SystemHDRowLayout);

const availableHDLabel = new QLabel();
availableHDLabel.setObjectName("availableHDLabel");
availableHDLabel.setText("Available HD Space: ");
availableHDLabel.setInlineStyle("margin-right: 5px;")

const availableHDValue = new QLabel();
availableHDValue.setObjectName("availableHDValue");
availableHDValue.setText("12345 GB");
availableHDValue.setInlineStyle("margin-left: 5px;")

SystemHDRowLayout.addWidget(availableHDLabel);
SystemHDRowLayout.addWidget(availableHDValue);

//CPU Data Display
const CPUBarRow = new QWidget();
const CPUBarRowLayout = new FlexLayout();
CPUBarRow.setObjectName('CPUBarRow');
CPUBarRow.setLayout(CPUBarRowLayout);

const CPUBarLabel = new QLabel();
CPUBarLabel.setObjectName("CPUBarlabel");
CPUBarLabel.setText("CPU");
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

//Memory Data Display
const MemBarRow = new QWidget();
const MemBarRowLayout = new FlexLayout();
MemBarRow.setObjectName('MemBarRow');
MemBarRow.setLayout(MemBarRowLayout);

const MemBarLabel = new QLabel();
MemBarLabel.setObjectName("MemBarlabel");
MemBarLabel.setText("MEM");
MemBarLabel.setInlineStyle("margin-right: 5px;")

const MemBar = new QProgressBar();
MemBar.setMaximum(100)
MemBar.setMinimum(0)
MemBar.setValue(50)
MemBar.isVisible(true)

const MemBarValue = new QLabel();
MemBarValue.setObjectName("MemBarValue");
MemBarValue.setText("24 %");
MemBarValue.setInlineStyle("margin-left: 5px;")

MemBarRowLayout.addWidget(MemBarLabel);
MemBarRowLayout.addWidget(MemBar);
MemBarRowLayout.addWidget(MemBarValue);

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
upBarValue.setText("120 KB/s");
upBarValue.setInlineStyle("margin-left: 5px;")

upBarRowLayout.addWidget(upBarLabel);
upBarRowLayout.addWidget(upBarValue);

//Root window style
const centralWidget = new QWidget();
centralWidget.setObjectName("myroot");
const rootLayout = new FlexLayout();
centralWidget.setLayout(rootLayout);

//********* END - Declare Main Elements *********

async function renderMainWidnow() {

  rootLayout.addWidget(SystemMemRow);
  rootLayout.addWidget(SystemHDRow);
  rootLayout.addWidget(CPUBarRow);
  rootLayout.addWidget(MemBarRow);
  rootLayout.addWidget(upBarRow)

  win.setCentralWidget(centralWidget);
  win.setStyleSheet(firstViewStyle);
  win.setMinimumSize(320, 450)
  win.show();

  global.win = win;
  
}

renderMainWidnow();
