# ens-name-finder
Short script to find a name available to bid on for Ethereum Name Service.
Super simple, just for fun and to try the ENS bidding process :)

### Set up

```
$ git clone https://github.com/HCharlanes/ens-name-finder
```
```
$ cd ens-name-finder/
```
```
$ npm install
```

### Use

Finding available names including one word: 

```
$ node ens.js word1
```

output: 
```
Found a Name to bid on!! Name: word136
Found a Name to bid on!! Name: 9673word1
Found a Name to bid on!! Name: 1word19

```

Finding available names including two words: 

```
$ node ens.js word1 word2
```

output: 
```
Found a Name to bid on!! Name: 99word1word2
Found a Name to bid on!! Name: 3word237word1
```

### Doge Mode

```
$ node ens.js doge word1
```

output: 
```
Found a Name to bid on!! Name: wowwowsuchword1wow
Found a Name to bid on!! Name: funfunlotzword1420
```