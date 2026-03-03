---
title: "std::ranges::is_partitioned"
source_path: "cpp/algorithm/ranges/is_partitioned"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

1) Returns true if all elements in the range [first,last) that satisfy the predicate pred after projection appear before all elements that don't. Also returns true if [first,last) is empty.

## Declarations
```cpp
Call signature
```

```cpp
template< std::input_iterator I, std::sentinel_for<I> S,
class Proj = std::identity,
std::indirect_unary_predicate<std::projected<I, Proj>> Pred >
constexpr bool
is_partitioned( I first, S last, Pred pred, Proj proj = {} );
```
_(since C++20)_

```cpp
template< ranges::input_range R, class Proj = std::identity,
std::indirect_unary_predicate<
std::projected<ranges::iterator_t<R>, Proj>> Pred >
constexpr bool
is_partitioned( R&& r, Pred pred, Proj proj = {} );
```
_(since C++20)_

## Parameters
- `first, last`: iterator-sentinel pair denoting the range of elements to examine
- `r`: the range of elements to examine
- `pred`: predicate to apply to the projected elements
- `proj`: projection to apply to the elements

## Return value
true if the range [first,last) is empty or is partitioned by pred, false otherwise.

## Example
```cpp
#include <algorithm>
#include <array>
#include <iostream>
#include <numeric>
#include <utility>
 
int main()
{
    std::array<int, 9> v;
 
    auto print = [&v](bool o)
    {
        for (int x : v)
            std::cout << x << ' ';
        std::cout << (o ? "=> " : "=> not ") << "partitioned\n";
    };
 
    auto is_even = [](int i) { return i % 2 == 0; };
 
    std::iota(v.begin(), v.end(), 1); // or std::ranges::iota(v, 1);
    print(std::ranges::is_partitioned(v, is_even));
 
    std::ranges::partition(v, is_even);
    print(std::ranges::is_partitioned(std::as_const(v), is_even));
 
    std::ranges::reverse(v);
    print(std::ranges::is_partitioned(v.cbegin(), v.cend(), is_even));
    print(std::ranges::is_partitioned(v.crbegin(), v.crend(), is_even));
}
```

## See also
- [ranges::partition](/cpp/algorithm/ranges/partition/)
- [ranges::partition_point](/cpp/algorithm/ranges/partition_point/)
- [is_partitioned](/cpp/algorithm/is_partitioned/)
