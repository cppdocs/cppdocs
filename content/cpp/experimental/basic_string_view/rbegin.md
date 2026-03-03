---
title: "std::experimental::basic_string_view<CharT,Traits>::rbegin, std::experimental::basic_string_view<CharT,Traits>::crbegin"
source_path: "cpp/experimental/basic_string_view/rbegin"
category: "experimental"
---

Returns a reverse iterator to the first character of the reversed view. It corresponds to the last character of the non-reversed view.

## Declarations
```cpp
constexpr const_reverse_iterator rbegin() const noexcept;
```
_(library fundamentals TS)_

```cpp
constexpr const_reverse_iterator crbegin() const noexcept;
```
_(library fundamentals TS)_

## Return value
const_reverse_iterator to the first character

## See also
- [rendcrend](/cpp/experimental/basic_string_view/rend/)
