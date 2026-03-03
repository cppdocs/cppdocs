---
title: "std::ranges::subrange_kind"
source_path: "cpp/ranges/subrange_kind"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

Specifies if a [std::ranges::subrange](/cpp/ranges/subrange/) models [std::ranges::sized_range](/cpp/ranges/sized_range/) or not.

## Declarations
```cpp
enum class subrange_kind : bool {
unsized,
sized
};
```
_(since C++20)_
