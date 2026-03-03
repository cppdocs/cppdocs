---
title: "std::strspn"
source_path: "cpp/string/byte/strspn"
header: "<cstring>"
category: "string"
---

Returns the length of the maximum initial segment (span) of the byte string pointed to by dest, that consists of only the characters found in byte string pointed to by src.

## Declarations
```cpp
size_t strspn( const char* dest, const char* src );
```

## Parameters
- `dest`: pointer to the null-terminated byte string to be analyzed
- `src`: pointer to the null-terminated byte string that contains the characters to search for

## Return value
The length of the maximum initial segment that contains only characters from byte string pointed to by src.

## Example
```cpp
#include <cstring>
#include <iostream>
#include <string>
 
const char* low_alpha = "qwertyuiopasdfghjklzxcvbnm";
 
int main()
{
    std::string s = "abcde312$#@";
 
    std::size_t spnsz = std::strspn(s.c_str(), low_alpha);
    std::cout << "After skipping initial lowercase letters from '" << s
              << "'\nThe remainder is '" << s.substr(spnsz) << "'\n";
}
```

## See also
- [strcspn](/cpp/string/byte/strcspn/)
- [wcsspn](/cpp/string/wide/wcsspn/)
- [strpbrk](/cpp/string/byte/strpbrk/)
- [C documentation](/c/string/byte/strspn/)
