---
title: "std::undeclare_no_pointers"
source_path: "cpp/memory/gc/undeclare_no_pointers"
header: "<memory>"
category: "memory"
---

Unregisters a range earlier registered with [std::declare_no_pointers](/cpp/memory/gc/declare_no_pointers/)().

## Declarations
```cpp
void undeclare_no_pointers( char *p, std::size_t n );
```
_(since C++11) (removed in C++23)_

## Parameters
- `p`: pointer to the beginning of the range previously registered with std::declare_no_pointers
- `n`: the number of bytes in the range, same value as previously used with std::declare_no_pointers

## Return value
(none)

## See also
- [declare_no_pointers](/cpp/memory/gc/declare_no_pointers/)
