---
title: "offsetof"
source_path: "cpp/types/offsetof"
header: "<cstddef>"
category: "types"
---

The macro offsetof expands to an integral constant expression of type [std::size_t](/cpp/types/size_t/), the value of which is the offset, in bytes, from the beginning of an object of specified type to its specified subobject, including [padding bits](/cpp/language/objects/#Object_representation_and_value_representation) if any.

## Declarations
```cpp
#define offsetof(type, member) /* implementation-defined */
```

## Notes
The offset of the first member of a standard-layout type is always zero ([empty-base optimization](/cpp/language/ebo/) is mandatory).

offsetof cannot be implemented in standard C++ and requires compiler support: [GCC](https://github.com/gcc-mirror/gcc/blob/68ec60c4a377b532ec2d265ea542107c36b1d15c/gcc/ginclude/stddef.h#L406), [LLVM](https://github.com/llvm-mirror/clang/blob/release_70/lib/Headers/stddef.h#L120).

member is not restricted to a direct member. It can denote a subobject of a given member, such as an element of an array member. This is specified by [C DR 496](https://open-std.org/JTC1/SC22/WG14/www/docs/n2396.htm#dr_496).

It is specified in C23 that defining a new type containing an unparenthesized comma in offsetof is undefined behavior, and such usage is generally not supported by implementations in C++ modes: offsetof(struct Foo { int a, b; }, a) is rejected by all known implementations.

## Example
```cpp
#include <cstddef>
#include <iostream>
 
struct S
{
    char   m0;
    double m1;
    short  m2;
    char   m3;
//  private: int z; // warning: 'S' is a non-standard-layout type
};
 
int main()
{
    std::cout
        << "offset of char   m0 = " << offsetof(S, m0) << '\n'
        << "offset of double m1 = " << offsetof(S, m1) << '\n'
        << "offset of short  m2 = " << offsetof(S, m2) << '\n'
        << "offset of char   m3 = " << offsetof(S, m3) << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 273 | C++98 | offsetof may not work if unary operator& is overloaded | required to work correctly evenif operator& is overloaded |
| LWG 306 | C++98 | the behavior was not specified when type is not a PODType | the result is undefined in this case |
| LWG 449 | C++98 | other requirements of offsetof wereremoved by the resolution of LWG issue 306 | added them back |

## See also
- [size_t](/cpp/types/size_t/)
- [sizeof](/cpp/language/sizeof/)
- [is_standard_layout](/cpp/types/is_standard_layout/)
- [standard-layout](/cpp/language/data_members/#Standard-layout)
- [C documentation](/c/types/offsetof/)
