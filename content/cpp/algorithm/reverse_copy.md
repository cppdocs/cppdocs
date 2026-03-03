---
title: "std::reverse_copy"
source_path: "cpp/algorithm/reverse_copy"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

1) Given \(\scriptsize N\)N as [std::distance](/cpp/iterator/distance/)(first, last). Copies the elements from the range [first,last) (source range) to another range of \(\scriptsize N\)N elements beginning at d_first (destination range) in such a way that the elements in the destination range are in reverse order.

## Declarations
```cpp
template< class BidirIt, class OutputIt >
OutputIt reverse_copy( BidirIt first, BidirIt last,
OutputIt d_first );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class BidirIt, class ForwardIt >
ForwardIt reverse_copy( ExecutionPolicy&& policy,
BidirIt first, BidirIt last,
ForwardIt d_first );
```
_(since C++17)_

## Parameters
- `first, last`: the range of elements to copy
- `d_first`: the beginning of the destination range

## Return value
Output iterator to the element past the last element copied.

## Notes
Implementations (e.g. [MSVC STL](https://github.com/microsoft/STL/blob/main/stl/src/vector_algorithms.cpp)) may enable vectorization when the both iterator types satisfy [LegacyContiguousIterator](/cpp/named_req/contiguousiterator/) and have the same value type, and the value type is [TriviallyCopyable](/cpp/named_req/triviallycopyable/).

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <vector>
 
int main()
{
    auto print = [](const std::vector<int>& v)
    {
        for (const auto& value : v)
            std::cout << value << ' ';
        std::cout << '\n';
    };
 
    std::vector<int> v{1, 2, 3};
    print(v);
 
    std::vector<int> destination(3);
    std::reverse_copy(std::begin(v), std::end(v), std::begin(destination));
    print(destination);
 
    std::reverse_copy(std::rbegin(v), std::rend(v), std::begin(destination));
    print(destination);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2074 | C++98 | for each i, the assignment was*(d_first + N - i) = *(first + i)[1] | corrected to*(d_first + N - 1 - i) = *(first + i)[1] |
| LWG 2150 | C++98 | only one element was required to be assigned | corrected the requirement |

## See also
- [reverse](/cpp/algorithm/reverse/)
- [ranges::reverse_copy](/cpp/algorithm/ranges/reverse_copy/)
