# LekSimpleLogs

is a small package that helps to debug code faster.

it is an object with two getters and one method.

install it with `npm i lek-simple-logs`.

then import it

```javascript
const log = require('lek-simple-logs');
```

## line

Print a line composed by 100 guoines in the console. as it is a getter you don't need to use parenthesis which speeds up the writing.

```javascript
log.line
```

```cmd
----------------------------------------------------------------------------------------------------
```

## lines

Prints 10 lines I use it to separate and distinguish easily a specific data that I have printed with console.log

```javascript
log.lines
```

```cmd
----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------
```

## label

is a method that prints three lines in the console and the one in the middle with a label that you pass it. this is also useful for recognizing logs with speed

```javascript
log.label('My Label')
```

```cmd
----------------------------------------------------------------------------------------------------
-------------------------------------------- My Label ----------------------------------------------
----------------------------------------------------------------------------------------------------
```

## 1.0.1

Since version 1.0.1 lek-simple-logs includes the getter enter that makes a line break in the console, enters that makes 10 line breaks, the log method that makes a simple console.log, the color method that receives an ANSI color code and the getters red, green, yellow and blue that change the color of the following logs.

also now both getters and methods return this, which allows to chain methods and getters.

ej:

```javascript
log.label('My Label').line.red.log('my log').green.lines.enter.log('my other log'); //etc
```