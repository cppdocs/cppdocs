---
title: "operator==,!=,<,<=,>,>=,<=>(std::sub_match)"
source_path: "cpp/regex/sub_match/operator_cmp"
header: "<regex>"
aliases:
  - "/cpp/regex/sub_match/operator/"
category: "regex"
since: "C++11"
---

Compares a sub_match to another sub_match, a [std::string](/cpp/string/basic_string/), a C-style string or a single character.

## Declarations
```cpp
Direct comparison
```

```cpp
template< class BidirIt >
bool operator== ( const std::sub_match<BidirIt>& lhs,
const std::sub_match<BidirIt>& rhs );
```
_(since C++11)_

```cpp
template< class BidirIt >
bool operator!= ( const std::sub_match<BidirIt>& lhs,
const std::sub_match<BidirIt>& rhs );
```
_(since C++11) (until C++20)_

```cpp
template< class BidirIt >
bool operator< ( const std::sub_match<BidirIt>& lhs,
const std::sub_match<BidirIt>& rhs );
```
_(since C++11) (until C++20)_

```cpp
template< class BidirIt >
bool operator<= ( const std::sub_match<BidirIt>& lhs,
const std::sub_match<BidirIt>& rhs );
```
_(since C++11) (until C++20)_

```cpp
template< class BidirIt >
bool operator> ( const std::sub_match<BidirIt>& lhs,
const std::sub_match<BidirIt>& rhs );
```
_(since C++11) (until C++20)_

```cpp
template< class BidirIt >
bool operator>= ( const std::sub_match<BidirIt>& lhs,
const std::sub_match<BidirIt>& rhs );
```
_(since C++11) (until C++20)_

```cpp
template< class BidirIt >
auto operator<=>( const std::sub_match<BidirIt>& lhs,
const std::sub_match<BidirIt>& rhs );
```
_(since C++20)_

```cpp
Comparing with a std::basic_string
```

```cpp
template< class BidirIt, class Traits, class Alloc >
bool operator== ( const std::sub_match<BidirIt>& lhs,
const std::basic_string</*value-type-of*/<BidirIt>,
Traits, Alloc>& str );
```
_(since C++11)_

```cpp
template< class BidirIt, class Traits, class Alloc >
bool operator!= ( const std::sub_match<BidirIt>& lhs,
const std::basic_string</*value-type-of*/<BidirIt>,
Traits, Alloc>& str );
```
_(since C++11) (until C++20)_

```cpp
template< class BidirIt, class Traits, class Alloc >
bool operator< ( const std::sub_match<BidirIt>& lhs,
const std::basic_string</*value-type-of*/<BidirIt>,
Traits, Alloc>& str );
```
_(since C++11) (until C++20)_

```cpp
template< class BidirIt, class Traits, class Alloc >
bool operator<= ( const std::sub_match<BidirIt>& lhs,
const std::basic_string</*value-type-of*/<BidirIt>,
Traits, Alloc>& str );
```
_(since C++11) (until C++20)_

```cpp
template< class BidirIt, class Traits, class Alloc >
bool operator> ( const std::sub_match<BidirIt>& lhs,
const std::basic_string</*value-type-of*/<BidirIt>,
Traits, Alloc>& str );
```
_(since C++11) (until C++20)_

```cpp
template< class BidirIt, class Traits, class Alloc >
bool operator>= ( const std::sub_match<BidirIt>& lhs,
const std::basic_string</*value-type-of*/<BidirIt>,
Traits, Alloc>& str );
```
_(since C++11) (until C++20)_

```cpp
template< class BidirIt, class Traits, class Alloc >
auto operator<=>( const std::sub_match<BidirIt>& lhs,
const std::basic_string</*value-type-of*/<BidirIt>,
Traits, Alloc>& str );
```
_(since C++20)_

```cpp
template< class BidirIt, class Traits, class Alloc >
bool operator== ( const std::basic_string</*value-type-of*/<BidirIt>,
Traits, Alloc>& str,
const std::sub_match<BidirIt>& rhs );
```
_(since C++11) (until C++20)_

```cpp
template< class BidirIt, class Traits, class Alloc >
bool operator!= ( const std::basic_string</*value-type-of*/<BidirIt>,
Traits, Alloc>& str,
const std::sub_match<BidirIt>& rhs );
```
_(since C++11) (until C++20)_

```cpp
template< class BidirIt, class Traits, class Alloc >
bool operator< ( const std::basic_string</*value-type-of*/<BidirIt>,
Traits, Alloc>& str,
const std::sub_match<BidirIt>& rhs );
```
_(since C++11) (until C++20)_

```cpp
template< class BidirIt, class Traits, class Alloc >
bool operator<= ( const std::basic_string</*value-type-of*/<BidirIt>,
Traits, Alloc>& str,
const std::sub_match<BidirIt>& rhs );
```
_(since C++11) (until C++20)_

```cpp
template< class BidirIt, class Traits, class Alloc >
bool operator> ( const std::basic_string</*value-type-of*/<BidirIt>,
Traits, Alloc>& str,
const std::sub_match<BidirIt>& rhs );
```
_(since C++11) (until C++20)_

```cpp
template< class BidirIt, class Traits, class Alloc >
bool operator>= ( const std::basic_string</*value-type-of*/<BidirIt>,
Traits, Alloc>& str,
const std::sub_match<BidirIt>& rhs );
```
_(since C++11) (until C++20)_

```cpp
Comparing with a C-style string
```

```cpp
template< class BidirIt >
bool operator== ( const std::sub_match<BidirIt>& lhs,
const /*value-type-of*/<BidirIt>* s );
```
_(since C++11)_

```cpp
template< class BidirIt >
bool operator!= ( const std::sub_match<BidirIt>& lhs,
const /*value-type-of*/<BidirIt>* s );
```
_(since C++11) (until C++20)_

```cpp
template< class BidirIt >
bool operator< ( const std::sub_match<BidirIt>& lhs,
const /*value-type-of*/<BidirIt>* s );
```
_(since C++11) (until C++20)_

```cpp
template< class BidirIt >
bool operator<= ( const std::sub_match<BidirIt>& lhs,
const /*value-type-of*/<BidirIt>* s );
```
_(since C++11) (until C++20)_

```cpp
template< class BidirIt >
bool operator> ( const std::sub_match<BidirIt>& lhs,
const /*value-type-of*/<BidirIt>* s );
```
_(since C++11) (until C++20)_

```cpp
template< class BidirIt >
bool operator>= ( const std::sub_match<BidirIt>& lhs,
const /*value-type-of*/<BidirIt>* s );
```
_(since C++11) (until C++20)_

```cpp
template< class BidirIt >
auto operator<=>( const std::sub_match<BidirIt>& lhs,
const /*value-type-of*/<BidirIt>* s );
```
_(since C++20)_

```cpp
template< class BidirIt >
bool operator== ( const /*value-type-of*/<BidirIt>* s,
const std::sub_match<BidirIt>& rhs );
```
_(since C++11) (until C++20)_

```cpp
template< class BidirIt >
bool operator!= ( const /*value-type-of*/<BidirIt>* s,
const std::sub_match<BidirIt>& rhs );
```
_(since C++11) (until C++20)_

```cpp
template< class BidirIt >
bool operator< ( const /*value-type-of*/<BidirIt>* s,
const std::sub_match<BidirIt>& rhs );
```
_(since C++11) (until C++20)_

```cpp
template< class BidirIt >
bool operator<= ( const /*value-type-of*/<BidirIt>* s,
const std::sub_match<BidirIt>& rhs );
```
_(since C++11) (until C++20)_

```cpp
template< class BidirIt >
bool operator> ( const /*value-type-of*/<BidirIt>* s,
const std::sub_match<BidirIt>& rhs );
```
_(since C++11) (until C++20)_

```cpp
template< class BidirIt >
bool operator>= ( const /*value-type-of*/<BidirIt>* s,
const std::sub_match<BidirIt>& rhs );
```
_(since C++11) (until C++20)_

```cpp
Comparing with a single character
```

```cpp
template< class BidirIt >
bool operator== ( const std::sub_match<BidirIt>& lhs,
const /*value-type-of*/<BidirIt>& ch );
```
_(since C++11)_

```cpp
template< class BidirIt >
bool operator!= ( const std::sub_match<BidirIt>& lhs,
const /*value-type-of*/<BidirIt>& ch );
```
_(since C++11) (until C++20)_

```cpp
template< class BidirIt >
bool operator< ( const std::sub_match<BidirIt>& lhs,
const /*value-type-of*/<BidirIt>& ch );
```
_(since C++11) (until C++20)_

```cpp
template< class BidirIt >
bool operator<= ( const std::sub_match<BidirIt>& lhs,
const /*value-type-of*/<BidirIt>& ch );
```
_(since C++11) (until C++20)_

```cpp
template< class BidirIt >
bool operator> ( const std::sub_match<BidirIt>& lhs,
const /*value-type-of*/<BidirIt>& ch );
```
_(since C++11) (until C++20)_

```cpp
template< class BidirIt >
bool operator>= ( const std::sub_match<BidirIt>& lhs,
const /*value-type-of*/<BidirIt>& ch );
```
_(since C++11) (until C++20)_

```cpp
template< class BidirIt >
auto operator<=>( const std::sub_match<BidirIt>& lhs,
const /*value-type-of*/<BidirIt>& ch );
```
_(since C++20)_

```cpp
template< class BidirIt >
bool operator== ( const /*value-type-of*/<BidirIt>& ch,
const std::sub_match<BidirIt>& rhs );
```
_(since C++11) (until C++20)_

```cpp
template< class BidirIt >
bool operator!= ( const /*value-type-of*/<BidirIt>& ch,
const std::sub_match<BidirIt>& rhs );
```
_(since C++11) (until C++20)_

```cpp
template< class BidirIt >
bool operator< ( const /*value-type-of*/<BidirIt>& ch,
const std::sub_match<BidirIt>& rhs );
```
_(since C++11) (until C++20)_

```cpp
template< class BidirIt >
bool operator<= ( const /*value-type-of*/<BidirIt>& ch,
const std::sub_match<BidirIt>& rhs );
```
_(since C++11) (until C++20)_

```cpp
template< class BidirIt >
bool operator> ( const /*value-type-of*/<BidirIt>& ch,
const std::sub_match<BidirIt>& rhs );
```
_(since C++11) (until C++20)_

```cpp
template< class BidirIt >
bool operator>= ( const /*value-type-of*/<BidirIt>& ch,
const std::sub_match<BidirIt>& rhs );
```
_(since C++11) (until C++20)_

```cpp
Helper type aliases
```

```cpp
template< class BidirIt >
using /*value-type-of*/ =
typename std::iterator_traits<BidirIt>::value_type;
```
_(exposition only*)_

```cpp
template< class BidirIt >
using /*cat-type-of*/ =
std::compare_three_way_result_t
<std::basic_string</*value-type-of*/<BidirIt>>>;
```
_(since C++20) (exposition only*)_

## Parameters
- `lhs, rhs`: a sub_match to compare
- `str`: a std::basic_string to compare
- `s`: a pointer to a C-style string to compare
- `ch`: a character to compare

## Return value
Let target be the following values:

## Notes
The return type of operator<=> is guaranteed to be a comparison category type. If value-type-of ﻿<BidirIt> is char, wchar_t, char8_t, char16_t, or char32_t, the return type of operator<=> is [std::strong_ordering](/cpp/utility/compare/strong_ordering/).

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2217 | C++11 | for comparisons with std::string, theargument of compare() was str.c_str() | the argument isstring_type(str.data(), str.size())) |

## See also
- [compare](/cpp/regex/sub_match/compare/)
