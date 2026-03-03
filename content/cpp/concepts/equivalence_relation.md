---
title: "std::equivalence_relation"
source_path: "cpp/concepts/equivalence_relation"
header: "<concepts>"
category: "concepts"
since: "C++20"
---

The concept equivalence_relation<R, T, U> specifies that the [relation](/cpp/concepts/relation/) R imposes an [equivalence relation](https://en.wikipedia.org/wiki/equivalence_relation) on its arguments.

## Declarations
```cpp
template< class R, class T, class U >
concept equivalence_relation = std::relation<R, T, U>;
```
_(since C++20)_

## Notes
The distinction between [relation](/cpp/concepts/relation/) and equivalence_relation is purely semantic.
