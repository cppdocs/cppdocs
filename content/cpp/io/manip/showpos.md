---
title: "std::showpos, std::noshowpos"
source_path: "cpp/io/manip/showpos"
header: "<ios>"
category: "io"
---

Enables or disables the display of the plus sign '+' in non-negative integer output. Has no effect on input.

## Declarations
```cpp
std::ios_base& showpos( std::ios_base& str );
```

```cpp
std::ios_base& noshowpos( std::ios_base& str );
```

## Parameters
- `str`: reference to I/O stream

## Return value
str (reference to the stream after manipulation).

## Example
```cpp
#include <iostream>
 
int main()
{
    std::cout
        << "showpos: " << std::showpos << 42 << ' ' << 3.14 << ' ' << 0 << '\n'
        << "noshowpos: " << std::noshowpos << 42 << ' ' << 3.14 << ' ' << 0 << '\n';
}
```

## See also
- [resetiosflags](/cpp/io/manip/resetiosflags/)
- [setiosflags](/cpp/io/manip/setiosflags/)
