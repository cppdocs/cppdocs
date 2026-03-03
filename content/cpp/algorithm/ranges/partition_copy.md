---
title: "std::ranges::partition_copy, std::ranges::partition_copy_result"
source_path: "cpp/algorithm/ranges/partition_copy"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

1) Copies the elements from the input range [first,last) to two different output ranges depending on the value returned by the predicate pred. The elements that satisfy the predicate pred after projection by proj are copied to the range beginning at out_true. The rest of the elements are copied to the range beginning at out_false. The behavior is undefined if the input range overlaps either of the output ranges.

## Declarations
```cpp
Call signature
```

```cpp
template< std::input_iterator I, std::sentinel_for<I> S,
std::weakly_incrementable O1, std::weakly_incrementable O2,
class Proj = std::identity,
std::indirect_unary_predicate<std::projected<I, Proj>> Pred >
requires std::indirectly_copyable<I, O1> &&
std::indirectly_copyable<I, O2>
constexpr partition_copy_result<I, O1, O2>
partition_copy( I first, S last, O1 out_true, O2 out_false,
Pred pred, Proj proj = {} );
```
_(since C++20)_

```cpp
template< ranges::input_range R,
std::weakly_incrementable O1, std::weakly_incrementable O2,
class Proj = std::identity,
std::indirect_unary_predicate<std::projected<iterator_t<R>, Proj>> Pred >
requires std::indirectly_copyable<ranges::iterator_t<R>, O1> &&
std::indirectly_copyable<ranges::iterator_t<R>, O2>
constexpr partition_copy_result<ranges::borrowed_iterator_t<R>, O1, O2>
partition_copy( R&& r, O1 out_true, O2 out_false,
Pred pred, Proj proj = {} );
```
_(since C++20)_

```cpp
Helper types
```

```cpp
template< class I, class O1, class O2 >
using partition_copy_result = ranges::in_out_out_result<I, O1, O2>;
```
_(since C++20)_

## Parameters
- `first, last`: the input range of elements to copy from
- `r`: the input range of elements to copy from
- `out_true`: the beginning of the output range for the elements that satisfy pred
- `out_false`: the beginning of the output range for the elements that do not satisfy pred
- `pred`: predicate to apply to the projected elements
- `proj`: projection to apply to the elements

## Return value
{last, o1, o2}, where o1 and o2 are the ends of the output ranges respectively, after the copying is complete.

## Example
```cpp
#include <algorithm>
#include <cctype>
#include <iostream>
#include <iterator>
#include <vector>
 
int main()
{
    const auto in = {'N', '3', 'U', 'M', '1', 'B', '4', 'E', '1', '5', 'R', '9'};
 
    std::vector<int> o1(size(in)), o2(size(in));
 
    auto pred = [](char c) { return std::isalpha(c); };
 
    auto ret = std::ranges::partition_copy(in, o1.begin(), o2.begin(), pred);
 
    std::ostream_iterator<char> cout {std::cout, " "};
    std::cout << "in = ";
    std::ranges::copy(in, cout);
    std::cout << "\no1 = ";
    std::copy(o1.begin(), ret.out1, cout);
    std::cout << "\no2 = ";
    std::copy(o2.begin(), ret.out2, cout);
    std::cout << '\n';
}
```

## See also
- [ranges::partition](/cpp/algorithm/ranges/partition/)
- [ranges::stable_partition](/cpp/algorithm/ranges/stable_partition/)
- [ranges::copyranges::copy_if](/cpp/algorithm/ranges/copy/)
- [ranges::remove_copyranges::remove_copy_if](/cpp/algorithm/ranges/remove_copy/)
- [partition_copy](/cpp/algorithm/partition_copy/)
