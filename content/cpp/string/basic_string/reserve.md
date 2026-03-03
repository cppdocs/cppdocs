---
title: "std::basic_string<CharT,Traits,Allocator>::reserve"
source_path: "cpp/string/basic_string/reserve"
category: "string"
since: "C++20"
---

1) Informs a std::basic_string object of a planned change in size, so that it can manage the storage allocation appropriately.
If new_cap is greater than the current [capacity()](/cpp/string/basic_string/capacity/), new storage is allocated, and [capacity()](/cpp/string/basic_string/capacity/) is made equal or greater than new_cap.
If new_cap is less than the current [capacity()](/cpp/string/basic_string/capacity/), this is a non-binding shrink request.If new_cap is less than the current [size()](/cpp/string/basic_string/size/), this is a non-binding shrink-to-fit requestequivalent to [shrink_to_fit()](/cpp/string/basic_string/shrink_to_fit/)(since C++11).
(until C++20)
If new_cap is less than or equal to the current [capacity()](/cpp/string/basic_string/capacity/), there is no effect.
(since C++20)

## Declarations
```cpp
void reserve( size_type new_cap = 0 );
```
_(until C++20)_

```cpp
constexpr void reserve( size_type new_cap );
```
_(since C++20)_

```cpp
void reserve();
```
_(since C++20) (deprecated in C++20) (removed in C++26)_

## Parameters
- `new_cap`: new capacity of the string

## Return value
(none)

## Example
```cpp
#include <cassert>
#include <iostream>
#include <string>
 
int main()
{
    std::string s;
    std::cout << "1) Initially: " << s.capacity() << '\n';
 
    const std::string::size_type new_cap{101u};
    s.reserve(new_cap);
    assert(s.capacity() >= new_cap);
    std::cout << "2) After reserve(" << new_cap << "): " << s.capacity() << '\n';
 
    // observing the capacity growth factor
    auto cap{s.capacity()};
    for (int check{}; check != 4; ++check)
    {
        while (cap == s.capacity())
            s += '$';
        cap = s.capacity();
        std::cout << (3) + check << ") Capacity: " << cap << '\n';
    }
 
//  s.reserve(); // deprecated/removed in C++20/26, use:
    s.shrink_to_fit();
    std::cout << "7) After shrink_to_fit: " << s.capacity() << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 847 | C++98 | there was no exception safety guarantee | added strong exception safety guarantee |

## See also
- [capacity](/cpp/string/basic_string/capacity/)
- [resize](/cpp/string/basic_string/resize/)
