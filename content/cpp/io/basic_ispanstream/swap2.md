---
title: "std::swap(std::basic_ispanstream)"
source_path: "cpp/io/basic_ispanstream/swap2"
header: "<spanstream>"
category: "io"
since: "C++23"
---

Overloads the [std::swap](/cpp/utility/swap/) algorithm for std::basic_ispanstream. Exchanges the state of lhs with that of rhs. Effectively calls lhs.swap(rhs).

## Declarations
```cpp
template< class CharT, class Traits >
void swap( std::basic_ispanstream<CharT, Traits>& lhs,
std::basic_ispanstream<CharT, Traits>& rhs );
```
_(since C++23)_

## Parameters
- `lhs, rhs`: streams whose state to swap

## Return value
(none)

## Example
This section is incompleteReason: no example

## See also
- [swap](/cpp/io/basic_ispanstream/swap/)
