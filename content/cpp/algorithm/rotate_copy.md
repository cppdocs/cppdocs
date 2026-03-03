---
title: "std::rotate_copy"
source_path: "cpp/algorithm/rotate_copy"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

1) Copies the elements from the range [first,last), to another range beginning at d_first in such a way, that the element *(n_first) becomes the first element of the new range and *(n_first - 1) becomes the last element.

## Declarations
```cpp
template< class ForwardIt, class OutputIt >
OutputIt rotate_copy( ForwardIt first, ForwardIt n_first,
ForwardIt last, OutputIt d_first );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt1, class ForwardIt2 >
ForwardIt2 rotate_copy( ExecutionPolicy&& policy,
ForwardIt1 first, ForwardIt1 n_first,
ForwardIt1 last, ForwardIt2 d_first );
```
_(since C++17)_

## Parameters
- `first, last`: the range of elements to copy
- `n_first`: an iterator to an element in [first, last) that should appear at the beginning of the new range
- `d_first`: beginning of the destination range
- `policy`: the execution policy to use

## Return value
Output iterator to the element past the last element copied.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <vector>
 
int main()
{
    std::vector<int> src{1, 2, 3, 4, 5};
    std::vector<int> dest(src.size());
    auto pivot = std::find(src.begin(), src.end(), 3);
 
    std::rotate_copy(src.begin(), pivot, src.end(), dest.begin());
    for (int i : dest)
        std::cout << i << ' ';
    std::cout << '\n';
 
    // copy the rotation result directly to the std::cout
    pivot = std::find(dest.begin(), dest.end(), 1);
    std::rotate_copy(dest.begin(), pivot, dest.end(),
                     std::ostream_iterator<int>(std::cout, " "));
    std::cout << '\n';
}
```

## See also
- [rotate](/cpp/algorithm/rotate/)
- [ranges::rotate_copy](/cpp/algorithm/ranges/rotate_copy/)
