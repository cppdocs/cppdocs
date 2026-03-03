---
title: "std::ranges::advance"
source_path: "cpp/iterator/ranges/advance"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

1) Increments given iterator i for n times.

## Declarations
```cpp
Call signature
```

```cpp
template< std::input_or_output_iterator I >
constexpr void advance( I& i, std::iter_difference_t<I> n );
```
_(since C++20)_

```cpp
template< std::input_or_output_iterator I, std::sentinel_for<I> S >
constexpr void advance( I& i, S bound );
```
_(since C++20)_

```cpp
template< std::input_or_output_iterator I, std::sentinel_for<I> S >
constexpr std::iter_difference_t<I> advance( I& i, std::iter_difference_t<I> n, S bound );
```
_(since C++20)_

## Parameters
- `i`: iterator to be advanced
- `bound`: sentinel denoting the end of the range i is an iterator to
- `n`: number of maximal increments of i

## Notes
The behavior is undefined if the specified sequence of increments or decrements would require that a non-incrementable iterator (such as the past-the-end iterator) is incremented, or that a non-decrementable iterator (such as the front iterator or the singular iterator) is decremented.

## Example
```cpp
#include <iostream>
#include <iterator>
#include <vector>
 
int main()
{
    std::vector<int> v {3, 1, 4};
 
    auto vi = v.begin();
 
    std::ranges::advance(vi, 2);
    std::cout << "1) value: " << *vi << '\n' << std::boolalpha;
 
    std::ranges::advance(vi, v.end());
    std::cout << "2) vi == v.end(): " << (vi == v.end()) << '\n';
 
    std::ranges::advance(vi, -3);
    std::cout << "3) value: " << *vi << '\n';
 
    std::cout << "4) diff: " << std::ranges::advance(vi, 2, v.end())
              << ", value: " << *vi << '\n';
 
    std::cout << "5) diff: " << std::ranges::advance(vi, 4, v.end())
              << ", vi == v.end(): " << (vi == v.end()) << '\n';
}
```

## See also
- [ranges::next](/cpp/iterator/ranges/next/)
- [ranges::prev](/cpp/iterator/ranges/prev/)
- [ranges::distance](/cpp/iterator/ranges/distance/)
- [advance](/cpp/iterator/advance/)
