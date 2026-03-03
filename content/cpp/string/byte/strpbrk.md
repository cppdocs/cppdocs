---
title: "std::strpbrk"
source_path: "cpp/string/byte/strpbrk"
header: "<cstring>"
category: "string"
---

Scans the null-terminated byte string pointed to by dest for any character from the null-terminated byte string pointed to by breakset, and returns a pointer to that character.

## Declarations
```cpp
const char* strpbrk( const char* dest, const char* breakset );
```

```cpp
char* strpbrk( char* dest, const char* breakset );
```

## Parameters
- `dest`: pointer to the null-terminated byte string to be analyzed
- `breakset`: pointer to the null-terminated byte string that contains the characters to search for

## Return value
Pointer to the first character in dest, that is also in breakset, or null pointer if no such character exists.

## Notes
The name stands for "string pointer break", because it returns a pointer to the first of the separator ("break") characters.

## Example
```cpp
#include <cstring>
#include <iomanip>
#include <iostream>
 
int main()
{
    const char* str = "hello world, friend of mine!";
    const char* sep = " ,!";
 
    unsigned int cnt = 0;
    do
    {
        str = std::strpbrk(str, sep); // find separator
        std::cout << std::quoted(str) << '\n';
        if (str)
            str += std::strspn(str, sep); // skip separator
        ++cnt; // increment word count
    } while (str && *str);
 
    std::cout << "There are " << cnt << " words\n";
}
```

## See also
- [strcspn](/cpp/string/byte/strcspn/)
- [strtok](/cpp/string/byte/strtok/)
- [strchr](/cpp/string/byte/strchr/)
- [wcspbrk](/cpp/string/wide/wcspbrk/)
- [C documentation](/c/string/byte/strpbrk/)
