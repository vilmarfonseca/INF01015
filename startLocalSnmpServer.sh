#bin/bash!

sudo launchctl unload -w /System/Library/LaunchDaemons/org.net-snmp.snmpd.plist && sudo launchctl load -w /System/Library/LaunchDaemons/org.net-snmp.snmpd.plist

