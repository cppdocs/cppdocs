---
title: "std::basic_stacktrace"
source_path: "cpp/utility/basic_stacktrace"
header: "<stacktrace>"
category: "utility"
since: "C++23"
---

1) The basic_stacktrace class template represents a snapshot of the whole stacktrace or its given part. It satisfies the requirement of [AllocatorAwareContainer](/cpp/named_req/allocatorawarecontainer/), [SequenceContainer](/cpp/named_req/sequencecontainer/), and [ReversibleContainer](/cpp/named_req/reversiblecontainer/), except that only move, assignment, swap, and operations for const-qualified sequence containers are supported, and the semantics of comparison functions are different from those required for a container.

## Declarations
```cpp
template< class Allocator >
class basic_stacktrace;
```
_(since C++23)_

```cpp
using stacktrace =
std::basic_stacktrace<std::allocator<std::stacktrace_entry>>;
```
_(since C++23)_

```cpp
namespace pmr {
using stacktrace =
std::basic_stacktrace<std::pmr::polymorphic_allocator<std::stacktrace_entry>>;
}
```
_(since C++23)_

## Notes
Support for custom allocators is provided for using basic_stacktrace on a hot path or in embedded environments. Users can allocate stacktrace_entry objects on the stack or in some other place, where appropriate.

The sequence of std::stacktrace_entry objects owned by a std::basic_stacktrace is immutable, and either is empty or represents a contiguous interval of the whole stacktrace.

boost::stacktrace::basic_stacktrace (available in [Boost.Stacktrace](https://www.boost.org/doc/libs/release/doc/html/stacktrace.html)) can be used instead when std::basic_stacktrace is not available.

## Example
```cpp
#include <iostream>
#include <stacktrace>
 
int nested_func(int c)
{
    std::cout << std::stacktrace::current() << '\n';
    return c + 1;
}
 
int func(int b)
{
    return nested_func(b + 1);
}
 
int main()
{
    std::cout << func(777);
}
```

## See also
- [stacktrace_entry](/cpp/utility/stacktrace_entry/)
