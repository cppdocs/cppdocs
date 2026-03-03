---
title: "std::strict_weak_order"
source_path: "cpp/concepts/strict_weak_order"
header: "<concepts>"
category: "concepts"
since: "C++20"
---

The concept strict_weak_order<R, T, U> specifies that the [relation](/cpp/concepts/relation/) R imposes a strict weak ordering on its arguments.

## Declarations
```cpp
template< class R, class T, class U >
concept strict_weak_order = std::relation<R, T, U>;
```
_(since C++20)_

## Notes
The distinction between [relation](/cpp/concepts/relation/) and strict_weak_order is purely semantic.

## See also
- [LessThanComparable](/cpp/named_req/lessthancomparable/)
