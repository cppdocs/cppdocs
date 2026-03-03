---
title: "std::swap(std::basic_istringstream)"
source_path: "cpp/io/basic_istringstream/swap2"
header: "<sstream>"
category: "io"
since: "C++11"
---

Overloads the [std::swap](/cpp/utility/swap/) algorithm for [std::basic_istringstream](/cpp/io/basic_istringstream/). Exchanges the state of lhs with that of rhs. Effectively calls lhs.swap(rhs).

## Declarations
```cpp
template< class CharT, class Traits, class Alloc >
void swap( std::basic_istringstream<CharT,Traits,Alloc>& lhs,
std::basic_istringstream<CharT,Traits,Alloc>& rhs );
```
_(since C++11)_

## Parameters
- `lhs, rhs`: streams whose state to swap

## Return value
(none)

## Example
This section is incompleteReason: no example

## See also
- [swap](/cpp/io/basic_istringstream/swap/)
