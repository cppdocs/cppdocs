---
title: "std::basic_stacktrace<Allocator>::swap"
source_path: "cpp/utility/basic_stacktrace/swap"
category: "utility"
since: "C++23"
---

Exchanges the contents of the container with those of other. Does not invoke any move, copy, or swap operations on individual stacktrace_entry objects.

## Declarations
```cpp
void swap( basic_stacktrace& other ) noexcept(/* see below */);
```
_(since C++23)_

## Parameters
- `other`: basic_stacktrace to exchange the contents with

## Return value
(none)

## Example
This section is incompleteReason: no example

## See also
- [std::swap(std::basic_stacktrace)](/cpp/utility/basic_stacktrace/swap2/)
- [std::swap](/cpp/utility/swap/)
