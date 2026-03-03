---
title: "std::ranges::set_symmetric_difference, std::ranges::set_symmetric_difference_result"
source_path: "cpp/algorithm/ranges/set_symmetric_difference"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

Computes symmetric difference of two sorted ranges: the elements that are found in either of the ranges, but not in both of them are copied to the range beginning at result. The resulting range is also sorted.

## Declarations
```cpp
Call signature
```

```cpp
template< std::input_iterator I1, std::sentinel_for<I1> S1,
std::input_iterator I2, std::sentinel_for<I2> S2,
std::weakly_incrementable O, class Comp = ranges::less,
class Proj1 = std::identity, class Proj2 = std::identity >
requires std::mergeable<I1, I2, O, Comp, Proj1, Proj2>
constexpr set_symmetric_difference_result<I1, I2, O>
set_symmetric_difference( I1 first1, S1 last1, I2 first2, S2 last2,
O result, Comp comp = {},
Proj1 proj1 = {}, Proj2 proj2 = {} );
```
_(since C++20)_

```cpp
template< ranges::input_range R1, ranges::input_range R2,
std::weakly_incrementable O, class Comp = ranges::less,
class Proj1 = std::identity, class Proj2 = std::identity >
requires std::mergeable<ranges::iterator_t<R1>, ranges::iterator_t<R2>,
O, Comp, Proj1, Proj2>
constexpr set_symmetric_difference_result<ranges::borrowed_iterator_t<R1>,
ranges::borrowed_iterator_t<R2>, O>
set_symmetric_difference( R1&& r1, R2&& r2, O result, Comp comp = {},
Proj1 proj1 = {}, Proj2 proj2 = {} );
```
_(since C++20)_

```cpp
Helper types
```

```cpp
template< class I1, class I2, class O >
using set_symmetric_difference_result = ranges::in_in_out_result<I1, I2, O>;
```
_(since C++20)_

## Parameters
- `first1, last1`: iterator-sentinel pair denoting the first input sorted range
- `first2, last2`: iterator-sentinel pair denoting the second input sorted range
- `r1`: the first sorted input range
- `r2`: the second sorted input range
- `result`: the beginning of the output range
- `comp`: comparison to apply to the projected elements
- `proj1`: projection to apply to the elements in the first range
- `proj2`: projection to apply to the elements in the second range

## Return value
{last1, last2, result_last}, where result_last is the end of the constructed range.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <vector>
 
void visualize_this(const auto& v, int min = 1, int max = 9)
{
    for (auto i {min}; i <= max; ++i)
    {
        std::ranges::binary_search(v, i) ? std::cout << i : std::cout << '.';
        std::cout << ' ';
    }
    std::cout << '\n';
}
 
int main()
{
    const auto in1 = {1, 3, 4,    6, 7, 9};
    const auto in2 = {1,    4, 5, 6,    9};
 
    std::vector<int> out {};
 
    std::ranges::set_symmetric_difference(in1, in2, std::back_inserter(out));
 
    visualize_this(in1);
    visualize_this(in2);
    visualize_this(out);
}
```

## See also
- [ranges::set_union](/cpp/algorithm/ranges/set_union/)
- [ranges::set_difference](/cpp/algorithm/ranges/set_difference/)
- [ranges::set_intersection](/cpp/algorithm/ranges/set_intersection/)
- [ranges::includes](/cpp/algorithm/ranges/includes/)
- [set_symmetric_difference](/cpp/algorithm/set_symmetric_difference/)
