---
title: "std::memchr"
source_path: "cpp/string/byte/memchr"
header: "<cstring>"
category: "string"
---

Converts ch to unsigned char and locates the first occurrence of that value in the initial count bytes (each interpreted as unsigned char) of the object pointed to by ptr.

## Declarations
```cpp
const void* memchr( const void* ptr, int ch, std::size_t count );
```

```cpp
void* memchr( void* ptr, int ch, std::size_t count );
```

## Parameters
- `ptr`: pointer to the object to be examined
- `ch`: byte to search for
- `count`: max number of bytes to examine

## Return value
Pointer to the location of the byte, or a null pointer if no such byte is found.

## Example
```cpp
#include <cstring>
#include <iostream>
 
int main()
{
    char arr[] = {'a', '\0', 'a', 'A', 'a', 'a', 'A', 'a'};
    char *pc = (char*) std::memchr(arr, 'A', sizeof arr);
    if (pc != nullptr)
        std::cout << "search character found\n";
    else
        std::cout << "search character not found\n";
}
```

## See also
- [strchr](/cpp/string/byte/strchr/)
- [findfind_iffind_if_not](/cpp/algorithm/find/)
- [C documentation](/c/string/byte/memchr/)
