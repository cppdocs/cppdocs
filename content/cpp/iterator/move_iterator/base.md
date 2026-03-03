---
title: "std::move_iterator<Iter>::base"
source_path: "cpp/iterator/move_iterator/base"
category: "iterator"
since: "C++20"
---

Returns the underlying iterator.

## Declarations
```cpp
iterator_type base() const;
```
_(constexpr since C++17) (until C++20)_

```cpp
constexpr const iterator_type& base() const& noexcept;
```
_(since C++20)_

```cpp
constexpr iterator_type base() &&;
```
_(since C++20)_

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <vector>
 
int main()
{
    std::vector<int> v{0, 1, 2, 3, 4};
    std::move_iterator<std::vector<int>::reverse_iterator>
        m1{v.rbegin()},
        m2{v.rend()};
 
    std::copy(m1.base(), m2.base(), std::ostream_iterator<int>(std::cout, " "));
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3391 | C++20 | overload (1) returned a copy of the underlying iterator | returns a reference |
| LWG 3593 | C++20 | overload (1) was not noexcept | made noexcept |

## See also
- [operator*operator->](/cpp/iterator/move_iterator/operator/)
