---
title: "alignas specifier (since C++11)"
source_path: "cpp/language/alignas"
category: "language"
since: "C++11"
---

Specifies the [alignment requirement](/cpp/language/objects/#Alignment) of a type or an object.

## Notes
As of the ISO C11 standard, the C language has the _Alignas keyword and defines alignas as a preprocessor macro expanding to the keyword in the header [<stdalign.h>](/c/types/).

In C++, this is a keyword, and

the headers [<stdalign.h>](/cpp/header/cstdalign/) and [<cstdalign>](/cpp/header/cstdalign/) do not define such macro. They do, however, define the macro constant __alignas_is_defined.

the header [<stdalign.h>](/cpp/header/cstdalign/) does not define such macro. It does, however, define the macro constant __alignas_is_defined.

## Example
```cpp
#include <iostream>
 
// Every object of type struct_float will be aligned
// to alignof(float) boundary (usually 4):
struct alignas(float) struct_float
{
    // your definition here
};
 
// Every object of type sse_t will be aligned to 32-byte boundary:
struct alignas(32) sse_t
{
    float sse_data[4];
};
 
int main()
{
    struct default_aligned
    {
        float data[4];
    } a, b, c;
    sse_t x, y, z;
 
    std::cout
        << "alignof(struct_float) = " << alignof(struct_float) << '\n'
        << "sizeof(sse_t) = " << sizeof(sse_t) << '\n'
        << "alignof(sse_t) = " << alignof(sse_t) << '\n'
        << std::hex << std::showbase
        << "&a: " << &a << "\n"
           "&b: " << &b << "\n"
           "&c: " << &c << "\n"
           "&x: " << &x << "\n"
           "&y: " << &y << "\n"
           "&z: " << &z << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1437 | C++11 | alignas could be used in alias declarations | prohibited |
| CWG 2354 | C++11 | alignas could be applied to the declaration of an enumeration | prohibited |

## See also
- [alignof](/cpp/language/alignof/)
- [alignment_of](/cpp/types/alignment_of/)
- [C documentation](/c/language/alignas/)
