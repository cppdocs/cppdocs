---
title: "std::multimap<Key,T,Compare,Allocator>::rbegin, std::multimap<Key,T,Compare,Allocator>::crbegin"
source_path: "cpp/container/multimap/rbegin"
category: "container"
since: "C++11"
---

Returns a reverse iterator to the first element of the reversed multimap. It corresponds to the last element of the non-reversed multimap. If the multimap is empty, the returned iterator is equal to [rend()](/cpp/container/multimap/rend/).

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
The [underlying iterator](/cpp/iterator/reverse_iterator/base/) of the returned reverse iterator is the [end iterator](/cpp/container/multimap/end/). Hence the returned iterator is invalidated if and when the end iterator is invalidated.

libc++ backports crbegin() to C++98 mode.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <string>
#include <map>
 
int main()
{
    std::multimap<std::string, int> map
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
- [rendcrend](/cpp/container/multimap/rend/)
- [rbegincrbegin](/cpp/iterator/rbegin/)
