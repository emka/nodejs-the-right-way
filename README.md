Examples from the book [Node.js the Right Way: Practical, Server-Side JavaScript That Scales](http://pragprog.com/book/jwnode/node-js-the-right-way) by Jim R. Wilson

# Notes

## node-harmony

The shebang line ```#!/usr/bin/env node --harmony``` works on MacOS, but not on Ubuntu. As a workaround, you can use a wrapper script like ```node-harmony``` in this repository. Just place it in your path (e.g., ```/usr/local/bin/```) and use the shebang line ```#!/usr/bin/env node-harmony```.

## Node.js 0.11

Chapter 6 is using functionality which was introduced in Node.js 0.11, available for Ubuntu as PPA:
```
sudo add-apt-repository ppa:chris-lea/node.js-devel
sudo apt-get update
sudo apt-get remove nodejs-legacy nodejs # conflicts with chris-lea package
sudo apt-get install nodejs
```

# License

[Copyright may apply](http://pragprog.com/titles/jwnode/source_code).
