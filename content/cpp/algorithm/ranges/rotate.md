---
title: "std::ranges::rotate"
source_path: "cpp/algorithm/ranges/rotate"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

1) Performs a left rotation on a range of elements. Specifically, ranges::rotate swaps the elements in the range [first,last) in such a way that the element *middle becomes the first element of the new range and *(middle - 1) becomes the last element.

## Declarations
```cpp
Call signature
```

```cpp
template< std::permutable I, std::sentinel_for<I> S >
constexpr ranges::subrange<I>
rotate( I first, I middle, S last );
```
_(since C++20)_

```cpp
template< ranges::forward_range R >
requires std::permutable<ranges::iterator_t<R>>
constexpr ranges::borrowed_subrange_t<R>
rotate( R&& r, ranges::iterator_t<R> middle );
```
_(since C++20)_

## Parameters
- `first, last`: the range of elements to rotate
- `r`: the range of elements to rotate
- `middle`: the iterator to the element that should appear at the beginning of the rotated range

## Return value
{new_first, last}, where new_first compares equal to [ranges::next](/cpp/iterator/ranges/next/)(first, [ranges::distance](/cpp/iterator/ranges/distance/)(middle, last)) and designates a new location of the element pointed by first.

## Notes
ranges::rotate has better efficiency on common implementations if I models [bidirectional_iterator](/cpp/iterator/bidirectional_iterator/) or (better) [random_access_iterator](/cpp/iterator/random_access_iterator/).

Implementations (e.g. [MSVC STL](https://github.com/microsoft/STL/blob/main/stl/src/vector_algorithms.cpp)) may enable vectorization when the iterator type models [contiguous_iterator](/cpp/iterator/contiguous_iterator/) and swapping its value type calls neither non-trivial special member function nor [ADL](/cpp/language/adl/)-found swap.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <numeric>
#include <string>
#include <vector>
 
int main()
{
    std::string s(16, ' ');
 
    for (int k {}; k != 5; ++k)
    {
        std::iota(s.begin(), s.end(), 'A');
        std::ranges::rotate(s, s.begin() + k);
        std::cout << "Rotate left (" << k << "): " << s << '\n';
    }
    std::cout << '\n';
 
    for (int k {}; k != 5; ++k)
    {
        std::iota(s.begin(), s.end(), 'A');
        std::ranges::rotate(s, s.end() - k);
        std::cout << "Rotate right (" << k << "): " << s << '\n';
    }
 
    std::cout << "\nInsertion sort using `rotate`, step-by-step:\n";
 
    s = {'2', '4', '2', '0', '5', '9', '7', '3', '7', '1'};
 
    for (auto i = s.begin(); i != s.end(); ++i)
    {
        std::cout << "i = " << std::ranges::distance(s.begin(), i) << ": ";
        std::ranges::rotate(std::ranges::upper_bound(s.begin(), i, *i), i, i + 1);
        std::cout << s << '\n';
    }
    std::cout << (std::ranges::is_sorted(s) ? "Sorted!" : "Not sorted.") << '\n';
}
```

## See also
- [ranges::rotate_copy](/cpp/algorithm/ranges/rotate_copy/)
- [ranges::reverse](/cpp/algorithm/ranges/reverse/)
- [rotate](/cpp/algorithm/rotate/)
