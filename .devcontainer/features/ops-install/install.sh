#!/bin/bash
set -e

echo "Installing OpenServerless CLI (ops)..."

export OPS_BRANCH=main

# get user
U=$(getent passwd 1000 | cut -d: -f1)

# Install ops as the remote user
su - $U -c 'export OPS_BRANCH=main && curl -sL n7s.co/get-ops | bash'

# Run ops -t to configure tools
su - $U -c 'export OPS_BRANCH=main && ~/.local/bin/ops -t'

echo "ops installation complete."
