---
title: "std::swap(std::basic_filebuf)"
source_path: "cpp/io/basic_filebuf/swap2"
category: "io"
since: "C++11"
---

Overloads the [std::swap](/cpp/utility/swap/) algorithm for [std::basic_filebuf](/cpp/io/basic_filebuf/). Exchanges the state of lhs with that of rhs. Effectively calls lhs.swap(rhs).

## Declarations
```cpp
template< class CharT, class Traits >
void swap( std::basic_filebuf<CharT,Traits>& lhs,
std::basic_filebuf<CharT,Traits>& rhs );
```
_(since C++11)_

## Parameters
- `lhs, rhs`: std::basic_filebuf objects whose states to swap

## Return value
(none)

## Example
This section is incompleteReason: no example

## See also
- [swap](/cpp/io/basic_filebuf/swap/)
- [swap](/cpp/utility/swap/)
