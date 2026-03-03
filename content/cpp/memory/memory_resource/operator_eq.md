---
title: "std::pmr::operator==, std::pmr::operator!="
source_path: "cpp/memory/memory_resource/operator"
header: "<memory_resource>"
category: "memory"
since: "C++17"
aliases:
  - "/cpp/memory/memory_resource/operator/"
---

Compares the memory_resources a and b for equality. Two memory_resources compare equal if and only if memory allocated from one memory_resource can be deallocated from the other and vice versa.

## Declarations
```cpp
bool operator==( const std::pmr::memory_resource& a,
const std::pmr::memory_resource& b ) noexcept;
```
_(since C++17)_

```cpp
bool operator!=( const std::pmr::memory_resource& a,
const std::pmr::memory_resource& b ) noexcept;
```
_(since C++17) (until C++20)_

## See also
- [is_equal](/cpp/memory/memory_resource/is_equal/)
