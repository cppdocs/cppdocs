---
title: "std::stacktrace_entry::source_file"
source_path: "cpp/utility/stacktrace_entry/source_file"
category: "utility"
since: "C++23"
---

Returns the presumed or actual name of the source file that lexically contains the expression or statement whose evaluation is represented by *this, or an empty string on failure other than allocation failure, e.g. when *this is empty.

## Declarations
```cpp
std::string source_file() const;
```
_(since C++23)_

## Return value
The name of the source file specified above on success, an empty string on failure other than allocation failure.

## Notes
The presumed name of the source file is what the predefined macro [__FILE__](/cpp/preprocessor/replace/) expands to, and can be changed by the [#line](/cpp/preprocessor/line/) directive.

Custom allocators support for this function is not provided, because the implementations usually require platform specific allocations, system calls and a lot of CPU intensive work, while a custom allocator does not provide benefits for this function as the platform specific operations take an order of magnitude more time than the allocation.

## Example
This section is incompleteReason: no example

## See also
- [file_name](/cpp/utility/source_location/file_name/)
