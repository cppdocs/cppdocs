---
title: "std::experimental::basic_string_view<CharT,Traits>::rfind"
source_path: "cpp/experimental/basic_string_view/rfind"
category: "experimental"
---

Finds the last substring equal to the given character sequence.

## Declarations
```cpp
constexpr size_type rfind(basic_string_view v, size_type pos = npos) const noexcept;
```
_(library fundamentals TS)_

```cpp
constexpr size_type rfind(CharT c, size_type pos = npos) const noexcept;
```
_(library fundamentals TS)_

```cpp
constexpr size_type rfind(const CharT* s, size_type pos, size_type count) const;
```
_(library fundamentals TS)_

```cpp
constexpr size_type rfind(const CharT* s, size_type pos = npos) const;
```
_(library fundamentals TS)_

## Parameters
- `v`: view to search for
- `pos`: position at which to start the search
- `count`: length of substring to search for
- `s`: pointer to a character string to search for
- `ch`: character to search for

## Return value
Position of the first character of the found substring or [npos](/cpp/experimental/basic_string_view/npos/) if no such substring is found.

## See also
- [find](/cpp/experimental/basic_string_view/find/)
- [find_first_of](/cpp/experimental/basic_string_view/find_first_of/)
- [find_last_of](/cpp/experimental/basic_string_view/find_last_of/)
- [find_first_not_of](/cpp/experimental/basic_string_view/find_first_not_of/)
- [find_last_not_of](/cpp/experimental/basic_string_view/find_last_not_of/)
