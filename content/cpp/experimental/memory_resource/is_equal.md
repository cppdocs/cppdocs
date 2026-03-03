---
title: "std::experimental::pmr::memory_resource::is_equal"
source_path: "cpp/experimental/memory_resource/is_equal"
category: "experimental"
---

Compares *this for equality with other. Two memory_resources compare equal if and only if memory allocated from one memory_resource can be deallocated from the other and vice versa.

## Declarations
```cpp
bool is_equal( const memory_resource& other ) const noexcept;
```
_(library fundamentals TS)_

## See also
- [do_is_equal](/cpp/experimental/memory_resource/do_is_equal/)
