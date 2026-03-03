---
title: "std::pmr::memory_resource::do_is_equal"
source_path: "cpp/memory/memory_resource/do_is_equal"
category: "memory"
since: "C++17"
---

Compares *this for equality with other.

## Declarations
```cpp
virtual bool do_is_equal( const std::pmr::memory_resource& other ) const noexcept = 0;
```
_(since C++17)_

## Notes
The most-derived type of other may not match the most derived type of *this. A derived class implementation therefore must typically check whether the most derived types of *this and other match using [dynamic_cast](/cpp/language/dynamic_cast/), and immediately return false if the cast fails.

## See also
- [is_equal](/cpp/memory/memory_resource/is_equal/)
