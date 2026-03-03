---
title: "std::swap(std::basic_stringstream)"
source_path: "cpp/io/basic_stringstream/swap2"
header: "<sstream>"
category: "io"
since: "C++11"
---

Overloads the [std::swap](/cpp/utility/swap/) algorithm for [std::basic_stringstream](/cpp/io/basic_stringstream/). Exchanges the state of lhs with that of rhs. Effectively calls lhs.swap(rhs).

## Declarations
```cpp
template< class CharT, class Traits, class Alloc >
void swap( std::basic_stringstream<CharT,Traits,Alloc>& lhs,
std::basic_stringstream<CharT,Traits,Alloc>& rhs );
```
_(since C++11)_

## Parameters
- `lhs, rhs`: streams whose state to swap

## Return value
(none)

## Example
This section is incompleteReason: no example

## See also
- [swap](/cpp/io/basic_stringstream/swap/)
