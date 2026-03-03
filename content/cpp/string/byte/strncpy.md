---
title: "std::strncpy"
source_path: "cpp/string/byte/strncpy"
header: "<cstring>"
category: "string"
---

Copies at most count characters of the byte string pointed to by src (including the terminating null character) to character array pointed to by dest.

## Declarations
```cpp
char* strncpy( char* dest, const char* src, std::size_t count );
```

## Parameters
- `dest`: pointer to the character array to copy to
- `src`: pointer to the byte string to copy from
- `count`: maximum number of characters to copy

## Return value
dest

## Example
```cpp
#include <cstring>
#include <iostream>
 
int main()
{
    const char* src = "hi";
    char dest[6] = {'a', 'b', 'c', 'd', 'e', 'f'};
    std::strncpy(dest, src, 5);
 
    std::cout << "The contents of dest are: ";
    for (char c : dest)
    {
        if (c)
            std::cout << c << ' ';
        else
            std::cout << "\\0" << ' ';
    }
    std::cout << '\n';
}
```

## See also
- [strcpy](/cpp/string/byte/strcpy/)
- [memcpy](/cpp/string/byte/memcpy/)
- [C documentation](/c/string/byte/strncpy/)
