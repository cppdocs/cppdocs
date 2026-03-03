---
title: "std::strlen"
source_path: "cpp/string/byte/strlen"
header: "<cstring>"
category: "string"
---

Returns the length of the given byte string, that is, the number of characters in a character array whose first element is pointed to by str up to and not including the first null character. The behavior is undefined if there is no null character in the character array pointed to by str.

## Declarations
```cpp
std::size_t strlen( const char* str );
```

## Parameters
- `str`: pointer to the null-terminated byte string to be examined

## Return value
The length of the null-terminated string str.

## Example
```cpp
#include <cstring>
#include <iostream>
 
int main()
{
    const char str[] = "dog cat\0mouse";
 
    std::cout << "without null character: " << std::strlen(str) << '\n'
              << "with null character: " << sizeof str << '\n';
}
```

## See also
- [wcslen](/cpp/string/wide/wcslen/)
- [mblen](/cpp/string/multibyte/mblen/)
- [C documentation](/c/string/byte/strlen/)
