---
title: "std::is_corresponding_member"
source_path: "cpp/types/is_corresponding_member"
header: "<type_traits>"
category: "types"
since: "C++20"
---

Determines whether mp and mq refer corresponding members in the [common initial sequence](/cpp/language/data_members/#Standard-layout) of S1 and S2. The program is ill-formed if either S1 or S2 is an [incomplete type](/cpp/language/type-id/#Incomplete_type).

## Declarations
```cpp
template< class S1, class S2, class M1, class M2 >
constexpr bool is_corresponding_member( M1 S1::* mp, M2 S2::* mq ) noexcept;
```
_(since C++20)_

## Parameters
- `mp, mq`: pointers-to-member to detect

## Return value
true if mp and mq refer corresponding members in the common initial sequence of S1 and S2, otherwise false.

## Notes
The type of a pointer-to-member expression &S::m is not always M S::*, where m is of type M, because m may be a member inherited from a base class of S. The template arguments can be specified in order to avoid potentially surprising results.

## Example
```cpp
#include <type_traits>
 
struct Foo
{
    int x;
    double d;
};
 
struct Bar
{
    int y;
    double z;
};
 
struct Baz : Foo, Bar {}; // not standard-layout
 
static_assert(
    std::is_same_v<decltype(&Baz::x), int Foo::*> == true &&
    std::is_same_v<decltype(&Baz::y), int Bar::*> == true &&
    std::is_corresponding_member(&Foo::x, &Bar::y) == true &&
    std::is_corresponding_member(&Foo::d, &Bar::z) == true &&
    std::is_corresponding_member(&Baz::x, &Baz::y) == true &&
    std::is_corresponding_member<Baz, Baz, int, int>(&Baz::x, &Baz::y) == false
);
 
int main() {}
```

## See also
- [is_standard_layout](/cpp/types/is_standard_layout/)
- [standard-layout](/cpp/language/data_members/#Standard-layout)
- [is_layout_compatible](/cpp/types/is_layout_compatible/)
- [layout-compatible](/cpp/language/data_members/#Standard_layout)
- [is_member_object_pointer](/cpp/types/is_member_object_pointer/)
