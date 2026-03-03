---
title: "std::flat_map<Key,T,Compare,KeyContainer,MappedContainer>::rend, std::flat_map<Key,T,Compare,KeyContainer,MappedContainer>::crend"
source_path: "cpp/container/flat_map/rend"
category: "container"
since: "C++23"
---

Returns a reverse iterator to the element following the last element of the reversed flat_map. It corresponds to the element preceding the first element of the non-reversed flat_map. This element acts as a placeholder, attempting to access it results in undefined behavior.

## Declarations
```cpp
reverse_iterator rend() noexcept;
```
_(since C++23)_

```cpp
const_reverse_iterator rend() const noexcept;
```
_(since C++23)_

```cpp
const_reverse_iterator crend() const noexcept;
```
_(since C++23)_

## Return value
Reverse iterator to the element following the last element.

## Example
```cpp
#include <chrono>
#include <iomanip>
#include <iostream>
#include <string_view>
#include <flat_map>
 
using namespace std::chrono;
 
int main()
{
    const std::flat_map<year_month_day, int> messages
    {
        {February/17/2023, 10},
        {February/17/2023, 20},
        {February/16/2022, 30},
        {October/22/2022, 40},
        {June/14/2022, 50},
        {November/23/2021, 60},
        {December/10/2022, 55},
        {December/12/2021, 45},
        {April/1/2020, 42},
        {April/1/2020, 24}
    };
 
    std::cout << "Messages received (date order is reversed):\n";
    for (auto it = messages.crbegin(); it != messages.crend(); ++it)
        std::cout << it->first << " : " << it->second << '\n';
}
```

## See also
- [rbegincrbegin](/cpp/container/flat_map/rbegin/)
- [rendcrend](/cpp/iterator/rend/)
