---
title: "std::pmr::memory_resource::is_equal"
source_path: "cpp/memory/memory_resource/is_equal"
category: "memory"
since: "C++17"
---

Compares *this for equality with other. Two memory_resources compare equal if and only if memory allocated from one memory_resource can be deallocated from the other and vice versa.

## Declarations
```cpp
bool is_equal( const memory_resource& other ) const noexcept;
```
_(since C++17)_

## See also
- [do_is_equal](/cpp/memory/memory_resource/do_is_equal/)
