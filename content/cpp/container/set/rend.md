---
title: "std::set<Key,Compare,Allocator>::rend, std::set<Key,Compare,Allocator>::crend"
source_path: "cpp/container/set/rend"
category: "container"
since: "C++11"
---

Returns a reverse iterator to the element following the last element of the reversed set. It corresponds to the element preceding the first element of the non-reversed set. This element acts as a placeholder, attempting to access it results in undefined behavior.

## Declarations
```cpp
reverse_iterator rend();
```
_(noexcept since C++11)_

```cpp
const_reverse_iterator rend() const;
```
_(noexcept since C++11)_

```cpp
const_reverse_iterator crend() const noexcept;
```
_(since C++11)_

## Return value
Reverse iterator to the element following the last element.

## Notes
Because both iterator and const_iterator are constant iterators (and may in fact be the same type), it is not possible to mutate the elements of the container through an iterator returned by any of these member functions.

libc++ backports crend() to C++98 mode.

## Example
```cpp
#include <iostream>
#include <set>
 
int main()
{
    std::set<unsigned> rep{1, 2, 3, 4, 1, 2, 3, 4};
 
    for (auto it = rep.crbegin(); it != rep.crend(); ++it)
    {
        for (auto n = *it; n > 0; --n)
            std::cout << "⏼" << ' ';
        std::cout << '\n';
    }
}
```

## See also
- [rbegincrbegin](/cpp/container/set/rbegin/)
- [rendcrend](/cpp/iterator/rend/)
