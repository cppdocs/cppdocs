---
title: "std::flat_multiset<Key,Compare,KeyContainer>::begin, std::flat_multiset<Key,Compare,KeyContainer>::cbegin"
source_path: "cpp/container/flat_multiset/begin"
category: "container"
since: "C++23"
---

Returns an iterator to the first element of the flat_multiset.

## Declarations
```cpp
iterator begin() noexcept;
```
_(since C++23)_

```cpp
const_iterator begin() const noexcept;
```
_(since C++23)_

```cpp
const_iterator cbegin() const noexcept;
```
_(since C++23)_

## Return value
Iterator to the first element.

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
- [endcend](/cpp/container/flat_multiset/end/)
- [begincbegin](/cpp/iterator/begin/)
