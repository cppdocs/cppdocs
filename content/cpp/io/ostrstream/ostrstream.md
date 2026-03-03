---
title: "std::ostrstream::ostrstream"
source_path: "cpp/io/ostrstream/ostrstream"
category: "io"
---

Constructs new output strstream and its underlying [std::strstreambuf](/cpp/io/strstreambuf/).

## Declarations
```cpp
ostrstream();
```
_(deprecated in C++98) (removed in C++26)_

```cpp
ostrstream( char* s, int n, std::ios_base::openmode mode = std::ios_base::out );
```
_(deprecated in C++98) (removed in C++26)_

## Parameters
- `s`: char array to use as the output buffer
- `n`: size of the array to be used as the output buffer
- `mode`: specifies stream open mode. It is a bitmask type, the following constants are defined (although only app is used): Constant Explanation app seek to the end of stream before each write binary open in binary mode in open for reading out open for writing trunc discard the contents of the stream when opening ate seek to the end of stream immediately after open noreplace (C++23) open in exclusive mode

## Example
```cpp
#include <iostream>
#include <strstream>
 
int main()
{
    std::ostrstream s1; // dynamic buffer
    s1 << 1 << ' ' << 3.14 << " example\n" << std::ends;
    std::cout << s1.str();
    s1.freeze(false);
 
    char arr[15] = "Hello";
 
    std::ostrstream s2(arr, sizeof arr, std::ios_base::app);
    s2 << ", world!" << std::ends;
    std::cout << s2.str() << '\n';
    std::cout << arr << '\n'; // streams use the provided arrays
}
```

## See also
- [(constructor)](/cpp/io/strstreambuf/strstreambuf/)
- [(constructor)](/cpp/io/istrstream/istrstream/)
- [(constructor)](/cpp/io/strstream/strstream/)
