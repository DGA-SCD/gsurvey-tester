# G-Survey Tester
Provide all test-case for G-Survey Project

## Prerequisite

- [x] npm
- [x] node.js

## Installation 

### Clone repository 

```
git clone https://github.com/digital-solution-consulting/gsurvey-tester.git
```

### Install dependency packages

```
cd gsurvey-tester && npm install
```

### Add configuration
Add cypress.env.json in order to specify sensitive data ,such as username, password and so on.

```
cp cypress.env.json.simple to cypress.env.json
```
after that, edit each fields in that file.

### start up cypress 

```
npm run cypress:open
```

-----

## How to write test-case : [Docs](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html)




