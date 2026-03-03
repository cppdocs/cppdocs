---
title: "std::experimental::basic_string_view<CharT,Traits>::npos"
source_path: "cpp/experimental/basic_string_view/npos"
category: "experimental"
---

This is a special value equal to the maximum value representable by the type size_type. The exact meaning depends on context, but it is generally used either as end of view indicator by the functions that expect a view index or as the error indicator by the functions that return a view index.

## Declarations
```cpp
static constexpr size_type npos = size_type(-1);
```
_(library fundamentals TS)_
