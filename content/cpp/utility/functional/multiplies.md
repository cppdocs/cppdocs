---
title: "std::multiplies"
source_path: "cpp/utility/functional/multiplies"
header: "<functional>"
category: "utility"
since: "C++14"
---

Function object for performing multiplication. Effectively calls operator* on two instances of type T.

## Declarations
```cpp
template< class T >
struct multiplies;
```
_(until C++14)_

```cpp
template< class T = void >
struct multiplies;
```
_(since C++14)_

## Parameters
- `lhs, rhs`: values to multiply

## Return value
The result of lhs * rhs.
