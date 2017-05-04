# ens-name-finder
Short script to find a name available to bid on for Ethereum Name Service.
Super simple, just for fun :)

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
Found a Name to bid on!! Name: 5word1160
Found a Name to bid on!! Name: 1word19
Found a Name to bid on!! Name: 1word19
Found a Name to bid on!! Name: 1word180
Found a Name to bid on!! Name: 2020word1
```

Finding available names including two words: 

```
$ node ens.js word1 word2
```

output: 
```
Found a Name to bid on!! Name: 99word1word2
Found a Name to bid on!! Name: 3word237word1
Found a Name to bid on!! Name: word2946word160
Found a Name to bid on!! Name: word17878word29
Found a Name to bid on!! Name: 5word2word17171
Found a Name to bid on!! Name: word170333word25
Found a Name to bid on!! Name: 56word1992word24
Found a Name to bid on!! Name: 3word27701word1
Found a Name to bid on!! Name: 55716word1word29
Found a Name to bid on!! Name: word2523word10
```