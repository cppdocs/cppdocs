---
title: "std::logical_not"
source_path: "cpp/utility/functional/logical_not"
header: "<functional>"
category: "utility"
since: "C++14"
---

Function object for performing logical NOT (logical negation). Effectively calls operator! for type T.

## Declarations
```cpp
template< class T >
struct logical_not;
```
_(until C++14)_

```cpp
template< class T = void >
struct logical_not;
```
_(since C++14)_

## Parameters
- `arg`: value to compute logical NOT of

## Return value
The result of !arg.
