---
title: "std::ranges::fill"
source_path: "cpp/algorithm/ranges/fill"
header: "<algorithm>"
category: "algorithm"
since: "C++26"
---

1) Assigns the given value to the elements in the range [first,last).

## Declarations
```cpp
Call signature
```

```cpp
template< class T, std::output_iterator<const T&> O, std::sentinel_for<O> S >
constexpr O fill( O first, S last, const T& value );
```
_(since C++20) (until C++26)_

```cpp
template< class O, std::sentinel_for<O> S, class T = std::iter_value_t<O> >
requires std::output_iterator<O, const T&>
constexpr O fill( O first, S last, const T& value );
```
_(since C++26)_

```cpp
template< class T, ranges::output_range<const T&> R >
constexpr ranges::borrowed_iterator_t<R> fill( R&& r, const T& value );
```
_(since C++20) (until C++26)_

```cpp
template< class R, class T = ranges::range_value_t<R> >
requires ranges::output_range<R, const T&>
constexpr ranges::borrowed_iterator_t<R> fill( R&& r, const T& value );
```
_(since C++26)_

## Parameters
- `first, last`: the range of elements to modify
- `r`: the range of elements to modify
- `value`: the value to be assigned

## Return value
An output iterator that compares equal to last.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_algorithm_default_value_type
202403
(C++26)
List-initialization for algorithms (1,2)

## Example
```cpp
#include <algorithm>
#include <complex>
#include <iostream>
#include <vector>
 
void println(const auto& seq)
{
    for (const auto& e : seq)
        std::cout << e << ' ';
    std::cout << '\n';
}
 
int main()
{
    std::vector<int> v{0, 1, 2, 3, 4, 5};
 
    // set all elements to -1 using overload (1)
    std::ranges::fill(v.begin(), v.end(), -1);
    println(v);
 
    // set all element to 10 using overload (2)
    std::ranges::fill(v, 10);
    println(v);
 
    std::vector<std::complex<double>> nums{{1, 3}, {2, 2}, {4, 8}};
    println(nums);
    #ifdef __cpp_lib_algorithm_default_value_type
        std::ranges::fill(nums, {4, 2}); // T gets deduced
    #else
        std::ranges::fill(nums, std::complex<double>{4, 2});
    #endif
    println(nums);
}
```

## See also
- [ranges::fill_n](/cpp/algorithm/ranges/fill_n/)
- [ranges::copyranges::copy_if](/cpp/algorithm/ranges/copy/)
- [ranges::generate](/cpp/algorithm/ranges/generate/)
- [ranges::transform](/cpp/algorithm/ranges/transform/)
- [ranges::generate_random](/cpp/algorithm/ranges/generate_random/)
- [fill](/cpp/algorithm/fill/)
