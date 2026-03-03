---
title: "std::strncmp"
source_path: "cpp/string/byte/strncmp"
header: "<cstring>"
category: "string"
---

Compares at most count characters of two possibly null-terminated arrays. The comparison is done lexicographically. Characters following the null character are not compared.

## Declarations
```cpp
int strncmp( const char* lhs, const char* rhs, std::size_t count );
```

## Parameters
- `lhs, rhs`: pointers to the possibly null-terminated arrays to compare
- `count`: maximum number of characters to compare

## Return value
Negative value if lhs appears before rhs in lexicographical order.

## Notes
This function is not locale-sensitive, unlike [std::strcoll](/cpp/string/byte/strcoll/) and [std::strxfrm](/cpp/string/byte/strxfrm/).

## Example
```cpp
#include <cstring>
#include <iostream>
 
void demo(const char* lhs, const char* rhs, int sz)
{
    const int rc = std::strncmp(lhs, rhs, sz);
    if (rc < 0)
        std::cout << "First " << sz << " chars of ["
                  << lhs << "] precede [" << rhs << "]\n";
    else if (rc > 0)
        std::cout << "First " << sz << " chars of ["
                  << lhs << "] follow [" << rhs << "]\n";
    else
        std::cout << "First " << sz << " chars of ["
                  << lhs << "] equal [" << rhs << "]\n";
}
 
int main()
{
    demo("Hello, world!", "Hello, everybody!", 13);
    demo("Hello, everybody!", "Hello, world!", 13);
    demo("Hello, everybody!", "Hello, world!", 7);
    demo("Hello, everybody!" + 12, "Hello, somebody!" + 11, 5);
}
```

## See also
- [strcmp](/cpp/string/byte/strcmp/)
- [wcsncmp](/cpp/string/wide/wcsncmp/)
- [memcmp](/cpp/string/byte/memcmp/)
- [strcoll](/cpp/string/byte/strcoll/)
- [C documentation](/c/string/byte/strncmp/)
