---
title: "std::set<Key,Compare,Allocator>::begin, std::set<Key,Compare,Allocator>::cbegin"
source_path: "cpp/container/set/begin"
category: "container"
since: "C++11"
---

Returns an iterator to the first element of the set.

## Declarations
```cpp
iterator begin();
```
_(noexcept since C++11)_

```cpp
const_iterator begin() const;
```
_(noexcept since C++11)_

```cpp
const_iterator cbegin() const noexcept;
```
_(since C++11)_

## Return value
Iterator to the first element.

## Notes
Because both iterator and const_iterator are constant iterators (and may in fact be the same type), it is not possible to mutate the elements of the container through an iterator returned by any of these member functions.

libc++ backports cbegin() to C++98 mode.

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
- [endcend](/cpp/container/set/end/)
- [begincbegin](/cpp/iterator/begin/)
