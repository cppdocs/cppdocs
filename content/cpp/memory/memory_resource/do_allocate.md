---
title: "std::pmr::memory_resource::do_allocate"
source_path: "cpp/memory/memory_resource/do_allocate"
category: "memory"
since: "C++17"
---

Allocates storage with a size of at least bytes bytes, aligned to the specified alignment.

## Declarations
```cpp
virtual void* do_allocate( std::size_t bytes, std::size_t alignment ) = 0;
```
_(since C++17)_

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2843 | C++17 | handling of unsupported alignment contradictory | throws an exception |

## See also
- [allocate](/cpp/memory/memory_resource/allocate/)
