---
title: "std::skipws, std::noskipws"
source_path: "cpp/io/manip/skipws"
header: "<ios>"
category: "io"
---

Enables or disables skipping of leading whitespace by the formatted input functions (enabled by default). Has no effect on output.

## Declarations
```cpp
std::ios_base& skipws( std::ios_base& str );
```

```cpp
std::ios_base& noskipws( std::ios_base& str );
```

## Parameters
- `str`: reference to I/O stream

## Return value
str (reference to the stream after manipulation).

## Example
```cpp
#include <iostream>
#include <sstream>
 
int main()
{
    char c1, c2, c3;
    std::istringstream("a b c") >> c1 >> c2 >> c3;
    std::cout << "Default  behavior:"
                 " c1 = " << c1 << 
                 " c2 = " << c2 << 
                 " c3 = " << c3 << '\n';
    std::istringstream("a b c") >> std::noskipws >> c1 >> c2 >> c3;
    std::cout << "noskipws behavior:" 
                 " c1 = " << c1 <<
                 " c2 = " << c2 <<
                 " c3 = " << c3 << '\n';
}
```

## See also
- [resetiosflags](/cpp/io/manip/resetiosflags/)
- [setiosflags](/cpp/io/manip/setiosflags/)
- [ws](/cpp/io/manip/ws/)
