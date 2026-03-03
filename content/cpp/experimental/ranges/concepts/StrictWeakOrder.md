---
title: "std::experimental::ranges::StrictWeakOrder"
source_path: "cpp/experimental/ranges/concepts/StrictWeakOrder"
header: "<experimental/ranges/concepts>"
category: "experimental"
---

The concept StrictWeakOrder<R, T, U> specifies that the [Relation](/cpp/experimental/ranges/concepts/relation/) R imposes a strict weak ordering on its arguments. A relation r is a strict weak ordering if

## Declarations
```cpp
template< class R, class T, class U >
concept bool StrictWeakOrder = Relation<R, T, U>;
```
_(ranges TS)_

## Notes
The distinction between [Relation](/cpp/experimental/ranges/concepts/relation/) and StrictWeakOrder is purely semantic.
