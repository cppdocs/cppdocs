---
title: "std::reverse"
source_path: "cpp/algorithm/reverse"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

1) Reverses the order of the elements in the range [first,last).

## Declarations
```cpp
template< class BidirIt >
void reverse( BidirIt first, BidirIt last );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class BidirIt >
void reverse( ExecutionPolicy&& policy, BidirIt first, BidirIt last );
```
_(since C++17)_

## Parameters
- `first, last`: the range of elements to reverse
- `policy`: the execution policy to use

## Notes
Implementations (e.g. [MSVC STL](https://github.com/microsoft/STL/blob/main/stl/src/vector_algorithms.cpp)) may enable vectorization when the iterator type satisfies [LegacyContiguousIterator](/cpp/named_req/contiguousiterator/) and swapping its value type calls neither non-trivial special member function nor [ADL](/cpp/language/adl/)-found swap.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <vector>
 
void println(auto rem, auto const& v)
{
    for (std::cout << rem; auto e : v)
        std::cout << e << ' ';
    std::cout << '\n';
}
 
int main()
{
    std::vector<int> v {1, 2, 3};
    std::reverse(v.begin(), v.end());
    println("after reverse, v = ", v);
 
    int a[] = {4, 5, 6, 7};
    std::reverse(std::begin(a), std::end(a));
    println("after reverse, a = ", a);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 223 | C++98 | std::swap was applied to each pair of iterators | applies std::iter_swap instead |
| LWG 2039 | C++98 | std::iter_swap was also applied when iequals std::distance(first, last) / 2 | not applied |

## See also
- [reverse_copy](/cpp/algorithm/reverse_copy/)
- [ranges::reverse](/cpp/algorithm/ranges/reverse/)
