---
title: "std::map<Key,T,Compare,Allocator>::rbegin, std::map<Key,T,Compare,Allocator>::crbegin"
source_path: "cpp/container/map/rbegin"
category: "container"
since: "C++11"
---

Returns a reverse iterator to the first element of the reversed map. It corresponds to the last element of the non-reversed map. If the map is empty, the returned iterator is equal to [rend()](/cpp/container/map/rend/).

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
The [underlying iterator](/cpp/iterator/reverse_iterator/base/) of the returned reverse iterator is the [end iterator](/cpp/container/map/end/). Hence the returned iterator is invalidated if and when the end iterator is invalidated.

libc++ backports crbegin() to C++98 mode.

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <string_view>
#include <map>
 
int main()
{
    const std::map<int, std::string_view> coins
    {
        {10, "dime"},
        {100, "dollar"},
        {50, "half dollar"},
        {5, "nickel"},
        {1, "penny"},
        {25, "quarter"}
    }; // initializer entries in name alphabetical order
 
    std::cout << "US coins in circulation, largest to smallest denomination:\n";
    for (auto it = coins.crbegin(); it != coins.crend(); ++it)
        std::cout << std::setw(11) << it->second << " = ¢" << it->first << '\n';
}
```

## See also
- [rendcrend](/cpp/container/map/rend/)
- [rbegincrbegin](/cpp/iterator/rbegin/)
