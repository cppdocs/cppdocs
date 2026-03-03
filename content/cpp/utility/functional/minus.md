---
title: "std::minus"
source_path: "cpp/utility/functional/minus"
header: "<functional>"
category: "utility"
since: "C++14"
---

Function object for performing subtraction. Effectively calls operator- on two instances of type T.

## Declarations
```cpp
template< class T >
struct minus;
```
_(until C++14)_

```cpp
template< class T = void >
struct minus;
```
_(since C++14)_

## Parameters
- `lhs, rhs`: values to subtract from one another

## Return value
The result of lhs - rhs.
