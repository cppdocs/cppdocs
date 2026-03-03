---
title: "std::stable_partition"
source_path: "cpp/algorithm/stable_partition"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

1) Reorders the elements in the range [first,last) in such a way that all elements for which the predicate p returns true precede the elements for which predicate p returns false. Relative order of the elements is preserved.

## Declarations
```cpp
template< class BidirIt, class UnaryPred >
BidirIt stable_partition( BidirIt first, BidirIt last, UnaryPred p );
```
_(constexpr since C++26)_

```cpp
template< class ExecutionPolicy, class BidirIt, class UnaryPred >
BidirIt stable_partition( ExecutionPolicy&& policy,
BidirIt first, BidirIt last, UnaryPred p );
```
_(since C++17)_

## Parameters
- `first, last`: the range of elements to reorder
- `policy`: the execution policy to use
- `p`: unary predicate which returns true if the element should be ordered before other elements. The expression p(v) must be convertible to bool for every argument v of type (possibly const) VT, where VT is the value type of BidirIt, regardless of value category, and must not modify v. Thus, a parameter type of VT&is not allowed, nor is VT unless for VT a move is equivalent to a copy(since C++11).

## Return value
Iterator to the first element of the second group.

## Notes
This function attempts to allocate a temporary buffer. If the allocation fails, the less efficient algorithm is chosen.

Implementations in [libc++](https://github.com/llvm/llvm-project/blob/eda14ebf6a43d9ada6a2be3d1b06b8b6036eb774/libcxx/include/__algorithm/stable_partition.h#L316) and [libstdc++](https://github.com/gcc-mirror/gcc/blob/d2a499a9881c7c079d2a722b57c7fcf022a864dd/libstdc%2B%2B-v3/include/bits/stl_algo.h#L1608) also accept ranges denoted by [LegacyForwardIterators](/cpp/named_req/forwarditerator/) as an extension.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <vector>
 
int main()
{
    std::vector<int> v{0, 0, 3, -1, 2, 4, 5, 0, 7};
    std::stable_partition(v.begin(), v.end(), [](int n) { return n > 0; });
    for (int n : v)
        std::cout << n << ' ';
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2150 | C++98 | std::stable_partition was only required to place oneelement satisfying p before one element not satisfying p | corrected therequirement |

## See also
- [partition](/cpp/algorithm/partition/)
- [ranges::stable_partition](/cpp/algorithm/ranges/stable_partition/)
