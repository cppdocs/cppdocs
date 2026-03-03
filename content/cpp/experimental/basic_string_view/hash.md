---
title: "std::hash (std::experimental::string_view, std::experimental::wstring_view, std::experimental::u16string_view, std::experimental::u32string_view)"
source_path: "cpp/experimental/basic_string_view/hash"
header: "<experimental/string_view>"
category: "experimental"
---

Template specializations of [std::hash](/cpp/utility/hash/) for the various view classes for hashing views.

## Declarations
```cpp
template<> struct hash<std::experimental::string_view>;
template<> struct hash<std::experimental::wstring_view>;
template<> struct hash<std::experimental::u16string_view>;
template<> struct hash<std::experimental::u32string_view>;
```
_(library fundamentals TS)_

## See also
- [hash](/cpp/utility/hash/)
