---
title: "std::destroying_delete_t, std::destroying_delete"
source_path: "cpp/memory/new/destroying_delete_t"
header: "<new>"
category: "memory"
since: "C++20"
---

Tag type used to identify the destroying delete form of [operator delete](/cpp/memory/new/operator_delete/).

## Declarations
```cpp
struct destroying_delete_t { explicit destroying_delete_t() = default; };
```
_(since C++20)_

```cpp
inline constexpr destroying_delete_t destroying_delete{};
```
_(since C++20)_

## See also
- [operator deleteoperator delete[]](/cpp/memory/new/operator_delete/)
