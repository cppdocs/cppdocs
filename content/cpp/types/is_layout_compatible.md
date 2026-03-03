---
title: "std::is_layout_compatible"
source_path: "cpp/types/is_layout_compatible"
header: "<type_traits>"
category: "types"
since: "C++20"
---

If T and U are [layout-compatible](/cpp/language/data_members/#Standard-layout) types, provides the member constant value equal to true. Otherwise value is false.

## Declarations
```cpp
template< class T, class U >
struct is_layout_compatible;
```
_(since C++20)_

## Notes
A signed integer type and its unsigned counterpart are not layout-compatible. char is layout-compatible with neither signed char nor unsigned char.

[Similar types](/cpp/language/reinterpret_cast/#Type_aliasing) are not layout-compatible if they are not the same type after ignoring top-level cv-qualification.

An enumeration type and its underlying type are not layout-compatible.

Array types of layout-compatible but different element types (ignoring cv-qualification) are not layout-compatible, even if they are of equal length.

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <type_traits>
 
struct Foo
{
    int x;
    char y;
};
 
struct FooNua
{
    int x;
    [[no_unique_address]] char y;
};
 
class Bar
{
    const int u = 42;
    volatile char v = '*';
};
 
enum E0 : int {};
enum class E1 : int {};
 
static_assert
(
    std::is_layout_compatible_v<const void, volatile void> == true  and
    std::is_layout_compatible_v<Foo, Bar>                  == true  and
    std::is_layout_compatible_v<Foo[2], Bar[2]>            == false and
    std::is_layout_compatible_v<int, E0>                   == false and
    std::is_layout_compatible_v<E0, E1>                    == true  and
    std::is_layout_compatible_v<long, unsigned long>       == false and
    std::is_layout_compatible_v<char*, const char*>        == false and
    std::is_layout_compatible_v<char*, char* const>        == true  and
    std::is_layout_compatible_v<Foo, FooNua>               == false // Note [1]
);
 
// [1] MSVC erroneously fails this assert
 
int main() {}
```

## See also
- [is_standard_layout](/cpp/types/is_standard_layout/)
- [standard-layout](/cpp/language/data_members/#Standard-layout)
