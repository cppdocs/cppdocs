---
title: "std::unordered_multimap<Key,T,Hash,KeyEqual,Allocator>::begin, std::unordered_multimap<Key,T,Hash,KeyEqual,Allocator>::cbegin"
source_path: "cpp/container/unordered_multimap/begin"
category: "container"
since: "C++11"
---

Returns an iterator to the first element of the unordered_multimap.

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

## Example
```cpp
#include <algorithm>
#include <cassert>
#include <iostream>
#include <string>
#include <utility>
#include <unordered_map>
 
int main()
{
    auto show_node = [](const std::pair<std::string, std::string>& node)
    {
        std::cout << node.first << " : " << node.second << '\n';
    };
 
    std::unordered_multimap<std::string, std::string> lemmas;
    assert(lemmas.begin() == lemmas.end());
    assert(lemmas.cbegin() == lemmas.cend());
 
    lemmas.insert({ "1. ∀x ∈ N ∃y ∈ N", "x ≤ y" });
    show_node(*lemmas.cbegin());
    assert(lemmas.begin() != lemmas.end());
    assert(lemmas.cbegin() != lemmas.cend());
 
    lemmas.begin()->second = "x < y";
    show_node(*lemmas.cbegin());
 
    lemmas.insert({ "2. ∀x, y ∈ N    ", "x = y V x ≠ y" });
    show_node(*lemmas.cbegin());
 
    lemmas.insert({ "3. ∀x ∈ N ∃y ∈ N", "y = x + 1" });
    show_node(*lemmas.cbegin());
 
    std::cout << "Lemmas: \n";
    std::for_each(lemmas.cbegin(), lemmas.cend(), [&](const auto& n)
    {
        show_node(n);
    });
    std::cout << '\n';
}
```

## See also
- [endcend](/cpp/container/unordered_multimap/end/)
- [begincbegin](/cpp/iterator/begin/)
