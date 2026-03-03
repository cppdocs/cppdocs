---
title: "std::unordered_multiset<Key,Hash,KeyEqual,Allocator>::begin, std::unordered_multiset<Key,Hash,KeyEqual,Allocator>::cbegin"
source_path: "cpp/container/unordered_multiset/begin"
category: "container"
since: "C++11"
---

Returns an iterator to the first element of the unordered_multiset.

## Declarations
```cpp
iterator begin() noexcept;
```
_(since C++11)_

```cpp
const_iterator begin() const noexcept;
```
_(since C++11)_

```cpp
const_iterator cbegin() const noexcept;
```
_(since C++11)_

## Return value
Iterator to the first element.

## Notes
Because both iterator and const_iterator are constant iterators (and may in fact be the same type), it is not possible to mutate the elements of the container through an iterator returned by any of these member functions.

## Example
```cpp
#include <iostream>
#include <iterator>
#include <string>
#include <unordered_set>
 
int main()
{
    const std::unordered_multiset<std::string> words =
    {
        "some", "words", "to", "count",
        "count", "these", "words"
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
- [endcend](/cpp/container/unordered_multiset/end/)
- [begincbegin](/cpp/iterator/begin/)
