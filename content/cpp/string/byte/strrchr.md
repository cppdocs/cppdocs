---
title: "std::strrchr"
source_path: "cpp/string/byte/strrchr"
header: "<cstring>"
category: "string"
---

Finds the last occurrence of ch (after conversion to char) in the byte string pointed to by str. The terminating null character is considered to be a part of the string and can be found if searching for '\0'.

## Declarations
```cpp
const char* strrchr( const char* str, int ch );
```

```cpp
char* strrchr( char* str, int ch );
```

## Parameters
- `str`: pointer to the null-terminated byte string to be analyzed
- `ch`: character to search for

## Return value
Pointer to the found character in str, or null pointer if no such character is found.

## Example
```cpp
#include <cstring>
#include <iostream>
 
int main()
{
    char input[] = "/home/user/hello.c";
    char* output = std::strrchr(input, '/');
    if (output)
        std::cout << output + 1 << '\n';
}
```

## See also
- [strchr](/cpp/string/byte/strchr/)
- [wcsrchr](/cpp/string/wide/wcsrchr/)
- [rfind](/cpp/string/basic_string/rfind/)
- [C documentation](/c/string/byte/strrchr/)
