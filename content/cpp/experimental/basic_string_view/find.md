---
title: "std::experimental::basic_string_view<CharT,Traits>::find"
source_path: "cpp/experimental/basic_string_view/find"
category: "experimental"
---

Finds the first substring equal to the given character sequence.

## Declarations
```cpp
constexpr size_type find(basic_string_view v, size_type pos = 0) const noexcept;
```
_(library fundamentals TS)_

```cpp
constexpr size_type find(CharT c, size_type pos = 0) const noexcept;
```
_(library fundamentals TS)_

```cpp
constexpr size_type find(const CharT* s, size_type pos, size_type count) const;
```
_(library fundamentals TS)_

```cpp
constexpr size_type find(const CharT* s, size_type pos = 0) const;
```
_(library fundamentals TS)_

## Parameters
- `v`: view to search for
- `pos`: position at which to start the search
- `count`: length of substring to search for
- `s`: pointer to a character string to search for
- `ch`: character to search for

## Return value
Position of the first character of the found substring, or [npos](/cpp/experimental/basic_string_view/npos/) if no such substring is found.

## See also
- [rfind](/cpp/experimental/basic_string_view/rfind/)
- [find_first_of](/cpp/experimental/basic_string_view/find_first_of/)
- [find_last_of](/cpp/experimental/basic_string_view/find_last_of/)
- [find_first_not_of](/cpp/experimental/basic_string_view/find_first_not_of/)
- [find_last_not_of](/cpp/experimental/basic_string_view/find_last_not_of/)
