---
title: "std::extent"
source_path: "cpp/types/extent"
header: "<type_traits>"
category: "types"
since: "C++11"
---

If T is an array type, provides the member constant value equal to the number of elements along the Nth dimension of the array, if N is in [0,[std::rank](/cpp/types/rank/)<T>::value). For any other type, or if T is an array of unknown bound along its first dimension and N is 0, value is 0.

## Declarations
```cpp
template< class T, unsigned N = 0 >
struct extent;
```
_(since C++11)_

## Example
```cpp
#include <type_traits>
 
static_assert(
    std::extent_v<int[3]> == 3 && // default dimension is 0
    std::extent_v<int[3], 0> == 3 && // the same as above
    std::extent_v<int[3][4], 0> == 3 &&
    std::extent_v<int[3][4], 1> == 4 &&
    std::extent_v<int[3][4], 2> == 0 &&
    std::extent_v<int[]> == 0
);
 
int main()
{
    const auto ext = std::extent<int['*']>{};
    static_assert(ext == 42); // with implicit conversion to std::size_t
 
    const int ints[]{1, 2, 3, 4};
    static_assert(std::extent_v<decltype(ints)> == 4); // array size
 
    [[maybe_unused]] int ary[][3] = {{1, 2, 3}};
 
    // ary[0] is of type reference to 'int[3]', so, the extent
    // cannot be calculated correctly and it returns 0
    static_assert(std::is_same_v<decltype(ary[0]), int(&)[3]>);
    static_assert(std::extent_v<decltype(ary[0])> == 0);
 
    // removing reference gives correct extent value 3
    static_assert(std::extent_v<std::remove_cvref_t<decltype(ary[0])>> == 3);
}
```

## See also
- [is_array](/cpp/types/is_array/)
- [rank](/cpp/types/rank/)
- [remove_extent](/cpp/types/remove_extent/)
- [remove_all_extents](/cpp/types/remove_all_extents/)
- [extents](/cpp/container/mdspan/extents/)
