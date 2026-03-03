---
title: "std::strstreambuf::setbuf"
source_path: "cpp/io/strstreambuf/setbuf"
category: "io"
---

If s is a null pointer and n is zero, this function has no effect.

## Declarations
```cpp
protected:
virtual streambuf* setbuf( char* s, std::streamsize n );
```
_(deprecated in C++98) (removed in C++26)_

## Parameters
- `s`: pointer to the first byte in the user-provided buffer
- `n`: the number of bytes in the user-provided buffer

## Return value
this

## Example
```cpp
#include <iostream>
#include <strstream>
 
int main()
{
    char a[100] = {};
    std::strstream str;
    str.rdbuf()->pubsetbuf(a, sizeof a);
    str << "Test string" << std::ends;
    std::cout << "user-provided buffer holds \"" << a << "\"\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 66 | C++98 | the effect of setbuf() was "performs an operation that isdefined separately for each class derived from strstreambuf",but there are no classes derived from strstreambuf | the effect isimplementation-defined |

## See also
- [pubsetbuf](/cpp/io/basic_streambuf/pubsetbuf/)
- [setbuf](/cpp/io/basic_streambuf/pubsetbuf/)
- [setbuf](/cpp/io/basic_stringbuf/setbuf/)
- [setbuf](/cpp/io/basic_filebuf/setbuf/)
