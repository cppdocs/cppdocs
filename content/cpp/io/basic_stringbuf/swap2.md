---
title: "std::swap(std::basic_stringbuf)"
source_path: "cpp/io/basic_stringbuf/swap2"
header: "<sstream>"
category: "io"
since: "C++20"
---

Overloads the [std::swap](/cpp/utility/swap/) algorithm for [std::basic_stringbuf](/cpp/io/basic_stringbuf/). Exchanges the state of lhs with that of rhs. Effectively calls lhs.swap(rhs).

## Declarations
```cpp
template< class CharT, class Traits, class Alloc >
void swap( std::basic_stringbuf<CharT,Traits,Alloc>& lhs,
std::basic_stringbuf<CharT,Traits,Alloc>& rhs );
```
_(since C++11) (until C++20)_

```cpp
template< class CharT, class Traits, class Alloc >
void swap( std::basic_stringbuf<CharT,Traits,Alloc>& lhs,
std::basic_stringbuf<CharT,Traits,Alloc>& rhs )
noexcept(noexcept(lhs.swap(rhs)));
```
_(since C++20)_

## Parameters
- `lhs, rhs`: std::basic_stringbuf objects whose states to swap

## Return value
(none)

## Example
This section is incompleteReason: no example

## See also
- [swap](/cpp/io/basic_stringbuf/swap/)
- [swap](/cpp/utility/swap/)
