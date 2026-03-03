---
title: "std::experimental::pmr::memory_resource::do_is_equal"
source_path: "cpp/experimental/memory_resource/do_is_equal"
category: "experimental"
---

Compares *this for equality with other.

## Declarations
```cpp
virtual bool is_equal( const memory_resource& other ) const noexcept = 0;
```
_(library fundamentals TS)_

## Notes
The most-derived type of other may not match the most derived type of *this. A derived class implementation therefore must typically check whether the most derived types of *this and other match using dynamic_cast, and immediately return false if the cast fails.

## See also
- [is_equal](/cpp/experimental/memory_resource/is_equal/)
