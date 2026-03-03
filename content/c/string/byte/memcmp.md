---
title: "memcmp"
source_path: "c/string/byte/memcmp"
header: "<string.h>"
category: "c"
---

Compares the first count bytes of the objects pointed to by lhs and rhs. The comparison is done lexicographically.

## Declarations
```cpp
int memcmp( const void* lhs, const void* rhs, size_t count );
```

## Parameters
- `lhs, rhs`: pointers to the objects to compare
- `count`: number of bytes to examine

## Return value
Negative value if lhs appears before rhs in lexicographical order.

## Notes
This function reads [object representations](/c/language/object/), not the object values, and is typically meaningful for byte arrays only: structs may have padding bytes whose values are indeterminate, the values of any bytes beyond the last stored member in a union are indeterminate, and a type may have two or more representations for the same value (different encodings for +0 and -0 or for +0.0 and –0.0, indeterminate padding bits within the type).

## Example
```cpp
#include <stdio.h>
#include <string.h>
 
void demo(const char* lhs, const char* rhs, size_t sz)
{
    for(size_t n = 0; n < sz; ++n)
        putchar(lhs[n]);
 
    int rc = memcmp(lhs, rhs, sz);
    const char *rel = rc < 0 ? " precedes " : rc > 0 ? " follows " : " compares equal ";
    fputs(rel, stdout);
 
    for(size_t n = 0; n < sz; ++n)
        putchar(rhs[n]);
    puts(" in lexicographical order");
}
 
int main(void)
{
    char a1[] = {'a','b','c'};
    char a2[sizeof a1] = {'a','b','d'};
 
    demo(a1, a2, sizeof a1);
    demo(a2, a1, sizeof a1);
    demo(a1, a1, sizeof a1);
}
```

## See also
- [strcmp](/c/string/byte/strcmp/)
- [strncmp](/c/string/byte/strncmp/)
- [C++ documentation](/cpp/string/byte/memcmp/)
