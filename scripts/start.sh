#!/bin/bash
# Load NVM
export NVM_DIR="$HOME/.nvm"
source "$NVM_DIR/nvm.sh"

nvm use
npx expo start --tunnel
