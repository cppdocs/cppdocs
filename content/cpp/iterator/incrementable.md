---
title: "std::incrementable"
source_path: "cpp/iterator/incrementable"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

This concept specifies requirements on types that can be incremented with the pre- and post-increment operators, whose increment operations are [equality-preserving](/cpp/concepts/#Equality_preservation), and the type is [std::equality_comparable](/cpp/concepts/equality_comparable/).

## Declarations
```cpp
template< class I >
concept incrementable =
std::regular<I> &&
std::weakly_incrementable<I> &&
requires(I i) {
{ i++ } -> std::same_as<I>;
};
```
_(since C++20)_

## See also
- [weakly_incrementable](/cpp/iterator/weakly_incrementable/)
- [semiregular](/cpp/concepts/semiregular/)
- [same_as](/cpp/concepts/same_as/)
