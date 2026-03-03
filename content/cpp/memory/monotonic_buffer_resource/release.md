---
title: "std::pmr::monotonic_buffer_resource::release"
source_path: "cpp/memory/monotonic_buffer_resource/release"
category: "memory"
since: "C++17"
---

Releases all allocated memory by calling the deallocate function on the upstream memory resource as necessary. Resets current buffer and next buffer size to their initial values at construction.

## Declarations
```cpp
void release();
```
_(since C++17)_

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3120 | C++17 | release might not make initial buffer reusable if provided | required to do so |

## See also
- [deallocate](/cpp/memory/memory_resource/deallocate/)
