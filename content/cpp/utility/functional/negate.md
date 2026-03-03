---
title: "std::negate"
source_path: "cpp/utility/functional/negate"
header: "<functional>"
category: "utility"
since: "C++14"
---

Function object for performing negation. Effectively calls operator- on an instance of type T.

## Declarations
```cpp
template< class T >
struct negate;
```
_(until C++14)_

```cpp
template< class T = void >
struct negate;
```
_(since C++14)_

## Parameters
- `arg`: value to compute negation of

## Return value
The result of -arg.
