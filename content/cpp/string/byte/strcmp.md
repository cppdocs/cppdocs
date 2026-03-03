---
title: "std::strcmp"
source_path: "cpp/string/byte/strcmp"
header: "<cstring>"
category: "string"
---

Compares two null-terminated byte strings lexicographically.

## Declarations
```cpp
int strcmp( const char* lhs, const char* rhs );
```

## Parameters
- `lhs, rhs`: pointers to the null-terminated byte strings to compare

## Return value
Negative value if lhs appears before rhs in lexicographical order.

## Example
```cpp
#include <algorithm>
#include <cstring>
#include <iostream>
#include <vector>
 
int main() 
{
    std::vector<const char*> cats{"Heathcliff", "Snagglepuss", "Hobbes", "Garfield"};
    std::sort(cats.begin(), cats.end(), [](const char* strA, const char* strB)
    {
        return std::strcmp(strA, strB) < 0;
    }); 
 
    for (const char* cat : cats)
        std::cout << cat << '\n';
}
```

## See also
- [strncmp](/cpp/string/byte/strncmp/)
- [wcscmp](/cpp/string/wide/wcscmp/)
- [memcmp](/cpp/string/byte/memcmp/)
- [strcoll](/cpp/string/byte/strcoll/)
- [C documentation](/c/string/byte/strcmp/)
