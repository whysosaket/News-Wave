#!/bin/bash

# File where PIDs are logged
LOG_FILE="server_pids.log"

# Function to kill process by PID
kill_pid() {
  if [ -n "$1" ]; then
    kill $1
    echo "Stopped process with PID: $1"
  else
    echo "No PID provided to stop."
  fi
}

# Read the PIDs from the log file and stop the processes
while IFS= read -r line; do
  PID=$line
  echo "$PID"
  kill_pid $PID
done < $LOG_FILE

echo "All servers stopped."
