---
title: "std::experimental::barrier::barrier"
source_path: "cpp/experimental/barrier/barrier"
category: "experimental"
---

1) Constructs a barrier for num_threads participating threads. The set of participating threads is the first num_threads threads to arrive at the synchronization point.

## Declarations
```cpp
explicit barrier( std::ptrdiff_t num_threads );
```
_(concurrency TS)_

```cpp
barrier( const barrier & ) = delete;
```
_(concurrency TS)_

## Parameters
- `num_threads`: the number of participating threads for the barrier; must be non-negative

## Notes
If num_threads is zero, the set of participating threads is empty, and barrier can only be destroyed.
