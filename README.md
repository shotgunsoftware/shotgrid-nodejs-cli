# Shotgrid API Javascript CLI

## Installation
```sh
npm install shotgrid-nodejs-cli
```

## Getting Started

### Using as interactive style

```sh
# One time global installation
npm install -g shotgrid-nodejs-cli

# Interactive mode
shotgrid-nodejs-cli
```

### Using as command style

```sh
# One time global installation
npm install -g shotgrid-nodejs-cli

# Command invocation
shotgrid-nodejs-cli --site https://mysite.shotgrid.autodesk.com --username username --password password entity-read HumanUser 3

# Credentials setup algternative
export SHOTGUN_SITE=https://mysite.shotgrid.autodesk.com
export SHOTGUN_USERNAME=username
export SHOTGUN_PASSWORD=password

shotgrid-nodejs-cli entity-read HumanUser 3
```

To view a list of available commands, refer to `shotgrid-nodejs-cli --help`.

## Project Structure

Important files at a glance.

```
shotgrid-nodejs-cli
├── src
│    ├── commands           Command definitions
│    └── interactive
│        └── operations     Interactive choice definitions
└── bin
     └── index.js           Entrypoint
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/shotgunsoftware/shotgrid-nodejs-cli.

## License

The library and executable are available as open source under the terms of the MIT License.
