---
title: "std::experimental::basic_string_view<CharT,Traits>::find_last_of"
source_path: "cpp/experimental/basic_string_view/find_last_of"
category: "experimental"
---

Finds the last character equal to any of the characters in the given character sequence.

## Declarations
```cpp
constexpr size_type find_last_of(basic_string_view v, size_type pos = npos) const noexcept;
```
_(library fundamentals TS)_

```cpp
constexpr size_type find_last_of(CharT c, size_type pos = npos) const noexcept;
```
_(library fundamentals TS)_

```cpp
constexpr size_type find_last_of(const CharT* s, size_type pos, size_type count) const;
```
_(library fundamentals TS)_

```cpp
constexpr size_type find_last_of(const CharT* s, size_type pos = npos) const;
```
_(library fundamentals TS)_

## Parameters
- `v`: view to search for
- `pos`: position at which to start the search
- `count`: length of the string of characters to search for
- `s`: pointer to a string of characters to search for
- `ch`: character to search for

## Return value
Position of the last occurrence of any character of the substring, or [npos](/cpp/experimental/basic_string_view/npos/) if no such character is found.

## See also
- [find](/cpp/experimental/basic_string_view/find/)
- [rfind](/cpp/experimental/basic_string_view/rfind/)
- [find_first_of](/cpp/experimental/basic_string_view/find_first_of/)
- [find_first_not_of](/cpp/experimental/basic_string_view/find_first_not_of/)
- [find_last_not_of](/cpp/experimental/basic_string_view/find_last_not_of/)
