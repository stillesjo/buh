# Buh
## What is Buh?
Ever missed a command line tool to search and install/clone github repositories? Buh (hub backwards) aims to remedy this!

## Installation
Given you have node and npm installed locally, simply run:

`npm install -g buh`

## Usage
### Searching for github repositories
To search for repositories on github, simply execute:

```bash
# Simple search using keywords
$ buh search dotfiles

# Only repositories owned by user stillesjo
$ buh search dotfiles --user stillesjo 

# Only repositories with javascript
$ buh search dotfiles --language javascript
```

### Installing github repositores
You can use the result that you got from the search method when you want to install (i.e. clone) it locally. 

```bash
# Install
$ buh install stillesjo/dotfiles

# This will install it to .files folder
$ buh install stillesjo/dotfiles .files 

# Will install it with ssh/git-protocol
$ buh install stillesjo/dotfiles --ssh  
```

### Opening repository on github site
You can also open the repository directly on github by running the open command.

```bash
# Will open http://github.com/stillesjo/dotfiles
$ buh open stillesjo/dotfiles

# Will try to open repository with the specified browser
$ buh open stillesjo/dotfiles --browser firefox 
```

## Author
[Alexander Stillesjö](http://stillesjo.org)

## License
MIT
