---
title: "std::atomic_signal_fence"
source_path: "cpp/atomic/atomic_signal_fence"
header: "<atomic>"
category: "atomic"
since: "C++11"
---

Establishes memory synchronization ordering of non-atomic and relaxed atomic accesses, as instructed by order, between a thread and a signal handler executed on the same thread. This is equivalent to [std::atomic_thread_fence](/cpp/atomic/atomic_thread_fence/), except no CPU instructions for memory ordering are issued. Only reordering of the instructions by the compiler is suppressed as order instructs. For example, a fence with release semantics prevents reads or writes from being moved past subsequent writes and a fence with acquire semantics prevents reads or writes from being moved ahead of preceding reads.

## Declarations
```cpp
extern "C" void atomic_signal_fence( std::memory_order order ) noexcept;
```
_(since C++11)_

## Parameters
- `order`: the memory ordering executed by this fence

## Return value
(none)

## Example
This section is incompleteReason: no example

## See also
- [memory_order](/cpp/atomic/memory_order/)
- [atomic_thread_fence](/cpp/atomic/atomic_thread_fence/)
- [C documentation](/c/atomic/atomic_signal_fence/)
