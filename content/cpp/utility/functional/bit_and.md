---
title: "std::bit_and"
source_path: "cpp/utility/functional/bit_and"
header: "<functional>"
category: "utility"
since: "C++14"
---

Function object for performing bitwise AND. Effectively calls operator& on type T.

## Declarations
```cpp
template< class T >
struct bit_and;
```
_(until C++14)_

```cpp
template< class T = void >
struct bit_and;
```
_(since C++14)_

## Parameters
- `lhs, rhs`: values to compute bitwise AND of

## Return value
The result of lhs & rhs.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 660 | C++98 | function objects for bitwise operations are missing | added |
