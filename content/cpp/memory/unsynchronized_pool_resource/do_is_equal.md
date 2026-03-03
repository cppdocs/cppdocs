---
title: "std::pmr::unsynchronized_pool_resource::do_is_equal"
source_path: "cpp/memory/unsynchronized_pool_resource/do_is_equal"
category: "memory"
since: "C++17"
---

Compare *this with other for identity - memory allocated using an unsynchronized_pool_resource can only be deallocated using that same resource.

## Declarations
```cpp
virtual bool do_is_equal( const std::pmr::memory_resource& other ) const noexcept;
```
_(since C++17)_

## Return value
this == &other

## See also
- [do_is_equal](/cpp/memory/memory_resource/do_is_equal/)
