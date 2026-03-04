---
title: "std::unexpect_t, std::unexpect"
source_path: "cpp/utility/expected/unexpect_t"
header: "<expected>"
category: "utility"
since: "C++23"
---

1) A tag type for in-place construction of an unexpected value in an std::expected object.

## Declarations
```cpp
struct unexpect_t { explicit unexpect_t() = default; };
```
_(since C++23)_

```cpp
inline constexpr std::unexpect_t unexpect{};
```
_(since C++23)_

## Notes
Like other construction tag types, unexpect_t is a trivial, empty class with an explicit default constructor.

## See also
- [(constructor)](/cpp/utility/expected/expected/)
- [in_place and related tags](/cpp/utility/in_place/)
