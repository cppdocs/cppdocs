---
title: "std::flat_map<Key,T,Compare,KeyContainer,MappedContainer>::rbegin, std::flat_map<Key,T,Compare,KeyContainer,MappedContainer>::crbegin"
source_path: "cpp/container/flat_map/rbegin"
category: "container"
since: "C++23"
---

Returns a reverse iterator to the first element of the reversed flat_map. It corresponds to the last element of the non-reversed flat_map. If the flat_map is empty, the returned iterator is equal to rend().

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
The [underlying iterator](/cpp/iterator/reverse_iterator/base/) of the returned reverse iterator is the [end iterator](/cpp/container/flat_map/end/). Hence the returned iterator is invalidated if and when the end iterator is invalidated.

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <string_view>
#include <flat_map>
 
int main()
{
    const std::flat_map<int, std::string_view> coins
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
- [rendcrend](/cpp/container/flat_map/rend/)
- [rbegincrbegin](/cpp/iterator/rbegin/)
