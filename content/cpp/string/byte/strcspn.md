---
title: "std::strcspn"
source_path: "cpp/string/byte/strcspn"
header: "<cstring>"
category: "string"
---

Returns the length of the maximum initial segment of the byte string pointed to by dest, that consists of only the characters not found in byte string pointed to by src.

## Declarations
```cpp
std::size_t strcspn( const char *dest, const char *src );
```

## Parameters
- `dest`: pointer to the null-terminated byte string to be analyzed
- `src`: pointer to the null-terminated byte string that contains the characters to search for

## Return value
The length of the maximum initial segment that contains only characters not found in the byte string pointed to by src.

## Example
```cpp
#include <cstddef>
#include <cstring>
#include <iomanip>
#include <iostream>
#include <string>
 
int main()
{
    std::string s = "abcde312$#@";
    const char* invalid = "*$#";
 
    const std::size_t valid_len = std::strcspn(s.c_str(), invalid);
    if (valid_len != s.size())
    {
        std::cout << std::quoted(s)
                  << " contains invalid chars starting at position "
                  << valid_len << '\n'
                  << std::string(valid_len + 1, '-') << "^\n";
    }
}
```

## See also
- [strspn](/cpp/string/byte/strspn/)
- [wcscspn](/cpp/string/wide/wcscspn/)
- [strpbrk](/cpp/string/byte/strpbrk/)
- [find_first_of](/cpp/string/basic_string/find_first_of/)
- [C documentation](/c/string/byte/strcspn/)
