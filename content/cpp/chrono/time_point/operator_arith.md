---
title: "std::chrono::time_point<Clock,Duration>::operator+=, operator-="
source_path: "cpp/chrono/time_point/operator"
aliases:
  - "/cpp/chrono/time_point/operator/"
category: "chrono"
---

Modifies the time point by the given duration.

## Declarations
```cpp
time_point& operator+=( const duration& d );
```
_(since C++11) (constexpr since C++17)_

```cpp
time_point& operator-=( const duration& d );
```
_(since C++11) (constexpr since C++17)_

## Parameters
- `d`: a time offset to apply

## Return value
*this

## Example
This section is incompleteReason: no example

## See also
- [operator+operator-](/cpp/chrono/time_point/operator_arith2/)
