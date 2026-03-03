---
title: "std::setbuf"
source_path: "cpp/io/c/setbuf"
header: "<cstdio>"
category: "io"
---

Sets the internal buffer to use for I/O operations performed on the C stream stream.

## Declarations
```cpp
void setbuf( std::FILE* stream, char* buffer );
```

## Parameters
- `stream`: the file stream to set the buffer to
- `buffer`: pointer to a buffer for the stream to use. If a null pointer is supplied, the buffering is turned off. If not null, must be able to hold at least BUFSIZ characters

## Return value
(none)

## Notes
If [BUFSIZ](/cpp/io/c/) is not the appropriate buffer size, [std::setvbuf](/cpp/io/c/setvbuf/) can be used to change it.

[std::setvbuf](/cpp/io/c/setvbuf/) should also be used to detect errors, since std::setbuf does not indicate success or failure.

This function may only be used after stream has been associated with an open file, but before any other operation (other than a failed call to std::setbuf/[std::setvbuf](/cpp/io/c/setvbuf/)).

A common error is setting the buffer of [stdin](/cpp/io/c/std_streams/) or [stdout](/cpp/io/c/std_streams/) to an array whose lifetime ends before the program terminates:

## Example
```cpp
#include <chrono>
#include <cstdio>
#include <thread>
 
int main()
{
    using namespace std::chrono_literals;
 
    std::setbuf(stdout, nullptr); // unbuffered stdout
    std::putchar('a'); // appears immediately on unbuffered stream
    std::this_thread::sleep_for(1s);
    std::putchar('b');
}
```

## See also
- [setvbuf](/cpp/io/c/setvbuf/)
- [C documentation](/c/io/setbuf/)
