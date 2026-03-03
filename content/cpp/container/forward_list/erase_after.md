---
title: "std::forward_list<T,Allocator>::erase_after"
source_path: "cpp/container/forward_list/erase_after"
category: "container"
since: "C++11"
---

Removes specified elements from the container.

## Declarations
```cpp
iterator erase_after( const_iterator pos );
```
_(since C++11)_

```cpp
iterator erase_after( const_iterator first, const_iterator last );
```
_(since C++11)_

## Parameters
- `pos`: iterator to the element preceding the element to remove
- `first, last`: range of elements to remove

## Example
```cpp
#include <forward_list>
#include <iostream>
#include <iterator>
 
int main()
{
    std::forward_list<int> l = {1, 2, 3, 4, 5, 6, 7, 8, 9};
 
//  l.erase(l.begin()); // Error: no function erase()
 
    l.erase_after(l.before_begin()); // Removes first element
 
    for (auto n : l)
        std::cout << n << ' ';
    std::cout << '\n';
 
    auto fi = std::next(l.begin());
    auto la = std::next(fi, 3);
 
    l.erase_after(fi, la);
 
    for (auto n : l)
        std::cout << n << ' ';
    std::cout << '\n';
}
```

## See also
- [clear](/cpp/container/forward_list/clear/)
