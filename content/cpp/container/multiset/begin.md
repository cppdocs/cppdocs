---
title: "std::multiset<Key,Compare,Allocator>::begin, std::multiset<Key,Compare,Allocator>::cbegin"
source_path: "cpp/container/multiset/begin"
category: "container"
since: "C++11"
---

Returns an iterator to the first element of the multiset.

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
- [endcend](/cpp/container/multiset/end/)
- [begincbegin](/cpp/iterator/begin/)
