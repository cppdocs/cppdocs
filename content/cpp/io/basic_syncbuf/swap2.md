---
title: "std::swap(std::basic_syncbuf)"
source_path: "cpp/io/basic_syncbuf/swap2"
category: "io"
since: "C++20"
---

Overloads the [std::swap](/cpp/utility/swap/) algorithm for std::basic_syncbuf. Exchanges the state of lhs with that of rhs. Effectively calls lhs.swap(rhs).

## Declarations
```cpp
template< class CharT, class Traits, class Allocator >
void swap( std::basic_syncbuf<CharT, Traits, Allocator>& lhs,
std::basic_syncbuf<CharT, Traits, Allocator>& rhs );
```
_(since C++20)_

## Parameters
- `lhs, rhs`: std::basic_syncbuf objects whose states to swap

## Return value
(none)

## Example
This section is incompleteReason: no example

## See also
- [swap](/cpp/io/basic_syncbuf/swap/)
- [swap](/cpp/utility/swap/)
