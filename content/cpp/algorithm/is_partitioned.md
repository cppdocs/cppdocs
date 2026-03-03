---
title: "std::is_partitioned"
source_path: "cpp/algorithm/is_partitioned"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

1) Checks whether [first,last) is partitioned by the predicate p: all elements satisfy p appear before all elements that do not.

## Declarations
```cpp
template< class InputIt, class UnaryPred >
bool is_partitioned( InputIt first, InputIt last, UnaryPred p );
```
_(since C++11) (constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class ForwardIt, class UnaryPred >
bool is_partitioned( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last, UnaryPred p );
```
_(since C++17)_

## Parameters
- `first, last`: the range of elements to check
- `policy`: the execution policy to use
- `p`: unary predicate which returns true for the elements expected to be found in the beginning of the range. The expression p(v) must be convertible to bool for every argument v of type (possibly const) VT, where VT is the value type of InputIt, regardless of value category, and must not modify v. Thus, a parameter type of VT&is not allowed, nor is VT unless for VT a move is equivalent to a copy(since C++11).

## Return value
true if the elements e of [first,last) are [partitioned](/cpp/algorithm/#Requirements) with respect to the expression p(e). false otherwise.

## Example
```cpp
#include <algorithm>
#include <array>
#include <iostream>
 
int main()
{
    std::array<int, 9> v {1, 2, 3, 4, 5, 6, 7, 8, 9};
 
    auto is_even = [](int i) { return i % 2 == 0; };
    std::cout.setf(std::ios_base::boolalpha);
    std::cout << std::is_partitioned(v.begin(), v.end(), is_even) << ' ';
 
    std::partition(v.begin(), v.end(), is_even);
    std::cout << std::is_partitioned(v.begin(), v.end(), is_even) << ' ';
 
    std::reverse(v.begin(), v.end());
    std::cout << std::is_partitioned(v.cbegin(), v.cend(), is_even) << ' ';
    std::cout << std::is_partitioned(v.crbegin(), v.crend(), is_even) << '\n';
}
```

## See also
- [partition](/cpp/algorithm/partition/)
- [partition_point](/cpp/algorithm/partition_point/)
- [ranges::is_partitioned](/cpp/algorithm/ranges/is_partitioned/)
