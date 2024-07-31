#!/bin/bash
set -e

# Start Docker Daemon
dockerd-entrypoint.sh &

# Start Jenkins
exec /usr/local/bin/jenkins.sh
