---
title: "std::logical_and"
source_path: "cpp/utility/functional/logical_and"
header: "<functional>"
category: "utility"
since: "C++14"
---

Function object for performing logical AND (logical conjunction). Effectively calls operator&& on type T.

## Declarations
```cpp
template< class T >
struct logical_and;
```
_(until C++14)_

```cpp
template< class T = void >
struct logical_and;
```
_(since C++14)_

## Parameters
- `lhs, rhs`: values to compute logical AND of

## Return value
The result of lhs && rhs.
