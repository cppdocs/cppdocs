---
title: "std::ranges::reverse"
source_path: "cpp/algorithm/ranges/reverse"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

1) Reverses the order of the elements in the range [first,last).

## Declarations
```cpp
Call signature
```

```cpp
template< std::bidirectional_iterator I, std::sentinel_for<I> S >
requires std::permutable<I>
constexpr I
reverse( I first, S last );
```
_(since C++20)_

```cpp
template< ranges::bidirectional_range R >
requires std::permutable<ranges::iterator_t<R>>
constexpr ranges::borrowed_iterator_t<R>
reverse( R&& r );
```
_(since C++20)_

## Parameters
- `first, last`: the range of elements to reverse
- `r`: the range of elements to reverse

## Return value
An iterator equal to last.

## Notes
Implementations (e.g. [MSVC STL](https://github.com/microsoft/STL/blob/main/stl/src/vector_algorithms.cpp)) may enable vectorization when the iterator type models [contiguous_iterator](/cpp/iterator/contiguous_iterator/) and swapping its value type calls neither non-trivial special member function nor [ADL](/cpp/language/adl/)-found swap.

## Example
```cpp
#include <algorithm>
#include <array>
#include <iostream>
#include <string>
 
int main()
{
    std::string s {"ABCDEF"};
    std::cout << s << " → ";
    std::ranges::reverse(s.begin(), s.end());
    std::cout << s << " → ";
    std::ranges::reverse(s);
    std::cout << s << " │ ";
 
    std::array a {1, 2, 3, 4, 5};
    for (auto e : a)
        std::cout << e << ' ';
    std::cout << "→ ";
    std::ranges::reverse(a);
    for (auto e : a)
        std::cout << e << ' ';
    std::cout << '\n';
}
```

## See also
- [ranges::reverse_copy](/cpp/algorithm/ranges/reverse_copy/)
- [ranges::reverse_viewviews::reverse](/cpp/ranges/reverse_view/)
- [view](/cpp/ranges/view/)
- [reverse](/cpp/algorithm/reverse/)
