---
title: "std::experimental::make_array"
source_path: "cpp/experimental/make_array"
header: "<experimental/array>"
category: "experimental"
---

Creates a [std::array](/cpp/container/array/) whose size is equal to the number of arguments and whose elements are initialized from the corresponding arguments. Returns [std::array](/cpp/container/array/)<VT, sizeof...(Types)>{[std::forward](/cpp/utility/forward/)<Types>(t)...}.

## Declarations
```cpp
template< class D = void, class... Types >
constexpr std::array<VT /* see below */, sizeof...(Types)> make_array( Types&&... t );
```
_(library fundamentals TS v2)_

## Notes
make_array is removed in Library Fundamentals TS v3 because the [deduction guide](/cpp/container/array/deduction_guides/) for std::array and [std::to_array](/cpp/container/array/to_array/) have been already in C++20.

## Example
```cpp
#include <experimental/array>
#include <iostream>
#include <type_traits>
 
int main()
{
    auto arr = std::experimental::make_array(1, 2, 3, 4, 5);
    bool is_array_of_5_ints = std::is_same<decltype(arr), std::array<int, 5>>::value;
    std::cout << "Returns an array of five ints? ";
    std::cout << std::boolalpha << is_array_of_5_ints << '\n';
}
```

## See also
- [C++ documentation](/cpp/container/array/deduction_guides/)
- [to_array](/cpp/experimental/to_array/)
- [std::array](/cpp/container/array/)
