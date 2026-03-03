---
title: "std::memcmp"
source_path: "cpp/string/byte/memcmp"
header: "<cstring>"
category: "string"
---

Reinterprets the objects pointed to by lhs and rhs as arrays of unsigned char and compares the first count bytes of these arrays. The comparison is done lexicographically.

## Declarations
```cpp
int memcmp( const void* lhs, const void* rhs, std::size_t count );
```

## Parameters
- `lhs, rhs`: pointers to the memory buffers to compare
- `count`: number of bytes to examine

## Return value
Negative value if the first differing byte (reinterpreted as unsigned char) in lhs is less than the corresponding byte in rhs.

## Notes
This function reads [object representations](/cpp/language/objects/#Object_representation_and_value_representation), not the object values, and is typically meaningful for only trivially-copyable objects that have no padding. For example, memcmp() between two objects of type [std::string](/cpp/string/basic_string/) or [std::vector](/cpp/container/vector/) will not compare their contents, memcmp() between two objects of type struct { char c; int n; } will compare the padding bytes whose values may differ when the values of c and n are the same, and even if there were no padding bytes, the int would be compared without taking into account endianness.

## Example
```cpp
#include <cstring>
#include <iostream>
 
void demo(const char* lhs, const char* rhs, std::size_t sz)
{
    std::cout << std::string(lhs, sz);
    const int rc = std::memcmp(lhs, rhs, sz);
    if (rc < 0)
        std::cout << " precedes ";
    else if (rc > 0)
        std::cout << " follows ";
    else
        std::cout << " compares equal to ";
    std::cout << std::string(rhs, sz) << " in lexicographical order\n";
}
 
int main()
{
    char a1[] = {'a', 'b', 'c'};
    char a2[sizeof a1] = {'a', 'b', 'd'};
 
    demo(a1, a2, sizeof a1);
    demo(a2, a1, sizeof a1);
    demo(a1, a1, sizeof a1);
}
```

## See also
- [strcmp](/cpp/string/byte/strcmp/)
- [strncmp](/cpp/string/byte/strncmp/)
- [C documentation](/c/string/byte/memcmp/)
