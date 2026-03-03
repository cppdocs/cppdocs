---
title: "std::counted_iterator<I>::base"
source_path: "cpp/iterator/counted_iterator/base"
category: "iterator"
since: "C++20"
---

Returns the underlying base iterator.

## Declarations
```cpp
constexpr const I& base() const& noexcept;
```
_(since C++20)_

```cpp
constexpr I base() &&;
```
_(since C++20)_

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <type_traits>
#include <vector>
 
int main()
{
    std::vector<int> v{0, 1, 2, 3, 4};
 
    std::reverse_iterator<std::vector<int>::iterator> reverse{v.rbegin()};
 
    std::counted_iterator counted{reverse, 3};
 
    static_assert(std::is_same<
        decltype(counted.base()),
        std::reverse_iterator<std::vector<int>::iterator> const&
    >{});
 
    std::cout << "Print with reverse_iterator: ";
    for (auto r = counted.base(); r != v.rend(); ++r)
        std::cout << *r << ' ';
    std::cout << '\n';
 
    std::cout << "Print with counted_iterator: ";
    for (; counted != std::default_sentinel; ++counted)
        std::cout << counted[0] << ' ';
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3391 | C++20 | the const version of base returns a copy of the underlying iterator | returns a reference |
| LWG 3593 | C++20 | the const version of base returns a reference but might not be noexcept | made noexcept |

## See also
- [operator*operator->](/cpp/iterator/counted_iterator/operator/)
- [count](/cpp/iterator/counted_iterator/count/)
