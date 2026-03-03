---
title: "std::multimap<Key,T,Compare,Allocator>::end, std::multimap<Key,T,Compare,Allocator>::cend"
source_path: "cpp/container/multimap/end"
category: "container"
since: "C++11"
---

Returns an iterator to the element following the last element of the multimap.

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
libc++ backports cend() to C++98 mode.

## Example
```cpp
#include <algorithm>
#include <cassert>
#include <cstddef>
#include <iostream>
#include <map>
#include <string>
 
int main()
{
    auto show_node = [](const auto& node, char ending = '\n')
    {
        std::cout << "{ " << node.first << ", " << node.second << " }" << ending;
    };
 
    std::multimap<std::size_t, std::string> mmap;
    assert(mmap.begin() == mmap.end());   // OK
    assert(mmap.cbegin() == mmap.cend()); // OK
 
    mmap.insert({ sizeof(long), "LONG" });
    show_node(*(mmap.cbegin()));
    assert(mmap.begin() != mmap.end());   // OK
    assert(mmap.cbegin() != mmap.cend()); // OK
    mmap.begin()->second = "long";
    show_node(*(mmap.cbegin()));
 
    mmap.insert({ sizeof(int), "int" });
    show_node(*mmap.cbegin());
 
    mmap.insert({ sizeof(short), "short" });
    show_node(*mmap.cbegin());
 
    mmap.insert({ sizeof(char), "char" });
    show_node(*mmap.cbegin());
 
    mmap.insert({{ sizeof(float), "float" }, { sizeof(double), "double"}});
 
    std::cout << "mmap = { ";
    std::for_each(mmap.cbegin(), mmap.cend(), [&](const auto& n) { show_node(n, ' '); });
    std::cout << "};\n";
}
```

## See also
- [begincbegin](/cpp/container/multimap/begin/)
- [endcend](/cpp/iterator/end/)
