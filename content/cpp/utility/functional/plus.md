---
title: "std::plus"
source_path: "cpp/utility/functional/plus"
header: "<functional>"
category: "utility"
since: "C++14"
---

Function object for performing addition. Effectively calls operator+ on two instances of type T.

## Declarations
```cpp
template< class T >
struct plus;
```
_(until C++14)_

```cpp
template< class T = void >
struct plus;
```
_(since C++14)_

## Parameters
- `lhs, rhs`: values to sum

## Return value
The result of lhs + rhs.
