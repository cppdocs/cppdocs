---
title: "std::is_bounded_array"
source_path: "cpp/types/is_bounded_array"
header: "<type_traits>"
category: "types"
since: "C++20"
---

std::is_bounded_array is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct is_bounded_array;
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
#include <iostream>
#include <type_traits>
 
#define OUT(...) std::cout << #__VA_ARGS__ << " : " << __VA_ARGS__ << '\n'
 
class A {};
 
int main()
{
    std::cout << std::boolalpha;
    OUT(std::is_bounded_array_v<A>);
    OUT(std::is_bounded_array_v<A[]>);
    OUT(std::is_bounded_array_v<A[3]>);
    OUT(std::is_bounded_array_v<float>);
    OUT(std::is_bounded_array_v<int>);
    OUT(std::is_bounded_array_v<int[]>);
    OUT(std::is_bounded_array_v<int[3]>);
}
```

## See also
- [is_array](/cpp/types/is_array/)
- [is_unbounded_array](/cpp/types/is_unbounded_array/)
- [extent](/cpp/types/extent/)
