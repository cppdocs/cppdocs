---
title: "std::experimental::basic_string_view<CharT,Traits>::rend, std::experimental::basic_string_view<CharT,Traits>::crend"
source_path: "cpp/experimental/basic_string_view/rend"
category: "experimental"
---

Returns a reverse iterator to the character following the last character of the reversed view. It corresponds to the character preceding the first character of the non-reversed view. This character acts as a placeholder, attempting to access it results in undefined behavior.

## Declarations
```cpp
constexpr const_reverse_iterator rend() const noexcept;
```
_(library fundamentals TS)_

```cpp
constexpr const_reverse_iterator crend() const noexcept;
```
_(library fundamentals TS)_

## Return value
const_reverse_iterator to the character following the last character.

## See also
- [rbegincrbegin](/cpp/experimental/basic_string_view/rbegin/)
