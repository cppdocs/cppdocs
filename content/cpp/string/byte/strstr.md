---
title: "std::strstr"
source_path: "cpp/string/byte/strstr"
header: "<cstring>"
category: "string"
---

Finds the first occurrence of the byte string needle in the byte string pointed to by haystack. The terminating null characters are not compared.

## Declarations
```cpp
const char* strstr( const char* haystack, const char* needle );
```

```cpp
char* strstr( char* haystack, const char* needle );
```

## Parameters
- `haystack`: pointer to the null-terminated byte string to examine
- `needle`: pointer to the null-terminated byte string to search for

## Return value
Pointer to the first character of the found substring in haystack, or a null pointer if no such character is found. If needle points to an empty string, haystack is returned.

## Example
```cpp
#include <cstring>
#include <iomanip>
#include <iostream>
 
int main()
{
    const char* str = "Try not. Do, or do not. There is no try.";
    const char* target = "not";
 
    for (const char* result = str; (result = std::strstr(result, target)); ++result)
        std::cout << "Found " << std::quoted(target)
                  << " starting at (" << result - str << "): "
                  << std::quoted(result) << '\n';
}
```

## See also
- [find](/cpp/string/basic_string/find/)
- [wcsstr](/cpp/string/wide/wcsstr/)
- [strchr](/cpp/string/byte/strchr/)
- [strrchr](/cpp/string/byte/strrchr/)
- [C documentation](/c/string/byte/strstr/)
