---
title: "std::ranges::fill_n"
source_path: "cpp/algorithm/ranges/fill_n"
header: "<algorithm>"
category: "algorithm"
since: "C++26"
---

Assigns the given value to all elements in the range [first,first + n).

## Declarations
```cpp
Call signature
```

```cpp
template< class T, std::output_iterator<const T&> O >
constexpr O fill_n( O first, std::iter_difference_t<O> n, const T& value );
```
_(since C++20) (until C++26)_

```cpp
template< class O, class T = std::iter_value_t<O> >
requires std::output_iterator<O, const T&>
constexpr O fill_n( O first, std::iter_difference_t<O> n, const T& value );
```
_(since C++26)_

## Parameters
- `first`: the beginning of the range of elements to modify
- `n`: number of elements to modify
- `value`: the value to be assigned

## Return value
An output iterator that compares equal to first + n.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_algorithm_default_value_type
202403
(C++26)
List-initialization for algorithms

## Example
```cpp
#include <algorithm>
#include <complex>
#include <iostream>
#include <string>
#include <vector>
 
void println(const auto& v)
{
    for (const auto& elem : v)
        std::cout << ' ' << elem;
    std::cout << '\n';
}
 
int main()
{
    constexpr auto n{8};
 
    std::vector<std::string> v(n, "▓▓░░");
    println(v);
 
    std::ranges::fill_n(v.begin(), n, "░░▓▓");
    println(v);
 
    std::vector<std::complex<double>> nums{{1, 3}, {2, 2}, {4, 8}};
    println(nums);
    #ifdef __cpp_lib_algorithm_default_value_type
        std::ranges::fill_n(nums.begin(), 2, {4, 2});
    #else
        std::ranges::fill_n(nums.begin(), 2, std::complex<double>{4, 2});
    #endif
    println(nums);
}
```

## See also
- [ranges::fill](/cpp/algorithm/ranges/fill/)
- [ranges::copy_n](/cpp/algorithm/ranges/copy_n/)
- [ranges::generate](/cpp/algorithm/ranges/generate/)
- [ranges::transform](/cpp/algorithm/ranges/transform/)
- [ranges::generate_random](/cpp/algorithm/ranges/generate_random/)
- [fill_n](/cpp/algorithm/fill_n/)
