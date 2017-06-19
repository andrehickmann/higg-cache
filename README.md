# higg:cache

A basic cache for persisting data in the memory of your JavaScript/TypeScript application. 
The complete package and the tests are written in TypeScript.

## Table of contents

- [Install](#install)
- [Using](#using)
- [Tests](#tests)
- [Contributors](#contributors)
- [Todos](#todos)


## Install

Installing the package over npm:

 ```sh
 $ npm install higg-cache --save
 ```

## Using the Cache

Creating a new ``Cache``-instance using `new Cache(name)`:

```js
import {Cache} from 'higg-cache';
import {CachedObject} from 'higg-cache';

let cacheInstance = new Cache('my_cache');

```
You don't have to choose a name for the cache, in this case the cache-instance
generate its own name. The name is important for later use in the cache-storage.
By now you can just access the cache by the variable you defined.

The ```Cache``` only accepts ``Cacheable`` objects, so you have to wrap your data into an ``CachedObject`` instance by
giving it an identifier and the data you want to cache:
```js
let users = new CachedObject('users', ['Jack', 'Steve', 'Vanessa', 'Miranda', 'Tim']);
```

Now you can add the `Cacheable` item to the cache, by simply calling `addItem()`:

```
/* adding the users to the cache*/
cacheInstance.addItem(users);
```

If you want to check if the cache-instance already has an item you are looking
for, you can use the `hasItem(key)` function. The function will return a boolean
value.

```js
if (cacheInstance.hasItem('users') === false) {
  cacheInstance.addItem(new CachedObject('users', [...]));
}
```

Of course if you want to get an item out of the cache, you can call `getItem(key)`:

```js
  let usersOutOfCache = cacheInstance.getItem('users');
```
Please note, this method will throw an ``Error``, if the key does not exist in your
cache.


## Tests

  `npm test`

## Contributers

If you like to contribute to the package, feel free to fork the repository and
make a pull-request.

## Todos

Of course the package is very simple at the moment, there are plenty things to
do:

* writing an interface for Cache, if we would like to add other cache-
  types then memory-only
* adding more cache-types :)
* adding timestamps for invalidate cache-items
