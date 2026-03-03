---
title: "std::experimental::basic_string_view<CharT,Traits>::compare"
source_path: "cpp/experimental/basic_string_view/compare"
category: "experimental"
---

Compares two character sequences.

## Declarations
```cpp
constexpr int compare(basic_string_view v) const noexcept;
```
_(library fundamentals TS)_

```cpp
constexpr int compare(size_type pos1, size_type count1,
basic_string_view v) const
```
_(library fundamentals TS)_

```cpp
constexpr int compare(size_type pos1, size_type count1, basic_string_view v,
size_type pos2, size_type count2) const;
```
_(library fundamentals TS)_

```cpp
constexpr int compare(const CharT* s) const;
```
_(library fundamentals TS)_

```cpp
constexpr int compare(size_type pos1, size_type count1,
const CharT* s) const;
```
_(library fundamentals TS)_

```cpp
constexpr int compare(size_type pos1, size_type count1,
const CharT* s, size_type count2) const;
```
_(library fundamentals TS)_

## Parameters
- `v`: view to compare
- `s`: pointer to the character string to compare to
- `count1`: number of characters of this view to compare
- `pos1`: position of the first character in this view to compare
- `count2`: number of characters of the given view to compare
- `pos2`: position of the first character of the given view to compare

## Return value
negative value if this view is less than the other character sequence, zero if the both character sequences are equal, positive value if this view is greater than the other character sequence.

## See also
- [operator==operator!=operator<operator>operator<=operator>=](/cpp/experimental/basic_string_view/operator_cmp/)
