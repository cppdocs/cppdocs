---
title: "std::rotate"
source_path: "cpp/algorithm/rotate"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

1) Performs a left rotation on a range of elements.

## Declarations
```cpp
template< class ForwardIt >
ForwardIt rotate( ForwardIt first, ForwardIt middle, ForwardIt last );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class ForwardIt >
ForwardIt rotate( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt middle, ForwardIt last );
```
_(since C++17)_

## Parameters
- `first`: the beginning of the original range
- `middle`: the element that should appear at the beginning of the rotated range
- `last`: the end of the original range
- `policy`: the execution policy to use

## Return value
The iterator to the element originally referenced by *first, i.e. the [std::distance](/cpp/iterator/distance/)(middle, last)th next iterator of first.

## Notes
std::rotate has better efficiency on common implementations if ForwardIt satisfies [LegacyBidirectionalIterator](/cpp/named_req/bidirectionaliterator/) or (better) [LegacyRandomAccessIterator](/cpp/named_req/randomaccessiterator/).

Implementations (e.g. [MSVC STL](https://github.com/microsoft/STL/blob/main/stl/src/vector_algorithms.cpp)) may enable vectorization when the iterator type satisfies [LegacyContiguousIterator](/cpp/named_req/contiguousiterator/) and swapping its value type calls neither non-trivial special member function nor [ADL](/cpp/language/adl/)-found swap.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <vector>
 
auto print = [](const auto remark, const auto& v)
{
    std::cout << remark;
    for (auto n : v)
        std::cout << n << ' ';
    std::cout << '\n';
};
 
int main()
{
    std::vector<int> v{2, 4, 2, 0, 5, 10, 7, 3, 7, 1};
    print("before sort:\t\t", v);
 
    // insertion sort
    for (auto i = v.begin(); i != v.end(); ++i)
        std::rotate(std::upper_bound(v.begin(), i, *i), i, i + 1);
    print("after sort:\t\t", v);
 
    // simple rotation to the left
    std::rotate(v.begin(), v.begin() + 1, v.end());
    print("simple rotate left:\t", v);
 
    // simple rotation to the right
    std::rotate(v.rbegin(), v.rbegin() + 1, v.rend());
    print("simple rotate right:\t", v);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 488 | C++98 | the new location of the element pointed by first was not returned | returned |

## See also
- [rotate_copy](/cpp/algorithm/rotate_copy/)
- [ranges::rotate](/cpp/algorithm/ranges/rotate/)
