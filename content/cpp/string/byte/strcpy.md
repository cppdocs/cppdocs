---
title: "std::strcpy"
source_path: "cpp/string/byte/strcpy"
header: "<cstring>"
category: "string"
---

Copies the character string pointed to by src, including the null terminator, to the character array whose first element is pointed to by dest.

## Declarations
```cpp
char* strcpy( char* dest, const char* src );
```

## Parameters
- `dest`: pointer to the character array to write to
- `src`: pointer to the null-terminated byte string to copy from

## Return value
dest

## Example
```cpp
#include <cstring>
#include <iostream>
#include <memory>
 
int main()
{
    const char* src = "Take the test.";
//  src[0] = 'M'; // can't modify string literal
    auto dst = std::make_unique<char[]>(std::strlen(src) + 1); // +1 for null terminator
    std::strcpy(dst.get(), src);
    dst[0] = 'M';
    std::cout << src << '\n' << dst.get() << '\n';
}
```

## See also
- [strncpy](/cpp/string/byte/strncpy/)
- [memcpy](/cpp/string/byte/memcpy/)
- [C documentation](/c/string/byte/strcpy/)
