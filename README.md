# burritos

## Installation

Install

`npm i`

## Usage
### Unit Tests

`npm run test`

### Start dev server

`npm run dev`

### Build docker image (on mac)
`docker build -t my-node-ts-server .`

### run docker instance
`docker run -p 3000:3000 my-node-ts-server`

### Manual tests
Tests done through simple `curl` calls you can inspect in the [test_api.sh](test_api.sh).

`./test_api.sh`

Note because the burrito/order ids are hardcoded in the script, but follow a global counter in the controller, this will only work when the server first starts up (and there are 0 burritos)
