---
title: "std::experimental::basic_string_view<CharT,Traits>::at"
source_path: "cpp/experimental/basic_string_view/at"
category: "experimental"
---

Returns a reference to the character at specified location pos. Bounds checking is performed, exception of type [std::out_of_range](/cpp/error/out_of_range/) will be thrown on invalid access.

## Declarations
```cpp
constexpr const_reference at(size_type pos) const;
```
_(library fundamentals TS)_

## Parameters
- `pos`: position of the character to return

## Return value
Reference to the requested character.

## See also
- [operator[]](/cpp/experimental/basic_string_view/operator_at/)
