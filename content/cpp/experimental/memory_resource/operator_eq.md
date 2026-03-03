---
title: "operator==, operator!= (std::experimental::pmr::memory_resource)"
source_path: "cpp/experimental/memory_resource/operator"
category: "experimental"
aliases:
  - "/cpp/experimental/memory_resource/operator/"
---

Compares the memory_resources a and b for equality. Two memory_resources compare equal if and only if memory allocated from one memory_resource can be deallocated from the other and vice versa.

## Declarations
```cpp
bool operator==( const memory_resource& a, const memory_resource& b ) noexcept;
```
_(library fundamentals TS)_

```cpp
bool operator!=( const memory_resource& a, const memory_resource& b ) noexcept;
```
_(library fundamentals TS)_

## See also
- [is_equal](/cpp/experimental/memory_resource/is_equal/)
