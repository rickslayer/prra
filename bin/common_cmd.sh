#find process in determinaded port
lsof -t -i:{PORT_NUMBER}

#force kill the process
sudo kill -9 {PROCESS_NUMBER}