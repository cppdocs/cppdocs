---
title: "std::uppercase, std::nouppercase"
source_path: "cpp/io/manip/uppercase"
header: "<ios>"
category: "io"
---

Enables the use of uppercase characters in floating-point and hexadecimal integer output. Has no effect on input.

## Declarations
```cpp
std::ios_base& uppercase( std::ios_base& str );
```

```cpp
std::ios_base& nouppercase( std::ios_base& str );
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
    std::cout << std::hex << std::showbase
              << "0x2a with uppercase: " << std::uppercase << 0x2a << '\n'
              << "0x2a with nouppercase: " << std::nouppercase << 0x2a << '\n'
              << "1e-10 with uppercase: " << std::uppercase << 1e-10 << '\n'
              << "1e-10 with nouppercase: " << std::nouppercase << 1e-10 << '\n';
}
```

## See also
- [resetiosflags](/cpp/io/manip/resetiosflags/)
- [setiosflags](/cpp/io/manip/setiosflags/)
