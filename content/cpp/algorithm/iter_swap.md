---
title: "std::iter_swap"
source_path: "cpp/algorithm/iter_swap"
header: "<algorithm>"
category: "algorithm"
---

Swaps the values of the elements the given iterators are pointing to.

## Declarations
```cpp
template< class ForwardIt1, class ForwardIt2 >
void iter_swap( ForwardIt1 a, ForwardIt2 b );
```
_(constexpr since C++20)_

## Parameters
- `a, b`: iterators to the elements to swap

## Return value
(none)

## Notes
This function template models the semantics of the swap operation given by [Swappable](/cpp/named_req/swappable/). That is, overloads of swap found by [ADL](/cpp/language/adl/) and the fall back of [std::swap](/cpp/utility/swap/) are considered.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <random>
#include <string_view>
#include <vector>
 
template<class ForwardIt>
void selection_sort(ForwardIt begin, ForwardIt end)
{
    for (ForwardIt it = begin; it != end; ++it)
        std::iter_swap(it, std::min_element(it, end));
}
 
void println(std::string_view rem, std::vector<int> const& v)
{
    std::cout << rem;
    for (int e : v)
        std::cout << e << ' ';
    std::cout << '\n';
}
 
template<int min, int max>
int rand_int()
{
    static std::uniform_int_distribution dist(min, max);
    static std::mt19937 gen(std::random_device{}());
    return dist(gen);
}
 
int main()
{
    std::vector<int> v;
    std::generate_n(std::back_inserter(v), 20, rand_int<-9, +9>);
 
    std::cout << std::showpos;
    println("Before sort: ", v);
    selection_sort(v.begin(), v.end());
    println("After sort:  ", v);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 187 | C++98 | it was unspecified whether swap is used | the effect is equivalent to swap(*a, *b) |

## See also
- [swap](/cpp/utility/swap/)
- [swap_ranges](/cpp/algorithm/swap_ranges/)
- [iter_swap](/cpp/iterator/reverse_iterator/iter_swap/)
- [iter_swap](/cpp/iterator/move_iterator/iter_swap/)
- [iter_swap](/cpp/iterator/ranges/iter_swap/)
