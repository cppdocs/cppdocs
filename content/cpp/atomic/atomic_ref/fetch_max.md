---
title: "std::atomic_ref<T>::fetch_max"
source_path: "cpp/atomic/atomic_ref/fetch_max"
category: "atomic"
since: "C++26"
---

Atomically replaces the current value of the referenced object with the result of [std::max](/cpp/algorithm/max/) of the value and arg. That is, it performs atomic maximum operation. The operation is a read-modify-write operation. Memory is affected according to the value of order.

## Declarations
```cpp
Provided only when T is an integral type other than cv bool or a pointer-to-object type
```

```cpp
value_type fetch_max( value_type arg,
std::memory_order order =
std::memory_order_seq_cst ) const noexcept;
```
_(since C++26)_

## Parameters
- `arg`: the other argument of std::max
- `order`: memory order constraints to enforce

## Return value
The value immediately preceding the effects of this function in the [modification order](/cpp/atomic/memory_order/#Modification_order) of *this.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_atomic_min_max
202403L
(C++26)
Atomic minimum/maximum

## Example
This section is incompleteReason: no example
