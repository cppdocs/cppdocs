---
title: "std::sub_match<BidirIt>::compare"
source_path: "cpp/regex/sub_match/compare"
category: "regex"
since: "C++11"
---

1) Compares two sub_matches directly by comparing their underlying character sequences. Equivalent to str().compare(m.str()).

## Declarations
```cpp
int compare( const sub_match& m ) const;
```
_(since C++11)_

```cpp
int compare( const string_type& s ) const;
```
_(since C++11)_

```cpp
int compare( const value_type* c ) const;
```
_(since C++11)_

## Parameters
- `m`: a reference to another sub_match
- `s`: a reference to a string to compare to
- `c`: a pointer to a null-terminated character sequence of the underlying value_type to compare to

## Return value
A value less than zero if this sub_match is less than the other character sequence, zero if the both underlying character sequences are equal, greater than zero if this sub_match is greater than the other character sequence.

## Notes
This function is infrequently used directly by application code. Instead, one of the non-member comparison operators is used.

## Example
This section is incompleteReason: no example

## See also
- [compare](/cpp/string/basic_string/compare/)
- [stroperator string_type](/cpp/regex/sub_match/str/)
- [operator==operator!=operator<operator<=operator>operator>=operator<=>](/cpp/regex/sub_match/operator_cmp/)
