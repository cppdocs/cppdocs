---
title: "std::stacktrace_entry::operator="
source_path: "cpp/utility/stacktrace_entry/operator"
category: "utility"
since: "C++23"
---

Copy assignment operator. Replaces the contents of *this with those of other.

## Declarations
```cpp
constexpr stacktrace_entry& operator=( const stacktrace_entry& other ) noexcept;
```
_(since C++23)_

## Parameters
- `other`: another stacktrace_entry to assign from

## Return value
*this.
