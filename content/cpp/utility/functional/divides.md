---
title: "std::divides"
source_path: "cpp/utility/functional/divides"
header: "<functional>"
category: "utility"
since: "C++14"
---

Function object for performing division. Effectively calls operator/ on two instances of type T.

## Declarations
```cpp
template< class T >
struct divides;
```
_(until C++14)_

```cpp
template< class T = void >
struct divides;
```
_(since C++14)_

## Parameters
- `lhs, rhs`: values to divide one by other

## Return value
The result of lhs / rhs.
