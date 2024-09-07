#!/bin/bash

# Clear Past Log File
rm -rf server_pids.log

# File to log PIDs
LOG_FILE="../server_pids.log"

# Function to log PIDs
log_pid() {
  echo "$1" >> $LOG_FILE
}

# Clean up old log file
> $LOG_FILE

# Run the Backend Server
cd backend
if [ "$1" == "dev" ]; then
  npm run dev &
else
  npm run start &
fi
BACKEND_PID=$!
log_pid $BACKEND_PID

# Run the Frontend Server
cd ../frontend
npm run dev &
FRONTEND_PID=$!
log_pid $FRONTEND_PID

# Run the Flask Server
cd ../Flask-Server
python app.py
FLASK_PID=$!
log_pid $FLASK_PID

echo "Servers started. PIDs logged in $LOG_FILE."
