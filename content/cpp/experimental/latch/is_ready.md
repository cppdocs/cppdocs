---
title: "std::experimental::latch::is_ready"
source_path: "cpp/experimental/latch/is_ready"
category: "experimental"
---

Returns true if the internal counter equals zero.

## Declarations
```cpp
bool is_ready() const noexcept;
```
_(concurrency TS)_

## Return value
true if the internal counter of *this latch equals zero.
