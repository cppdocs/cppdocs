---
title: "std::basic_spanbuf<CharT,Traits>::span"
source_path: "cpp/io/basic_spanbuf/span"
category: "io"
since: "C++23"
---

1) Gets a span referencing the written area if [std::ios_base::out](/cpp/io/ios_base/openmode/) is set in the open mode, or a span referencing the underlying buffer otherwise.

## Declarations
```cpp
std::span<CharT> span() const noexcept;
```
_(since C++23)_

```cpp
void span( std::span<CharT> s ) noexcept;
```
_(since C++23)_

## Parameters
- `s`: a std::span that references the user-provided buffer

## Example
This section is incompleteReason: no example

## See also
- [str](/cpp/io/basic_stringbuf/str/)
- [view](/cpp/io/basic_stringbuf/view/)
- [str](/cpp/io/strstreambuf/str/)
