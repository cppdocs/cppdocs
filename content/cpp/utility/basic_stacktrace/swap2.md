---
title: "std::swap(std::basic_stacktrace)"
source_path: "cpp/utility/basic_stacktrace/swap2"
header: "<stacktrace>"
category: "utility"
since: "C++23"
---

Specializes the [std::swap](/cpp/utility/swap/) algorithm for std::basic_stacktrace. Swaps the contents of lhs and rhs. Equivalent to lhs.swap(rhs);.

## Declarations
```cpp
template< class Allocator >
void swap( std::basic_stacktrace<Allocator>& lhs, std::basic_stacktrace<Allocator>& rhs )
noexcept(noexcept(lhs.swap(rhs)));
```
_(since C++23)_

## Parameters
- `lhs, rhs`: stacktraces whose contents to swap

## Return value
(none)

## Example
This section is incompleteReason: no example

## See also
- [swap](/cpp/utility/basic_stacktrace/swap/)
