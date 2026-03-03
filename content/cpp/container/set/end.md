---
title: "std::set<Key,Compare,Allocator>::end, std::set<Key,Compare,Allocator>::cend"
source_path: "cpp/container/set/end"
category: "container"
since: "C++11"
---

Returns an iterator to the element following the last element of the set.

## Declarations
```cpp
iterator end();
```
_(noexcept since C++11)_

```cpp
const_iterator end() const;
```
_(noexcept since C++11)_

```cpp
const_iterator cend() const noexcept;
```
_(since C++11)_

## Return value
Iterator to the element following the last element.

## Notes
Because both iterator and const_iterator are constant iterators (and may in fact be the same type), it is not possible to mutate the elements of the container through an iterator returned by any of these member functions.

libc++ backports cend() to C++98 mode.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <set>
 
int main()
{
    std::set<int> set{3, 1, 4, 1, 5, 9, 2, 6, 5};
    std::for_each(set.cbegin(), set.cend(), [](int x)
    {
        std::cout << x << ' ';
    });
    std::cout << '\n';
}
```

## See also
- [begincbegin](/cpp/container/set/begin/)
- [endcend](/cpp/iterator/end/)
