---
title: "std::less_equal"
source_path: "cpp/utility/functional/less_equal"
header: "<functional>"
category: "utility"
since: "C++14"
---

Function object for performing comparisons. The main template invokes operator<= on type T.

## Declarations
```cpp
template< class T >
struct less_equal;
```
_(until C++14)_

```cpp
template< class T = void >
struct less_equal;
```
_(since C++14)_

## Parameters
- `lhs, rhs`: values to compare

## Return value
lhs <= rhs.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2562 | C++98 | the pointer total order might be inconsistent | guaranteed to be consistent |

## See also
- [less](/cpp/utility/functional/less/)
- [ranges::less_equal](/cpp/utility/functional/ranges/less_equal/)
