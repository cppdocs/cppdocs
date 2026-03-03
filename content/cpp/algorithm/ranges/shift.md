---
title: "std::ranges::shift_left, std::ranges::shift_right"
source_path: "cpp/algorithm/ranges/shift"
header: "<algorithm>"
category: "algorithm"
since: "C++23"
---

Shifts the elements in the range [first,last) or r by n positions. The behavior is undefined if [first,last) is not a valid range.

## Declarations
```cpp
Call signature
```

```cpp
template< std::permutable I, std::sentinel_for<I> S >
constexpr ranges::subrange<I>
shift_left( I first, S last, std::iter_difference_t<I> n );
```
_(since C++23)_

```cpp
template< ranges::forward_range R >
requires std::permutable<ranges::iterator_t<R>>
constexpr ranges::borrowed_subrange_t<R>
shift_left( R&& r, ranges::range_difference_t<R> n );
```
_(since C++23)_

```cpp
template< std::permutable I, std::sentinel_for<I> S >
constexpr ranges::subrange<I>
shift_right( I first, S last, std::iter_difference_t<I> n );
```
_(since C++23)_

```cpp
template< ranges::forward_range R >
requires std::permutable<ranges::iterator_t<R>>
constexpr ranges::borrowed_subrange_t<R>
shift_right( R&& r, ranges::range_difference_t<R> n );
```
_(since C++23)_

## Parameters
- `first`: the beginning of the original range
- `last`: the end of the original range
- `r`: the range of elements to shift
- `n`: the number of positions to shift

## Notes
ranges::shift_left / ranges::shift_right has better efficiency on common implementations if I models [bidirectional_iterator](/cpp/iterator/bidirectional_iterator/) or (better) [random_access_iterator](/cpp/iterator/random_access_iterator/).

Implementations (e.g. [MSVC STL](https://github.com/microsoft/STL/blob/main/stl/src/vector_algorithms.cpp)) may enable vectorization when the iterator type models [contiguous_iterator](/cpp/iterator/contiguous_iterator/) and swapping its value type calls neither non-trivial special member function nor [ADL](/cpp/language/adl/)-found swap.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <string>
#include <type_traits>
#include <vector>
 
struct S
{
    int value{0};
    bool specified_state{true};
 
    S(int v = 0) : value{v} {}
    S(S const& rhs) = default;
    S(S&& rhs) { *this = std::move(rhs); }
    S& operator=(S const& rhs) = default;
    S& operator=(S&& rhs)
    {
        if (this != &rhs)
        {
            value = rhs.value;
            specified_state = rhs.specified_state;
            rhs.specified_state = false;
        }
        return *this;
    }
};
 
template<typename T>
std::ostream& operator<<(std::ostream& os, std::vector<T> const& v)
{
    for (const auto& s : v)
    {
        if constexpr (std::is_same_v<T, S>)
            s.specified_state ? os << s.value << ' ' : os << ". ";
        else if constexpr (std::is_same_v<T, std::string>)
            os << (s.empty() ? "." : s) << ' ';
        else
            os << s << ' ';
    }
    return os;
}
 
int main()
{
    std::cout << std::left;
 
    std::vector<S> a{1, 2, 3, 4, 5, 6, 7};
    std::vector<int> b{1, 2, 3, 4, 5, 6, 7};
    std::vector<std::string> c{"α", "β", "γ", "δ", "ε", "ζ", "η"};
 
    std::cout << "vector<S> \tvector<int> \tvector<string>\n";
    std::cout << a << "  " << b << "  " << c << '\n';
 
    std::ranges::shift_left(a, 3);
    std::ranges::shift_left(b, 3);
    std::ranges::shift_left(c, 3);
    std::cout << a << "  " << b << "  " << c << '\n';
 
    std::ranges::shift_right(a, 2);
    std::ranges::shift_right(b, 2);
    std::ranges::shift_right(c, 2);
    std::cout << a << "  " << b << "  " << c << '\n';
 
    std::ranges::shift_left(a, 8); // has no effect: n >= last - first
    std::ranges::shift_left(b, 8); // ditto
    std::ranges::shift_left(c, 8); // ditto
    std::cout << a << "  " << b << "  " << c << '\n';
 
//  std::ranges::shift_left(a, -3); // UB
}
```

## See also
- [ranges::move](/cpp/algorithm/ranges/move/)
- [ranges::move_backward](/cpp/algorithm/ranges/move_backward/)
- [ranges::rotate](/cpp/algorithm/ranges/rotate/)
- [shift_leftshift_right](/cpp/algorithm/shift/)
