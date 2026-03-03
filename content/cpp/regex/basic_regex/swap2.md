---
title: "std::swap(std::basic_regex)"
source_path: "cpp/regex/basic_regex/swap2"
category: "regex"
since: "C++11"
---

Overloads the [std::swap](/cpp/utility/swap/) algorithm for [std::basic_regex](/cpp/regex/basic_regex/). Exchanges the state of lhs with that of rhs. Effectively calls lhs.swap(rhs).

## Declarations
```cpp
template< class CharT, class Traits >
void swap( basic_regex<CharT, Traits>& lhs, basic_regex<CharT, Traits>& rhs ) noexcept;
```
_(since C++11)_

## Parameters
- `lhs, rhs`: regular expressions to swap

## Return value
(none)

## Example
This section is incompleteReason: no example

## See also
- [swap](/cpp/regex/basic_regex/swap/)
