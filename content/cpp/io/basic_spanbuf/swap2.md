---
title: "std::swap(std::basic_spanbuf)"
source_path: "cpp/io/basic_spanbuf/swap2"
header: "<spanstream>"
category: "io"
since: "C++23"
---

Overloads the [std::swap](/cpp/utility/swap/) algorithm for std::basic_spanbuf. Exchanges the state of lhs with that of rhs. Equivalent to lhs.swap(rhs);.

## Declarations
```cpp
template< class CharT, class Traits >
void swap( std::basic_spanbuf<CharT, Traits>& lhs,
std::basic_spanbuf<CharT, Traits>& rhs );
```
_(since C++23)_

## Parameters
- `lhs, rhs`: std::basic_spanbuf objects whose states to swap

## Return value
(none)

## Example
This section is incompleteReason: no example

## See also
- [swap](/cpp/io/basic_spanbuf/swap/)
- [swap](/cpp/utility/swap/)
