---
title: "std::distance"
source_path: "cpp/iterator/distance"
header: "<iterator>"
category: "iterator"
---

Returns the number of hops from first to last.

## Declarations
```cpp
template< class InputIt >
typename std::iterator_traits<InputIt>::difference_type
distance( InputIt first, InputIt last );
```
_(constexpr since C++17)_

## Parameters
- `first`: iterator pointing to the first element
- `last`: iterator pointing to the end of the range

## Return value
The number of increments needed to go from first to last.

## Example
```cpp
#include <iostream>
#include <iterator>
#include <vector>
 
int main() 
{
    std::vector<int> v{3, 1, 4};
    std::cout << "distance(first, last) = "
              << std::distance(v.begin(), v.end()) << '\n'
              << "distance(last, first) = "
              << std::distance(v.end(), v.begin()) << '\n';
              // the behavior is undefined (until LWG940)
 
    static constexpr auto il = {3, 1, 4};
    // Since C++17 `distance` can be used in constexpr context.
    static_assert(std::distance(il.begin(), il.end()) == 3);
    static_assert(std::distance(il.end(), il.begin()) == -3);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 940 | C++98 | the wording was unclear for the case where first is reachable from last | made clear |

## See also
- [advance](/cpp/iterator/advance/)
- [countcount_if](/cpp/algorithm/count/)
- [ranges::distance](/cpp/iterator/ranges/distance/)
