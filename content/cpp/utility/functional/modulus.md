---
title: "std::modulus"
source_path: "cpp/utility/functional/modulus"
header: "<functional>"
category: "utility"
since: "C++14"
---

Function object for computing remainders of divisions. Implements operator% for type T.

## Declarations
```cpp
template< class T >
struct modulus;
```
_(until C++14)_

```cpp
template< class T = void >
struct modulus;
```
_(since C++14)_

## Parameters
- `lhs, rhs`: values to divide one by another

## Return value
The result of lhs % rhs.

## See also
- [fmodfmodffmodl](/cpp/numeric/math/fmod/)
- [remainderremainderfremainderl](/cpp/numeric/math/remainder/)
