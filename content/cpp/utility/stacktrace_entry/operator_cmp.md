---
title: "operator==, operator<=>(std::stacktrace_entry)"
source_path: "cpp/utility/stacktrace_entry/operator_cmp"
category: "utility"
since: "C++23"
---

1) Compares lhs and rhs for equality. Two stacktrace_entry values are equal if and only if they represent the same stacktrace entry, or both of them are empty.

## Declarations
```cpp
friend constexpr bool operator==( const stacktrace_entry& lhs,
const stacktrace_entry& rhs ) noexcept;
```
_(since C++23)_

```cpp
friend constexpr std::strong_ordering
operator<=>( const stacktrace_entry& lhs, const stacktrace_entry& rhs ) noexcept;
```
_(since C++23)_

## Parameters
- `lhs, rhs`: stacktrace_entry values to compare

## Example
This section is incompleteReason: no example
