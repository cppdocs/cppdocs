---
title: "std::experimental::latch::latch"
source_path: "cpp/experimental/latch/latch"
category: "experimental"
---

1) Constructs a latch and initializes its internal counter.

## Declarations
```cpp
explicit latch( ptrdiff_t value );
```
_(concurrency TS)_

```cpp
latch( const latch & ) = delete;
```
_(concurrency TS)_

## Parameters
- `value`: the initial value of the internal counter; must be non-negative
