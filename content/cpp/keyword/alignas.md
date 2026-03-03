---
title: "C++ keyword: alignas (since C++11)"
source_path: "cpp/keyword/alignas"
category: "keyword"
since: "C++11"
---

[alignas specifier](/cpp/language/alignas/)

## Example
```cpp
struct s1 final {};
struct alignas(2) s2 final {};
 
static_assert(alignof(s1) == 1);
static_assert(alignof(s2) == 2);
```

## See also
- [alignof](/cpp/keyword/alignof/)
