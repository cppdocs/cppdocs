---
title: "std::stacktrace_entry::source_line"
source_path: "cpp/utility/stacktrace_entry/source_line"
category: "utility"
since: "C++23"
---

Returns a 1-based line number that lexically relates to the evaluation represented by *this, or 0 on failure other than allocation failure, e.g. when *this is empty.

## Declarations
```cpp
std::uint_least32_t source_line() const;
```
_(since C++23)_

## Return value
The line number specified above on success, 0 on failure other than allocation failure.

## Notes
The presumed line number is what the predefined macro [__LINE__](/cpp/preprocessor/replace/) expands to, and can be changed by the [#line](/cpp/preprocessor/line/) directive.

This function is not required to be noexcept because getting source line requires allocation on some platforms.

## Example
This section is incompleteReason: no example

## See also
- [line](/cpp/utility/source_location/line/)
