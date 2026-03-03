---
title: "std::experimental::swap(std::experimental::observer_ptr)"
source_path: "cpp/experimental/observer_ptr/swap2"
category: "experimental"
---

Specializes the swap algorithm for [std::experimental::observer_ptr](/cpp/experimental/observer_ptr/). Swaps the pointers of lhs and rhs. Calls lhs.swap(rhs).

## Declarations
```cpp
template< class W >
void swap( observer_ptr<W>& lhs, observer_ptr<W>& rhs ) noexcept;
```
_(library fundamentals TS v2)_

## Parameters
- `lhs, rhs`: observer_ptrs whose contents to swap

## Return value
(none)

## See also
- [swap](/cpp/utility/swap/)
- [swap](/cpp/experimental/observer_ptr/swap/)
