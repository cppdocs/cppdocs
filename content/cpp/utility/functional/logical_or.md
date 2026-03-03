---
title: "std::logical_or"
source_path: "cpp/utility/functional/logical_or"
header: "<functional>"
category: "utility"
since: "C++14"
---

Function object for performing logical OR (logical disjunction). Effectively calls operator|| on type T.

## Declarations
```cpp
template< class T >
struct logical_or;
```
_(until C++14)_

```cpp
template< class T = void >
struct logical_or;
```
_(since C++14)_

## Parameters
- `lhs, rhs`: values to compute logical OR of

## Return value
The result of lhs || rhs.
