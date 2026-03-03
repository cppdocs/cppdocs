---
title: "std::copy_backward"
source_path: "cpp/algorithm/copy_backward"
header: "<algorithm>"
category: "algorithm"
---

Copies the elements from the range [first,last) to another range ending at d_last. The elements are copied in reverse order (the last element is copied first), but their relative order is preserved.

## Declarations
```cpp
template< class BidirIt1, class BidirIt2 >
BidirIt2 copy_backward( BidirIt1 first, BidirIt1 last, BidirIt2 d_last );
```
_(constexpr since C++20)_

## Parameters
- `first, last`: the range of the elements to copy from
- `d_last`: the end of the destination range

## Return value
Iterator to the last element copied.

## Notes
When copying overlapping ranges, [std::copy](/cpp/algorithm/copy/) is appropriate when copying to the left (beginning of the destination range is outside the source range) while std::copy_backward is appropriate when copying to the right (end of the destination range is outside the source range).

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <numeric>
#include <vector>
 
int main()
{
    std::vector<int> source(4);
    std::iota(source.begin(), source.end(), 1); // fills with 1, 2, 3, 4
 
    std::vector<int> destination(6);
 
    std::copy_backward(source.begin(), source.end(), destination.end());
 
    std::cout << "destination contains: ";
    for (auto i: destination)
        std::cout << i << ' ';
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 1206 | C++98 | 1. the behavior was well-defined if d_last == last2. the behavior was undefined if d_last == first | 1. made undefined2. made well-defined |

## See also
- [copycopy_if](/cpp/algorithm/copy/)
- [ranges::copy_backward](/cpp/algorithm/ranges/copy_backward/)
