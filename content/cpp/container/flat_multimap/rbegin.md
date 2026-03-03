---
title: "std::flat_multimap<Key,T,Compare,KeyContainer,MappedContainer>::rbegin, std::flat_multimap<Key,T,Compare,KeyContainer,MappedContainer>::crbegin"
source_path: "cpp/container/flat_multimap/rbegin"
category: "container"
since: "C++23"
---

Returns a reverse iterator to the first element of the reversed flat_multimap. It corresponds to the last element of the non-reversed flat_multimap. If the flat_multimap is empty, the returned iterator is equal to rend().

## Declarations
```cpp
reverse_iterator rbegin() noexcept;
```
_(since C++23)_

```cpp
const_reverse_iterator rbegin() const noexcept;
```
_(since C++23)_

```cpp
const_reverse_iterator crbegin() const noexcept;
```
_(since C++23)_

## Return value
Reverse iterator to the first element.

## Notes
The [underlying iterator](/cpp/iterator/reverse_iterator/base/) of the returned reverse iterator is the [end iterator](/cpp/container/flat_multimap/end/). Hence the returned iterator is invalidated if and when the end iterator is invalidated.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <string>
#include <flat_map>
 
int main()
{
    std::flat_multimap<std::string, int> map
    {
        {"█", 1},
        {"▒", 5},
        {"░", 3},
        {"▓", 7},
        {"▓", 8},
        {"░", 4},
        {"▒", 6},
        {"█", 2}
    };
 
    std::cout << "Print out in reverse order using const reverse iterators:\n";
    std::for_each(map.crbegin(), map.crend(),
        [](std::pair<const std::string, int> const& e)
        {
            std::cout << "{ \"" << e.first << "\", " << e.second << " };\n";
        });
 
    map.rbegin()->second = 42; // OK: non-const value is modifiable
//  map.crbegin()->second = 42; // Error: cannot modify the const value
}
```

## See also
- [rendcrend](/cpp/container/flat_multimap/rend/)
- [rbegincrbegin](/cpp/iterator/rbegin/)
