---
title: "std::is_array"
source_path: "cpp/types/is_array"
header: "<type_traits>"
category: "types"
since: "C++11"
---

std::is_array is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct is_array;
```
_(since C++11)_

## Example
```cpp
#include <array>
#include <type_traits>
 
class A {};
static_assert(std::is_array<A>::value == false);
static_assert(std::is_array<A[]>::value == true);
static_assert(std::is_array<A[3]>::value == true);
 
static_assert(std::is_array<float>::value == false);
static_assert(std::is_array<int>::value == false);
static_assert(std::is_array<int[]>::value == true);
static_assert(std::is_array<int[3]>::value == true);
static_assert(std::is_array<std::array<int, 3>>::value == false);
 
int main() {}
```

## See also
- [is_bounded_array](/cpp/types/is_bounded_array/)
- [is_unbounded_array](/cpp/types/is_unbounded_array/)
- [rank](/cpp/types/rank/)
- [extent](/cpp/types/extent/)
- [remove_extent](/cpp/types/remove_extent/)
- [remove_all_extents](/cpp/types/remove_all_extents/)
