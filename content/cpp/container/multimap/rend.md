---
title: "std::multimap<Key,T,Compare,Allocator>::rend, std::multimap<Key,T,Compare,Allocator>::crend"
source_path: "cpp/container/multimap/rend"
category: "container"
since: "C++11"
---

Returns a reverse iterator to the element following the last element of the reversed multimap. It corresponds to the element preceding the first element of the non-reversed multimap. This element acts as a placeholder, attempting to access it results in undefined behavior.

## Declarations
```cpp
reverse_iterator rend();
```
_(noexcept since C++11)_

```cpp
const_reverse_iterator rend() const;
```
_(noexcept since C++11)_

```cpp
const_reverse_iterator crend() const noexcept;
```
_(since C++11)_

## Return value
Reverse iterator to the element following the last element.

## Notes
libc++ backports crend() to C++98 mode.

## Example
```cpp
#include <chrono>
#include <iomanip>
#include <iostream>
#include <string_view>
#include <map>
 
using namespace std::chrono;
 
int main()
{
    const std::multimap<year_month_day, int> messages
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
- [rbegincrbegin](/cpp/container/multimap/rbegin/)
- [rendcrend](/cpp/iterator/rend/)
