---
title: "std::weakly_incrementable"
source_path: "cpp/iterator/weakly_incrementable"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

For the definition of /*is-signed-integer-like*/, see [is-integer-like](/cpp/iterator/is-integer-like/) ﻿.

## Declarations
```cpp
template< class I >
concept weakly_incrementable =
std::movable<I> &&
requires(I i) {
typename std::iter_difference_t<I>;
requires /*is-signed-integer-like*/<std::iter_difference_t<I>>;
{ ++i } -> std::same_as<I&>; // not required to be equality-preserving
i++; // not required to be equality-preserving
};
```
_(since C++20)_

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2325R3 | C++20 | default_initializable was required | not required |

## See also
- [incrementable](/cpp/iterator/incrementable/)
- [equality-preserving](/cpp/concepts/#Equality_preservation)
- [equality_comparable](/cpp/concepts/equality_comparable/)
