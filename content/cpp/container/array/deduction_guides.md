---
title: "deduction guides for std::array"
source_path: "cpp/container/array/deduction_guides"
header: "<array>"
category: "container"
since: "C++17"
---

One [deduction guide](/cpp/language/ctad/) is provided for [std::array](/cpp/container/array/) to provide an equivalent of [std::experimental::make_array](/cpp/experimental/make_array/) for construction of std::array from a [variadic parameter pack](/cpp/language/parameter_pack/).

## Declarations
```cpp
template< class T, class... U >
array( T, U... ) -> array<T, 1 + sizeof...(U)>;
```
_(since C++17)_

## Example
```cpp
#include <algorithm>
#include <array>
#include <cassert>
#include <type_traits>
 
int main()
{
    const int x = 10;
    std::array a{1, 2, 3, 5, x}; // OK, creates std::array<int, 5>
    assert(a.back() == x);
 
//  std::array b{1, 2u}; // Error, all arguments must have the same type
 
//  std::array<short> c{3, 2, 1}; // Error, wrong number of template args
    std::array c{std::to_array<short>({3, 2, 1})}; // C++20 facility
    assert(std::ranges::equal(c, std::array{3, 2, 1}));
    static_assert(std::is_same_v<short, decltype(c)::value_type>);
}
```
