---
title: "std::ranges::set_intersection, std::ranges::set_intersection_result"
source_path: "cpp/algorithm/ranges/set_intersection"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

Constructs a sorted range beginning at result consisting of elements that are found in both sorted input ranges [first1,last1) and [first2,last2). If some element is found m times in [first1,last1) and n times in [first2,last2), the first min(m, n) elements will be copied from the first range to result. The order of equivalent elements is preserved.

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
constexpr set_intersection_result<I1, I2, O>
set_intersection( I1 first1, S1 last1, I2 first2, S2 last2,
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
constexpr set_intersection_result<ranges::borrowed_iterator_t<R1>,
ranges::borrowed_iterator_t<R2>, O>
set_intersection( R1&& r1, R2&& r2, O result, Comp comp = {},
Proj1 proj1 = {}, Proj2 proj2 = {} );
```
_(since C++20)_

```cpp
Helper types
```

```cpp
template< class I1, class I2, class O >
using set_intersection_result = ranges::in_in_out_result<I1, I2, O>;
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
 
void print(const auto& v, const auto& rem)
{
    std::cout << "{ ";
    for (const auto& e : v)
        std::cout << e << ' ';
    std::cout << '}' << rem;
}
 
int main()
{
    const auto in1 = {1, 2, 2, 3, 4, 5, 6};
    const auto in2 = {2, 2, 3, 3, 5, 7};
    std::vector<int> out {};
 
    std::ranges::set_intersection(in1, in2, std::back_inserter(out));
 
    print(in1, " ∩ "), print(in2, " = "), print(out, "\n");
}
```

## See also
- [ranges::set_union](/cpp/algorithm/ranges/set_union/)
- [ranges::set_difference](/cpp/algorithm/ranges/set_difference/)
- [ranges::set_symmetric_difference](/cpp/algorithm/ranges/set_symmetric_difference/)
- [ranges::includes](/cpp/algorithm/ranges/includes/)
- [set_intersection](/cpp/algorithm/set_intersection/)
