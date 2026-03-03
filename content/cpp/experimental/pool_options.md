---
title: "std::experimental::pmr::pool_options"
source_path: "cpp/experimental/pool_options"
header: "<experimental/memory_resource>"
category: "experimental"
---

The struct std::experimental::pmr::pool_options contains a set of constructor options for [std::experimental::pmr::synchronized_pool_resource](/cpp/experimental/synchronized_pool_resource/) and [std::experimental::pmr::unsynchronized_pool_resource](/cpp/experimental/unsynchronized_pool_resource/).

## Declarations
```cpp
struct pool_options {
std::size_t max_blocks_per_chunk = 0;
std::size_t largest_required_pool_block = 0;
};
```
_(library fundamentals TS)_

## See also
- [synchronized_pool_resource](/cpp/experimental/synchronized_pool_resource/)
- [memory_resource](/cpp/experimental/memory_resource/)
- [unsynchronized_pool_resource](/cpp/experimental/unsynchronized_pool_resource/)
- [memory_resource](/cpp/experimental/memory_resource/)
