---
title: "std::is_unbounded_array"
source_path: "cpp/types/is_unbounded_array"
header: "<type_traits>"
category: "types"
since: "C++20"
---

std::is_unbounded_array is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct is_unbounded_array;
```
_(since C++20)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_bounded_array_traits
201902L
(C++20)
std::is_bounded_array, std::is_unbounded_array

## Example
```cpp
#include <type_traits>
 
class A {};
 
static_assert
(""
    && std::is_unbounded_array_v<A> == false
    && std::is_unbounded_array_v<A[]> == true
    && std::is_unbounded_array_v<A[3]> == false
    && std::is_unbounded_array_v<float> == false
    && std::is_unbounded_array_v<int> == false
    && std::is_unbounded_array_v<int[]> == true
    && std::is_unbounded_array_v<int[3]> == false
);
 
int main() {}
```

## See also
- [is_array](/cpp/types/is_array/)
- [is_bounded_array](/cpp/types/is_bounded_array/)
- [extent](/cpp/types/extent/)
