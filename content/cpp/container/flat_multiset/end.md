---
title: "std::flat_multiset<Key,Compare,KeyContainer>::end, std::flat_multiset<Key,Compare,KeyContainer>::cend"
source_path: "cpp/container/flat_multiset/end"
category: "container"
since: "C++23"
---

Returns an iterator to the element following the last element of the flat_multiset.

## Declarations
```cpp
iterator end() noexcept;
```
_(since C++23)_

```cpp
const_iterator end() const noexcept;
```
_(since C++23)_

```cpp
const_iterator cend() const noexcept;
```
_(since C++23)_

## Return value
Iterator to the element following the last element.

## Notes
Because both iterator and const_iterator are constant iterators (and may in fact be the same type), it is not possible to mutate the elements of the container through an iterator returned by any of these member functions.

## Example
```cpp
#include <algorithm>
#include <flat_set>
#include <iostream>
 
int main()
{
    std::flat_multiset<int> set{3, 1, 4, 1, 5, 9, 2, 6, 5};
    std::for_each(set.cbegin(), set.cend(), [](int x)
    {
        std::cout << x << ' ';
    });
    std::cout << '\n';
}
```

## See also
- [begincbegin](/cpp/container/flat_multiset/begin/)
- [endcend](/cpp/iterator/end/)
