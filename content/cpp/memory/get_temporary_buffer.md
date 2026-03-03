---
title: "std::get_temporary_buffer"
source_path: "cpp/memory/get_temporary_buffer"
header: "<memory>"
category: "memory"
---

If count is negative or zero, does nothing.

## Declarations
```cpp
template< class T >
std::pair<T*, std::ptrdiff_t>
get_temporary_buffer( std::ptrdiff_t count );
```
_(until C++11)_

```cpp
template< class T >
std::pair<T*, std::ptrdiff_t>
get_temporary_buffer( std::ptrdiff_t count ) noexcept;
```
_(since C++11) (deprecated in C++17) (removed in C++20)_

## Parameters
- `count`: the desired number of objects

## Return value
A [std::pair](/cpp/utility/pair/), the member first is a pointer to the beginning of the allocated storage and the member second is the number of objects that fit in the storage that was actually allocated.

## Notes
This API was originally designed with the intent of providing a more efficient implementation than the general-purpose [operator new](/cpp/memory/new/operator_new/), but no such implementation was created and the API was deprecated and removed.

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
| LWG 425 | C++98 | the behavior when count <= 0 was unclear | made clear |
| LWG 2072 | C++98 | it was not allowed to allocate insufficient memory | allowed |

## See also
- [return_temporary_buffer](/cpp/memory/return_temporary_buffer/)
- [allocate_at_least](/cpp/memory/allocator_traits/allocate_at_least/)
