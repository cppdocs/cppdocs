---
title: "std::pmr::memory_resource::allocate"
source_path: "cpp/memory/memory_resource/allocate"
category: "memory"
since: "C++17"
---

Allocates storage with a size of at least bytes bytes, aligned to the specified alignment.

## Declarations
```cpp
void* allocate( std::size_t bytes,
std::size_t alignment = alignof(std::max_align_t) );
```
_(since C++17)_

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2843 | C++17 | over-alignment was allowed to be unsupported | alignment must be honoured |

## See also
- [do_allocate](/cpp/memory/memory_resource/do_allocate/)
