---
title: "std::showpoint, std::noshowpoint"
source_path: "cpp/io/manip/showpoint"
header: "<ios>"
category: "io"
---

Enables or disables the unconditional inclusion of the decimal point character in floating-point output. Has no effect on input.

## Declarations
```cpp
std::ios_base& showpoint( std::ios_base& str );
```

```cpp
std::ios_base& noshowpoint( std::ios_base& str );
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
    std::cout << "1.0 with showpoint: " << std::showpoint << 1.0 << '\n'
              << "1.0 with noshowpoint: " << std::noshowpoint << 1.0 << '\n';
}
```

## See also
- [resetiosflags](/cpp/io/manip/resetiosflags/)
- [setiosflags](/cpp/io/manip/setiosflags/)
