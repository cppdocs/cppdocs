---
title: "std::stacktrace_entry::operator bool"
source_path: "cpp/utility/stacktrace_entry/operator_bool"
category: "utility"
since: "C++23"
---

Checks whether the stacktrace_entry is non-empty, i.e. it represents an evaluation in a stacktrace.

## Declarations
```cpp
constexpr explicit operator bool() const noexcept;
```
_(since C++23)_

## Return value
true if the stacktrace_entry is non-empty, false otherwise.

## Notes
A non-empty stacktrace_entry can be obtained from a std::basic_stacktrace created by std::basic_stacktrace::current or a copy of such std::basic_stacktrace.

An empty stacktrace_entry can be created by the [default constructor](/cpp/utility/stacktrace_entry/stacktrace_entry/).

## Example
This section is incompleteReason: no example
