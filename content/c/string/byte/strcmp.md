---
title: "strcmp"
source_path: "c/string/byte/strcmp"
header: "<string.h>"
category: "c"
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

## Notes
This function is not locale-sensitive, unlike [strcoll](/c/string/byte/strcoll/) and [strxfrm](/c/string/byte/strxfrm/).

## Example
```cpp
#include <stdio.h>
#include <string.h>
 
void demo(const char* lhs, const char* rhs)
{
    const int rc = strcmp(lhs, rhs);
    const char* rel = rc < 0 ? "precedes" : rc > 0 ? "follows" : "equals";
    printf("[%s] %s [%s]\n", lhs, rel, rhs);
}
 
int main(void)
{
    const char* string = "Hello World!";
    demo(string, "Hello!");
    demo(string, "Hello");
    demo(string, "Hello there");
    demo("Hello, everybody!" + 12, "Hello, somebody!" + 11);
}
```

## See also
- [strncmp](/c/string/byte/strncmp/)
- [wcscmp](/c/string/wide/wcscmp/)
- [memcmp](/c/string/byte/memcmp/)
- [strcoll](/c/string/byte/strcoll/)
- [C++ documentation](/cpp/string/byte/strcmp/)
