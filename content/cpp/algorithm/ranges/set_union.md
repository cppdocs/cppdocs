---
title: "std::ranges::set_union, std::ranges::set_union_result"
source_path: "cpp/algorithm/ranges/set_union"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

Constructs a sorted union beginning at result consisting of the set of elements present in one or both sorted input ranges [first1,last1) and [first2,last2).

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
constexpr set_union_result<I1, I2, O>
set_union( I1 first1, S1 last1, I2 first2, S2 last2,
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
constexpr set_union_result<ranges::borrowed_iterator_t<R1>,
ranges::borrowed_iterator_t<R2>, O>
set_union( R1&& r1, R2&& r2, O result, Comp comp = {},
Proj1 proj1 = {}, Proj2 proj2 = {} );
```
_(since C++20)_

```cpp
Helper types
```

```cpp
template< class I1, class I2, class O >
using set_union_result = ranges::in_in_out_result<I1, I2, O>;
```
_(since C++20)_

## Parameters
- `first1, last1`: iterator-sentinel pair denoting the first input sorted range
- `first2, last2`: iterator-sentinel pair denoting the second input sorted range
- `r1`: the first input sorted range
- `r2`: the second input sorted range
- `result`: the beginning of the output range
- `comp`: comparison to apply to the projected elements
- `proj1`: projection to apply to the elements in the first range
- `proj2`: projection to apply to the elements in the second range

## Return value
{last1, last2, result_last}, where result_last is the end of the constructed range.

## Notes
This algorithm performs a similar task as [ranges::merge](/cpp/algorithm/ranges/merge/) does. Both consume two sorted input ranges and produce a sorted output with elements from both inputs. The difference between these two algorithms is with handling values from both input ranges which compare equivalent (see notes on [LessThanComparable](/cpp/named_req/lessthancomparable/)). If any equivalent values appeared n times in the first range and m times in the second, [ranges::merge](/cpp/algorithm/ranges/merge/) would output all n+m occurrences whereas ranges::set_union would output [std::max](/cpp/algorithm/max/)(n, m) ones only. So [ranges::merge](/cpp/algorithm/ranges/merge/) outputs exactly \(\scriptsize (N_1+N_2)\)(N1+N2) values and ranges::set_union may produce less.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <vector>
 
void print(const auto& in1, const auto& in2, auto first, auto last)
{
    std::cout << "{ ";
    for (const auto& e : in1)
        std::cout << e << ' ';
    std::cout << "} ∪ { ";
    for (const auto& e : in2)
        std::cout << e << ' ';
    std::cout << "} =\n{ ";
    while (!(first == last))
        std::cout << *first++ << ' ';
    std::cout << "}\n\n";
}
 
int main()
{
    std::vector<int> in1, in2, out;
 
    in1 = {1, 2, 3, 4, 5};
    in2 = {      3, 4, 5, 6, 7};
    out.resize(in1.size() + in2.size());
    const auto ret = std::ranges::set_union(in1, in2, out.begin());
    print(in1, in2, out.begin(), ret.out);
 
    in1 = {1, 2, 3, 4, 5, 5, 5};
    in2 = {      3, 4, 5, 6, 7};
    out.clear();
    out.reserve(in1.size() + in2.size());
    std::ranges::set_union(in1, in2, std::back_inserter(out));
    print(in1, in2, out.cbegin(), out.cend());
}
```

## See also
- [ranges::set_difference](/cpp/algorithm/ranges/set_difference/)
- [ranges::set_intersection](/cpp/algorithm/ranges/set_intersection/)
- [ranges::set_symmetric_difference](/cpp/algorithm/ranges/set_symmetric_difference/)
- [ranges::merge](/cpp/algorithm/ranges/merge/)
- [ranges::includes](/cpp/algorithm/ranges/includes/)
- [set_union](/cpp/algorithm/set_union/)
