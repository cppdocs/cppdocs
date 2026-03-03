---
title: "std::set<Key,Compare,Allocator>::rbegin, std::set<Key,Compare,Allocator>::crbegin"
source_path: "cpp/container/set/rbegin"
category: "container"
since: "C++11"
---

Returns a reverse iterator to the first element of the reversed set. It corresponds to the last element of the non-reversed set. If the set is empty, the returned iterator is equal to [rend()](/cpp/container/set/rend/).

## Declarations
```cpp
reverse_iterator rbegin();
```
_(noexcept since C++11)_

```cpp
const_reverse_iterator rbegin() const;
```
_(noexcept since C++11)_

```cpp
const_reverse_iterator crbegin() const noexcept;
```
_(since C++11)_

## Return value
Reverse iterator to the first element.

## Notes
Because both iterator and const_iterator are constant iterators (and may in fact be the same type), it is not possible to mutate the elements of the container through an iterator returned by any of these member functions.

The [underlying iterator](/cpp/iterator/reverse_iterator/base/) of the returned reverse iterator is the [end iterator](/cpp/container/set/end/). Hence the returned iterator is invalidated if and when the end iterator is invalidated.

libc++ backports crbegin() to C++98 mode.

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
- [rendcrend](/cpp/container/set/rend/)
- [rbegincrbegin](/cpp/iterator/rbegin/)
