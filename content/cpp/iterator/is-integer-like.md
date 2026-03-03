---
title: "is-integer-like ﻿, is-signed-integer-like"
source_path: "cpp/iterator/is-integer-like"
category: "iterator"
---

1) /*is-integer-like*/<T> is true if and only if T is an integer-like type.

## Declarations
```cpp
template< class T >
constexpr bool /*is-integer-like*/ = /* see description */;
```
_(since C++20) (exposition only*)_

```cpp
template< class T >
constexpr bool /*is-signed-integer-like*/ = /* see description */;
```
_(since C++20) (exposition only*)_

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3366(P2393R1) | C++20 | the conversion between an integer-class type and its correspondinginteger type was not guaranteed to produce a representable value | guaranteed |
| LWG 3376(P2393R1) | C++20 | integer-class types could only be class types | also allowednon-class types |
| LWG 3467 | C++20 | bool was considered as an integer-like type | excluded |
| LWG 3575(P2393R1) | C++20 | integer-class types were not guaranteed to be three-way-comparable | guaranteed |

## See also
- [weakly_incrementable](/cpp/iterator/weakly_incrementable/)
- [semiregular](/cpp/concepts/semiregular/)
