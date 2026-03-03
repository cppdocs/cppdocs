---
title: "std::ranges::partial_sort_copy, std::ranges::partial_sort_copy_result"
source_path: "cpp/algorithm/ranges/partial_sort_copy"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

Copies the first N elements from the source range [first,last), as if it was partially sorted with respect to comp and proj1, into the destination range [result_first,result_first + N), where \(\scriptsize N = \min{(L_1, L_2)}\)N = min(L₁, L₂), \(\scriptsize L_1\)L₁ is equal to [ranges::distance](/cpp/iterator/ranges/distance/)(first, last), and \(\scriptsize L_2\)L₂ is equal to [ranges::distance](/cpp/iterator/ranges/distance/)(result_first, result_last).

## Declarations
```cpp
Call signature
```

```cpp
template< std::input_iterator I1, std::sentinel_for<I1> S1,
std::random_access_iterator I2, std::sentinel_for<I2> S2,
class Comp = ranges::less, class Proj1 = std::identity,
class Proj2 = std::identity >
requires std::indirectly_copyable<I1, I2> &&
std::sortable<I2, Comp, Proj2> &&
std::indirect_strict_weak_order<Comp, std::projected<I1, Proj1>,
std::projected<I2, Proj2>>
constexpr partial_sort_copy_result<I1, I2>
partial_sort_copy( I1 first, S1 last, I2 result_first, S2 result_last,
Comp comp = {}, Proj1 proj1 = {}, Proj2 proj2 = {} );
```
_(since C++20)_

```cpp
template< ranges::input_range R1, ranges::random_access_range R2,
class Comp = ranges::less, class Proj1 = std::identity,
class Proj2 = std::identity >
requires std::indirectly_copyable<ranges::iterator_t<R1>, ranges::iterator_t<R2>> &&
std::sortable<ranges::iterator_t<R2>, Comp, Proj2> &&
std::indirect_strict_weak_order<Comp, std::projected<ranges::iterator_t<R1>,
Proj1>, std::projected<ranges::iterator_t<R2>, Proj2>>
constexpr partial_sort_copy_result<ranges::borrowed_iterator_t<R1>,
ranges::borrowed_iterator_t<R2>>
partial_sort_copy( R1&& r, R2&& result_r,
Comp comp = {}, Proj1 proj1 = {}, Proj2 proj2 = {} );
```
_(since C++20)_

```cpp
Helper types
```

```cpp
template< class I, class O >
using partial_sort_copy_result = ranges::in_out_result<I, O>;
```
_(since C++20)_

## Parameters
- `first, last`: iterator-sentinel defining the source range to copy from
- `r`: the source range to copy from
- `result_first, result_last`: iterator-sentinel defining the destination range
- `result_r`: the destination range
- `comp`: comparison to apply to the projected elements
- `proj1`: projection to apply to the elements of source range
- `proj2`: projection to apply to the elements of destination range

## Return value
An object equal to {last, result_first + N}.

## Example
```cpp
#include <algorithm>
#include <forward_list>
#include <functional>
#include <iostream>
#include <ranges>
#include <string_view>
#include <vector>
 
void print(std::string_view rem, std::ranges::input_range auto const& v)
{
    for (std::cout << rem; const auto& e : v)
        std::cout << e << ' ';
    std::cout << '\n';
}
 
int main()
{
    const std::forward_list source{4, 2, 5, 1, 3};
 
    print("Write to the smaller vector in ascending order: ", "");
 
    std::vector dest1{10, 11, 12};
    print("const source list: ", source);
    print("destination range: ", dest1);
    std::ranges::partial_sort_copy(source, dest1);
    print("partial_sort_copy: ", dest1);
 
    print("Write to the larger vector in descending order:", "");
 
    std::vector dest2{10, 11, 12, 13, 14, 15, 16};
    print("const source list: ", source);
    print("destination range: ", dest2);
    std::ranges::partial_sort_copy(source, dest2, std::greater{});
    print("partial_sort_copy: ", dest2);
}
```

## See also
- [ranges::partial_sort](/cpp/algorithm/ranges/partial_sort/)
- [ranges::sort](/cpp/algorithm/ranges/sort/)
- [ranges::stable_sort](/cpp/algorithm/ranges/stable_sort/)
- [ranges::sort_heap](/cpp/algorithm/ranges/sort_heap/)
- [ranges::make_heap](/cpp/algorithm/ranges/make_heap/)
- [ranges::push_heap](/cpp/algorithm/ranges/push_heap/)
- [ranges::pop_heap](/cpp/algorithm/ranges/pop_heap/)
- [partial_sort_copy](/cpp/algorithm/partial_sort_copy/)
