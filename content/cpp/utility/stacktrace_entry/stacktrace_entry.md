---
title: "std::stacktrace_entry::stacktrace_entry"
source_path: "cpp/utility/stacktrace_entry/stacktrace_entry"
category: "utility"
since: "C++23"
---

1) Default constructor. Creates an empty stacktrace_entry.

## Declarations
```cpp
constexpr stacktrace_entry() noexcept;
```
_(since C++23)_

```cpp
constexpr stacktrace_entry( const stacktrace_entry& other ) noexcept;
```
_(since C++23)_

## Parameters
- `other`: another stacktrace_entry to copy from

## Notes
A non-empty stacktrace_entry can be obtained from a std::basic_stacktrace created by std::basic_stacktrace::current or a copy of such std::basic_stacktrace.

## Example
This section is incompleteReason: no example

## See also
- [(constructor)](/cpp/utility/source_location/source_location/)
