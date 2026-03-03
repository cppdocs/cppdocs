---
title: "std::atomic_flag::clear"
source_path: "cpp/atomic/atomic_flag/clear"
header: "<atomic>"
category: "atomic"
since: "C++11"
---

Atomically changes the state of a [std::atomic_flag](/cpp/atomic/atomic_flag/) to clear (false).

## Declarations
```cpp
void clear( std::memory_order order =
std::memory_order_seq_cst ) volatile noexcept;
```
_(since C++11)_

```cpp
void clear( std::memory_order order =
std::memory_order_seq_cst ) noexcept;
```
_(since C++11)_

## Parameters
- `order`: the memory synchronization ordering

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2138 | C++11 | order could be std::memory_order_consume | the behavior is undefined in this case |

## See also
- [test_and_set](/cpp/atomic/atomic_flag/test_and_set/)
- [atomic_flag_clearatomic_flag_clear_explicit](/cpp/atomic/atomic_flag_clear/)
- [memory_order](/cpp/atomic/memory_order/)
