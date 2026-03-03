---
title: "std::experimental::basic_string_view<CharT,Traits>::end, std::experimental::basic_string_view<CharT,Traits>::cend"
source_path: "cpp/experimental/basic_string_view/end"
category: "experimental"
---

Returns an iterator to the character following the last character of the view. This character acts as a placeholder, attempting to access it results in undefined behavior.

## Declarations
```cpp
constexpr const_iterator end() const noexcept;
```
_(library fundamentals TS)_

```cpp
constexpr const_iterator cend() const noexcept;
```
_(library fundamentals TS)_

## Return value
const_iterator to the character following the last character.

## See also
- [begincbegin](/cpp/experimental/basic_string_view/begin/)
