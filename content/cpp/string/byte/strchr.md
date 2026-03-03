---
title: "std::strchr"
source_path: "cpp/string/byte/strchr"
header: "<cstring>"
category: "string"
---

Finds the first occurrence of the character static_cast<char>(ch) in the byte string pointed to by str.

## Declarations
```cpp
const char* strchr( const char* str, int ch );
```

```cpp
char* strchr( char* str, int ch );
```

## Parameters
- `str`: pointer to the null-terminated byte string to be analyzed
- `ch`: character to search for

## Return value
Pointer to the found character in str, or a null pointer if no such character is found.

## Example
```cpp
#include <cstring>
#include <iostream>
 
int main()
{
    const char* str = "Try not. Do, or do not. There is no try.";
    char target = 'T';
    const char* result = str;
 
    while ((result = std::strchr(result, target)) != nullptr)
    {
        std::cout << "Found '" << target
                  << "' starting at '" << result << "'\n";
 
        // Increment result, otherwise we'll find target at the same location
        ++result;
    }
}
```

## See also
- [memchr](/cpp/string/byte/memchr/)
- [find](/cpp/string/basic_string/find/)
- [wcschr](/cpp/string/wide/wcschr/)
- [strrchr](/cpp/string/byte/strrchr/)
- [strpbrk](/cpp/string/byte/strpbrk/)
- [C documentation](/c/string/byte/strchr/)
