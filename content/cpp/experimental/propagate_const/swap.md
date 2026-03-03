---
title: "std::experimental::propagate_const<T>::swap"
source_path: "cpp/experimental/propagate_const/swap"
category: "experimental"
---

Swaps the wrapped pointer with that of pt. Let t_ designate the private data member that is the wrapped pointer-like object, then this function is equivalent to swap(t_, pt.t_), where the overload resolution for swap is performed among [std::swap](/cpp/utility/swap/) and any declaration found by the usual lookup rules, as described in [Swappable](/cpp/named_req/swappable/).

## Declarations
```cpp
constexpr void swap( propagate_const & pt ) noexcept(/* see below */);
```
_(library fundamentals TS v2)_

## Parameters
- `pt`: another propagate_const object to swap with

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3413 | LFTSv2 | the exception specification was ill-formed | made well-formed |
