---
title: "strncmp"
source_path: "c/string/byte/strncmp"
header: "<string.h>"
category: "c"
---

Compares at most count characters of two possibly null-terminated arrays. The comparison is done lexicographically. Characters following the null character are not compared.

## Declarations
```cpp
int strncmp( const char* lhs, const char* rhs, size_t count );
```

## Parameters
- `lhs, rhs`: pointers to the possibly null-terminated arrays to compare
- `count`: maximum number of characters to compare

## Return value
Negative value if lhs appears before rhs in lexicographical order.

## Notes
This function is not locale-sensitive, unlike [strcoll](/c/string/byte/strcoll/) and [strxfrm](/c/string/byte/strxfrm/).

## Example
```cpp
#include <stdio.h>
#include <string.h>
 
void demo(const char* lhs, const char* rhs, int sz)
{
    const int rc = strncmp(lhs, rhs, sz);
    if (rc < 0)
        printf("First %d chars of [%s] precede [%s]\n", sz, lhs, rhs);
    else if (rc > 0)
        printf("First %d chars of [%s] follow [%s]\n", sz, lhs, rhs);
    else
        printf("First %d chars of [%s] equal [%s]\n", sz, lhs, rhs);
}
int main(void)
{
    const char* string = "Hello World!";
    demo(string, "Hello!", 5);
    demo(string, "Hello", 10);
    demo(string, "Hello there", 10);
    demo("Hello, everybody!" + 12, "Hello, somebody!" + 11, 5);
}
```

## See also
- [strcmp](/c/string/byte/strcmp/)
- [wcsncmp](/c/string/wide/wcsncmp/)
- [memcmp](/c/string/byte/memcmp/)
- [strcoll](/c/string/byte/strcoll/)
- [C++ documentation](/cpp/string/byte/strncmp/)
