---
title: "std::not_equal_to"
source_path: "cpp/utility/functional/not_equal_to"
header: "<functional>"
category: "utility"
since: "C++14"
---

Function object for performing comparisons. Unless specialised, invokes operator!= on type T.

## Declarations
```cpp
template< class T >
struct not_equal_to;
```
_(until C++14)_

```cpp
template< class T = void >
struct not_equal_to;
```
_(since C++14)_

## Parameters
- `lhs, rhs`: values to compare

## Return value
true if lhs != rhs, false otherwise.

## See also
- [equal](/cpp/algorithm/equal/)
- [less](/cpp/utility/functional/less/)
- [ranges::not_equal_to](/cpp/utility/functional/ranges/not_equal_to/)
