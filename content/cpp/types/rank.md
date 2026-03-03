---
title: "std::rank"
source_path: "cpp/types/rank"
header: "<type_traits>"
category: "types"
since: "C++11"
---

If T is an array type, provides the member constant value equal to the number of dimensions of the array. For any other type, value is 0.

## Declarations
```cpp
template< class T >
struct rank;
```
_(since C++11)_

## Example
```cpp
#include <type_traits>
 
static_assert(std::rank<int>{} == 0);
static_assert(std::rank<int[5]>{} == 1);
static_assert(std::rank<int[5][5]>{} == 2);
static_assert(std::rank<int[][5][5]>{} == 3);
 
int main()
{
    [[maybe_unused]] int ary[][3] = {{1, 2, 3}};
 
    // The rank of reference type, e.g., ary[0], that is int(&)[3], is 0:
    static_assert(std::rank_v<decltype(ary[0])> == 0);
    static_assert(std::is_same_v<decltype(ary[0]), int(&)[3]>);
 
    // The solution is to remove the reference type.
    static_assert(std::rank_v<std::remove_cvref_t<decltype(ary[0])>> == 1);
}
```

## See also
- [is_array](/cpp/types/is_array/)
- [extent](/cpp/types/extent/)
- [remove_extent](/cpp/types/remove_extent/)
- [remove_all_extents](/cpp/types/remove_all_extents/)
