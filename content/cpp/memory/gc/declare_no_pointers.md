---
title: "std::declare_no_pointers"
source_path: "cpp/memory/gc/declare_no_pointers"
header: "<memory>"
category: "memory"
---

Informs the garbage collector or leak detector that the specified memory region (n bytes beginning at the byte pointed to by p) contains no traceable pointers. If any part of the region is within an allocated object, the entire region must be contained in the same object.

## Declarations
```cpp
void declare_no_pointers( char *p, std::size_t n );
```
_(since C++11) (removed in C++23)_

## Parameters
- `p`: pointer to the beginning of the range
- `n`: the number of bytes in the range

## Return value
(none)

## See also
- [undeclare_no_pointers](/cpp/memory/gc/undeclare_no_pointers/)
