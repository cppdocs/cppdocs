---
title: "std::basic_stringbuf<CharT,Traits,Allocator>::view"
source_path: "cpp/io/basic_stringbuf/view"
category: "io"
since: "C++20"
---

Creates and returns a [std::basic_string_view](/cpp/string/basic_string_view/) over the underlying character sequence.

## Declarations
```cpp
std::basic_string_view<CharT, Traits> view() const noexcept;
```
_(since C++20)_

## Return value
A view over the underlying character sequence.

## Notes
Using of the return value is undefined behavior if the underlying character sequence is destroyed or invalidated, unless the return value is empty.

This function is typically accessed through std::basic_istringstream::view(), std::basic_ostringstream::view(), or std::basic_stringstream::view().

## See also
- [str](/cpp/io/basic_stringbuf/str/)
- [operator basic_string_view](/cpp/string/basic_string/operator_basic_string_view/)
