---
title: "std::strstream::strstream"
source_path: "cpp/io/strstream/strstream"
category: "io"
---

Constructs new input/output strstream and its underlying [std::strstreambuf](/cpp/io/strstreambuf/).

## Declarations
```cpp
strstream();
```
_(deprecated in C++98) (removed in C++26)_

```cpp
strstream( char* s, int n, std::ios_base::openmode mode =
std::ios_base::in | std::ios_base::out );
```
_(deprecated in C++98) (removed in C++26)_

## Parameters
- `s`: char array to use as the output buffer
- `n`: size of the array to be used for output
- `mode`: specifies stream open mode. It is a bitmask type, the following constants are defined (although only app is used): Constant Explanation app seek to the end of stream before each write binary open in binary mode in open for reading out open for writing trunc discard the contents of the stream when opening ate seek to the end of stream immediately after open noreplace (C++23) open in exclusive mode

## Example
```cpp
#include <iostream>
#include <string>
#include <strstream>
 
int main()
{
    // dynamic buffer
    std::strstream s1;
    s1 << 1 << ' ' << 3.14 << " example" << std::ends;
    std::cout << "Buffer holds: '" << s1.str() << "'\n";
    s1.freeze(false);
 
    int n;
    double d;
    std::string w;
    s1 >> n >> d >> w;
    std::cout << "Read back: n = " << n
              << ", d = " << d
              << ", w = '" << w << "'\n";
 
    // static buffer
    char arr[20] = "-1 -3.14 ";
    std::strstream s2(arr, sizeof arr, std::ios_base::app);
    s2 << "another" << std::ends;
    std::cout << "Buffer holds: '" << s2.str() << "'\n";
    s2 >> n >> d >> w;
    std::cout << "Read back: n = " << n
              << ", d = " << d
              << ", w = '" << w << "'\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 115 | C++98 | overload (2) only considered the casemode & app == 0 (== has higher precedence than &) | considers cases (mode & app) == 0and (mode & app) != 0 |

## See also
- [(constructor)](/cpp/io/strstreambuf/strstreambuf/)
- [(constructor)](/cpp/io/istrstream/istrstream/)
- [(constructor)](/cpp/io/ostrstream/ostrstream/)
