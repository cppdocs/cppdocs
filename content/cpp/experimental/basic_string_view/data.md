---
title: "std::experimental::basic_string_view<CharT,Traits>::data"
source_path: "cpp/experimental/basic_string_view/data"
category: "experimental"
---

Returns a pointer to the underlying character array. The pointer is such that the range [data(), data() + size()) is valid and the values in it correspond to the values of the view. (n.b. Unlike basic_string::data() and string literals, data() may return a pointer to a buffer that is not null-terminated. Therefore it is typically a mistake to pass data() to a routine that takes just a const CharT* and expects a null-terminated string.)

## Declarations
```cpp
constexpr const_pointer data() const noexcept;
```
_(library fundamentals TS)_

## Return value
A pointer to the underlying character array.

## See also
- [front](/cpp/experimental/basic_string_view/front/)
- [back](/cpp/experimental/basic_string_view/back/)
