---
title: "std::multiset<Key,Compare,Allocator>::end, std::multiset<Key,Compare,Allocator>::cend"
source_path: "cpp/container/multiset/end"
category: "container"
since: "C++11"
---

Returns an iterator to the element following the last element of the multiset.

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
#include <iostream>
#include <iterator>
#include <set>
#include <string>
 
int main()
{
    const std::multiset<std::string> words =
    {
        "some", "not", "sorted", "words",
        "will", "come", "out", "sorted",
    };
 
    for (auto it = words.begin(); it != words.end(); )
    {
        auto count = words.count(*it);
        std::cout << *it << ":\t" << count << '\n';
        std::advance(it, count); // all count elements have equivalent keys
    }
}
```

## See also
- [begincbegin](/cpp/container/multiset/begin/)
- [endcend](/cpp/iterator/end/)
