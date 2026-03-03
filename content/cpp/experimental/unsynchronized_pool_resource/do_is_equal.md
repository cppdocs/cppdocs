---
title: "std::experimental::pmr::unsynchronized_pool_resource::do_is_equal"
source_path: "cpp/experimental/unsynchronized_pool_resource/do_is_equal"
category: "experimental"
---

Compare *this with other for identity - memory allocated using an unsynchronized_pool_resource can only be deallocated using that same resource.

## Declarations
```cpp
virtual bool do_is_equal( const memory_resource& other ) const noexcept;
```
_(library fundamentals TS)_

## Return value
this == dynamic_cast<const unsynchronized_pool_resource*>(&other)

## See also
- [do_is_equal](/cpp/experimental/memory_resource/do_is_equal/)
