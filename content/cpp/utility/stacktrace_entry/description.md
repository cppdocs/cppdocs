---
title: "std::stacktrace_entry::description"
source_path: "cpp/utility/stacktrace_entry/description"
category: "utility"
since: "C++23"
---

Returns a description of the evaluation represented by *this on success, or an empty string on failure other than allocation failure, e.g. when *this is empty.

## Declarations
```cpp
std::string description() const;
```
_(since C++23)_

## Return value
A description of the represented evaluation on success, an empty string on failure other than allocation failure.

## Notes
Custom allocators support for this function is not provided, because the implementations usually require platform specific allocations, system calls and a lot of CPU intensive work, while a custom allocator does not provide benefits for this function as the platform specific operations take an order of magnitude more time than the allocation.

## Example
This section is incompleteReason: no example
