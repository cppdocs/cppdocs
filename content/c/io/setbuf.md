---
title: "setbuf"
source_path: "c/io/setbuf"
header: "<stdio.h>"
category: "c"
---

Sets the internal buffer to use for stream operations. It should be at least BUFSIZ characters long.

## Declarations
```cpp
void setbuf( FILE *stream, char *buffer );
```
_(until C99)_

```cpp
void setbuf( FILE *restrict stream, char *restrict buffer );
```
_(since C99)_

```cpp
#define BUFSIZ /*unspecified*/
```

## Parameters
- `stream`: the file stream to set the buffer to
- `buffer`: pointer to a buffer for the stream to use. If a null pointer is supplied, the buffering is turned off

## Return value
None.

## Notes
If [BUFSIZ](/c/io/) is not the appropriate buffer size, [setvbuf](/c/io/setvbuf/) can be used to change it.

[setvbuf](/c/io/setvbuf/) should also be used to detect errors, since setbuf does not indicate success or failure.

This function may only be used after stream has been associated with an open file, but before any other operation (other than a failed call to setbuf/setvbuf).

A common error is setting the buffer of stdin or stdout to an array whose lifetime ends before the program terminates:

## Example
```cpp
#include <stdio.h>
#include <threads.h>
 
int main(void)
{
    setbuf(stdout, NULL); // unbuffered stdout
    putchar('a'); // 'a' appears immediately if stdout is unbuffered
    thrd_sleep(&(struct timespec){.tv_sec=1}, NULL); // sleep 1 sec
    putchar('b'); 
}
```

## See also
- [setvbuf](/c/io/setvbuf/)
- [C++ documentation](/cpp/io/c/setbuf/)
