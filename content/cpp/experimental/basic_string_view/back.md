---
title: "std::experimental::basic_string_view<CharT,Traits>::back"
source_path: "cpp/experimental/basic_string_view/back"
category: "experimental"
---

Returns reference to the last character in the view.

## Declarations
```cpp
constexpr const_reference back() const;
```
_(library fundamentals TS)_

## Return value
Reference to the last character, equivalent to operator[](size() - 1).

## See also
- [front](/cpp/experimental/basic_string_view/front/)
