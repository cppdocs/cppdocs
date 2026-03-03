---
title: "std::align_val_t"
source_path: "cpp/memory/new/align_val_t"
header: "<new>"
category: "memory"
since: "C++17"
---

Both [new-expression](/cpp/language/new/) and [delete-expression](/cpp/language/delete/), when used with objects whose alignment requirement is greater than __STDCPP_DEFAULT_NEW_ALIGNMENT__, pass that alignment requirement as an argument of type std::align_val_t to the selected allocation/deallocation function.

## Declarations
```cpp
enum class align_val_t : std::size_t {};
```
_(since C++17)_

## Notes
Alignment (as obtained by alignof) has the type [std::size_t](/cpp/types/size_t/), but placement forms of allocation and deallocation functions that take [std::size_t](/cpp/types/size_t/) as an additional parameter are already in use, so this type is used instead.

## See also
- [operator newoperator new[]](/cpp/memory/new/operator_new/)
- [operator deleteoperator delete[]](/cpp/memory/new/operator_delete/)
