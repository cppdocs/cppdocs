---
title: "std::atomic_ref<T>::compare_exchange_weak, std::atomic_ref<T>::compare_exchange_strong"
source_path: "cpp/atomic/atomic_ref/compare_exchange"
category: "atomic"
---

Atomically compares the [value representation](/cpp/language/objects/) of the referenced object with that of expected, and if those are bitwise-equal, replaces the former with desired (performs a read-modify-write operation). Otherwise, loads the actual value stored in the referenced object into expected (performs a load operation).

## Declarations
```cpp
bool compare_exchange_weak
( value_type& expected, value_type desired,
std::memory_order success,
std::memory_order failure ) const noexcept;
```
_(constexpr since C++26)_

```cpp
bool compare_exchange_weak
( value_type& expected, value_type desired,
std::memory_order order =
std::memory_order_seq_cst ) const noexcept;
```
_(constexpr since C++26)_

```cpp
bool compare_exchange_strong
( value_type& expected, value_type desired,
std::memory_order success,
std::memory_order failure ) const noexcept;
```
_(constexpr since C++26)_

```cpp
bool compare_exchange_strong
( value_type& expected, value_type desired,
std::memory_order order =
std::memory_order_seq_cst ) const noexcept;
```
_(constexpr since C++26)_

## Parameters
- `expected`: reference to the value expected to be found in the object referenced by the atomic_ref object
- `desired`: the value to store in the referenced object if it is as expected
- `success`: the memory synchronization ordering for the read-modify-write operation if the comparison succeeds
- `failure`: the memory synchronization ordering for the load operation if the comparison fails
- `order`: the memory synchronization ordering for both operations

## Return value
true if the referenced object was successfully changed, false otherwise.

## Notes
The comparison and copying are bitwise (similar to [std::memcmp](/cpp/string/byte/memcmp/) and [std::memcpy](/cpp/string/byte/memcpy/)); no constructor, assignment operator, or comparison operator are used.

The weak forms (1,2) of the functions are allowed to fail spuriously, that is, act as if *this != expected even if they are equal. When a compare-and-exchange is in a loop, the weak version will yield better performance on some platforms.

When a weak compare-and-exchange would require a loop and a strong one would not, the strong one is preferable unless the object representation of value_type may include trap bits, or offers multiple object representations for the same value (e.g. floating-point NaN). In those cases, weak compare-and-exchange typically works because it quickly converges on some stable object representation.

For a union with bits that participate in the value representations of some members but not the others, compare-and-exchange might always fail because such padding bits have indeterminate values when they do not participate in the value representation of the active member.

Padding bits that never participate in an object's value representation are ignored.

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3508(P3323R1) | C++20 | compare_exchange_weak and compare_exchange_strongwere meaningless for const T | constrained to accept only non-const T |
