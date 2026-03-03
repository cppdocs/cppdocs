---
title: "std::multimap<Key,T,Compare,Allocator>::begin, std::multimap<Key,T,Compare,Allocator>::cbegin"
source_path: "cpp/container/multimap/begin"
category: "container"
since: "C++11"
---

Returns an iterator to the first element of the multimap.

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
libc++ backports cbegin() to C++98 mode.

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
- [endcend](/cpp/container/multimap/end/)
- [begincbegin](/cpp/iterator/begin/)
