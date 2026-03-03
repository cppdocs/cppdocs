---
title: "std::stacktrace_entry::native_handle"
source_path: "cpp/utility/stacktrace_entry/native_handle"
category: "utility"
since: "C++23"
---

Returns the implementation-defined underlying native handle. Successive invocations of this function for an unchanged stacktrace_entry object return identical values.

## Declarations
```cpp
constexpr native_handle_type native_handle() const noexcept;
```
_(since C++23)_

## Return value
Underlying native handle.

## Example
This section is incompleteReason: no example
