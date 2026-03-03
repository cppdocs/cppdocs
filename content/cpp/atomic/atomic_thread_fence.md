---
title: "std::atomic_thread_fence"
source_path: "cpp/atomic/atomic_thread_fence"
header: "<atomic>"
category: "atomic"
since: "C++11"
---

Establishes [memory synchronization ordering](/cpp/atomic/memory_order/) of non-atomic and relaxed atomic accesses, as instructed by order, without an associated atomic operation. Note however, that at least one atomic operation is required to set up the synchronization, as described below.

## Declarations
```cpp
extern "C" void atomic_thread_fence( std::memory_order order ) noexcept;
```
_(since C++11)_

## Parameters
- `order`: the memory ordering executed by this fence

## Return value
(none)

## Notes
On x86 (including x86-64), atomic_thread_fence functions issue no CPU instructions and only affect compile-time code motion, except for std::atomic_thread_fence([std::memory_order_seq_cst](/cpp/atomic/memory_order/)).

atomic_thread_fence imposes stronger synchronization constraints than an atomic store operation with the same [std::memory_order](/cpp/atomic/memory_order/). While an atomic store-release operation prevents all preceding reads and writes from moving past the store-release, an atomic_thread_fence with [std::memory_order_release](/cpp/atomic/memory_order/) ordering prevents all preceding reads and writes from moving past all subsequent stores.

Fence-fence synchronization can be used to add synchronization to a sequence of several relaxed atomic operations, for example:

## Example
```cpp
const int num_mailboxes = 32;
std::atomic<int> mailbox_receiver[num_mailboxes];
std::string mailbox_data[num_mailboxes];
 
// The writer threads update non-atomic shared data 
// and then update mailbox_receiver[i] as follows:
mailbox_data[i] = ...;
std::atomic_store_explicit(&mailbox_receiver[i], receiver_id, std::memory_order_release);
 
// Reader thread needs to check all mailbox[i], but only needs to sync with one.
for (int i = 0; i < num_mailboxes; ++i)
    if (std::atomic_load_explicit(&mailbox_receiver[i],
        std::memory_order_relaxed) == my_id)
    {
        // synchronize with just one writer
        std::atomic_thread_fence(std::memory_order_acquire);
        // guaranteed to observe everything done in the writer thread
        // before the atomic_store_explicit()
        do_work(mailbox_data[i]);
    }
```

## See also
- [memory_order](/cpp/atomic/memory_order/)
- [atomic_signal_fence](/cpp/atomic/atomic_signal_fence/)
- [C documentation](/c/atomic/atomic_thread_fence/)
