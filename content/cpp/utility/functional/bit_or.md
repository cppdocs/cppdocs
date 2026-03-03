---
title: "std::bit_or"
source_path: "cpp/utility/functional/bit_or"
header: "<functional>"
category: "utility"
since: "C++14"
---

Function object for performing bitwise OR. Effectively calls operator| on type T.

## Declarations
```cpp
template< class T >
struct bit_or;
```
_(until C++14)_

```cpp
template< class T = void >
struct bit_or;
```
_(since C++14)_

## Parameters
- `lhs, rhs`: values to compute bitwise OR of

## Return value
The result of lhs | rhs.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 660 | C++98 | function objects for bitwise operations are missing | added |
