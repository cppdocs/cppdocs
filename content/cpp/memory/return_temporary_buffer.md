---
title: "std::return_temporary_buffer"
source_path: "cpp/memory/return_temporary_buffer"
header: "<memory>"
category: "memory"
---

Deallocates the storage referenced by p.

## Declarations
```cpp
template< class T >
void return_temporary_buffer( T* p );
```
_(deprecated in C++17) (removed in C++20)_

## Parameters
- `p`: the pointer referring to the storage to be declloated

## Return value
(none)

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <memory>
#include <string>
 
int main()
{
    const std::string s[] = {"string", "1", "test", "..."};
    const auto p = std::get_temporary_buffer<std::string>(4);
    // requires that p.first is passed to return_temporary_buffer
    // (beware of early exit points and exceptions), or better use:
    std::unique_ptr<std::string, void(*)(std::string*)> on_exit(p.first,
    [](std::string* p)
    {
        std::cout << "returning temporary buffer...\n";
        std::return_temporary_buffer(p);
    });
 
    std::copy(s, s + p.second,
              std::raw_storage_iterator<std::string*, std::string>(p.first));
    // has same effect as: std::uninitialized_copy(s, s + p.second, p.first);
    // requires that each string in p is individually destroyed
    // (beware of early exit points and exceptions)
 
    std::copy(p.first, p.first + p.second,
              std::ostream_iterator<std::string>{std::cout, "\n"});
 
    std::for_each(p.first, p.first + p.second, [](std::string& e)
    {
        e.~basic_string<char>();
    }); // same as: std::destroy(p.first, p.first + p.second);
 
    // manually reclaim memory if unique_ptr-like technique is not used:
    // std::return_temporary_buffer(p.first);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2072 | C++98 | the storage allocated by std::get_temporary_buffercould be deallocated multiple times | the behavior isundefined in this case |

## See also
- [get_temporary_buffer](/cpp/memory/get_temporary_buffer/)
