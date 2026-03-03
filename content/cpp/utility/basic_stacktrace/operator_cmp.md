---
title: "operator==, operator<=>(std::basic_stacktrace)"
source_path: "cpp/utility/basic_stacktrace/operator_cmp"
category: "utility"
since: "C++23"
---

1) Checks if the contents of lhs and rhs are equal, that is, they have the same number of elements and each element in lhs compares equal with the element in rhs at the same position.

## Declarations
```cpp
template< class Allocator2 >
friend bool operator==( const basic_stacktrace& lhs,
const basic_stacktrace<Allocator2>& rhs ) noexcept;
```
_(since C++23)_

```cpp
template< class Allocator2 >
friend std::strong_ordering
operator<=>( const basic_stacktrace& lhs,
const basic_stacktrace<Allocator2>& rhs ) noexcept;
```
_(since C++23)_

## Parameters
- `lhs, rhs`: basic_stacktraces whose contents to compare

## Example
This section is incompleteReason: no example
