---
title: "std::ranges::swap_ranges, std::ranges::swap_ranges_result"
source_path: "cpp/algorithm/ranges/swap_ranges"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

1) Exchanges elements between first range [first1,first1 + M) and second range [first2,first2 + M) via [ranges::iter_swap](/cpp/iterator/ranges/iter_swap/)(first1 + i, first2 + i), where M = [ranges::min](/cpp/algorithm/ranges/min/)([ranges::distance](/cpp/iterator/ranges/distance/)(first1, last1), [ranges::distance](/cpp/iterator/ranges/distance/)(first2, last2)).

## Declarations
```cpp
Call signature
```

```cpp
template< std::input_iterator I1, std::sentinel_for<I1> S1,
std::input_iterator I2, std::sentinel_for<I2> S2 >
requires std::indirectly_swappable<I1, I2>
constexpr swap_ranges_result<I1, I2>
swap_ranges( I1 first1, S1 last1, I2 first2, S2 last2 );
```
_(since C++20)_

```cpp
template< ranges::input_range R1, ranges::input_range R2 >
requires std::indirectly_swappable<ranges::iterator_t<R1>, ranges::iterator_t<R2>>
constexpr swap_ranges_result<ranges::borrowed_iterator_t<R1>,
ranges::borrowed_iterator_t<R2>>
swap_ranges( R1&& r1, R2&& r2 );
```
_(since C++20)_

```cpp
Helper types
```

```cpp
template< class I1, class I2 >
using swap_ranges_result = ranges::in_in_result<I1, I2>;
```
_(since C++20)_

## Parameters
- `first1, last1`: the first range of elements to swap
- `first2, last2`: the second range of elements to swap
- `r1`: the first range of elements to swap
- `r2`: the second range of elements to swap.

## Return value
{first1 + M, first2 + M}.

## Notes
Implementations (e.g. [MSVC STL](https://github.com/microsoft/STL/blob/main/stl/src/vector_algorithms.cpp)) may enable vectorization when the iterator type models [contiguous_iterator](/cpp/iterator/contiguous_iterator/) and swapping its value type calls neither non-trivial special member function nor [ADL](/cpp/language/adl/)-found swap.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <list>
#include <string_view>
#include <vector>
 
auto print(std::string_view name, auto const& seq, std::string_view term = "\n")
{
    std::cout << name << " : ";
    for (const auto& elem : seq)
        std::cout << elem << ' ';
    std::cout << term;
}
 
int main()
{
    std::vector<char> p {'A', 'B', 'C', 'D', 'E'};
    std::list<char> q {'1', '2', '3', '4', '5', '6'};
 
    print("p", p);
    print("q", q, "\n\n");
 
    // swap p[0, 2) and q[1, 3):
    std::ranges::swap_ranges(p.begin(),
                             p.begin() + 4,
                             std::ranges::next(q.begin(), 1),
                             std::ranges::next(q.begin(), 3));
    print("p", p);
    print("q", q, "\n\n");
 
    // swap p[0, 5) and q[0, 5):
    std::ranges::swap_ranges(p, q);
 
    print("p", p);
    print("q", q);
}
```

## See also
- [iter_swap](/cpp/iterator/ranges/iter_swap/)
- [ranges::swap](/cpp/utility/ranges/swap/)
- [swap_ranges](/cpp/algorithm/swap_ranges/)
- [iter_swap](/cpp/algorithm/iter_swap/)
- [swap](/cpp/utility/swap/)
