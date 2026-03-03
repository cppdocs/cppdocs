---
title: "std::basic_regex<CharT,Traits>::assign"
source_path: "cpp/regex/basic_regex/assign"
category: "regex"
since: "C++11"
---

Assigns the contents to the regular expression.

## Declarations
```cpp
basic_regex& assign( const basic_regex& other );
```
_(since C++11)_

```cpp
basic_regex& assign( basic_regex&& other ) noexcept;
```
_(since C++11)_

```cpp
basic_regex& assign( const CharT* s,
flag_type f = std::regex_constants::ECMAScript );
```
_(since C++11)_

```cpp
basic_regex& assign( const CharT* ptr, std::size_t count,
flag_type f = std::regex_constants::ECMAScript );
```
_(since C++11)_

```cpp
template< class ST, class SA >
basic_regex& assign( const std::basic_string<CharT,ST,SA>& str,
flag_type f = std::regex_constants::ECMAScript );
```
_(since C++11)_

```cpp
template< class InputIt >
basic_regex& assign( InputIt first, InputIt last,
flag_type f = std::regex_constants::ECMAScript );
```
_(since C++11)_

```cpp
basic_regex& assign( std::initializer_list<CharT> ilist,
flag_type f = std::regex_constants::ECMAScript );
```
_(since C++11)_

## Parameters
- `other`: another regular expression to assign
- `s`: pointer to a character sequence to assign
- `str`: string to assign
- `first, last`: the range of characters to assign
- `ilist`: initializer list containing characters to assign

## Return value
*this

## Example
This section is incompleteReason: no example

## See also
- [operator=](/cpp/regex/basic_regex/operator/)
