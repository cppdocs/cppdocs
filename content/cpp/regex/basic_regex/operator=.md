---
title: "std::basic_regex<CharT,Traits>::operator="
source_path: "cpp/regex/basic_regex/operator"
header: "<regex>"
category: "regex"
since: "C++11"
---

Assigns the contents.

## Declarations
```cpp
basic_regex& operator=( const basic_regex& other );
```
_(since C++11)_

```cpp
basic_regex& operator=( basic_regex&& other ) noexcept;
```
_(since C++11)_

```cpp
basic_regex& operator=( const CharT* ptr );
```
_(since C++11)_

```cpp
basic_regex& operator=( std::initializer_list<CharT> il );
```
_(since C++11)_

```cpp
template< class ST, class SA >
basic_regex& operator=( const std::basic_string<CharT,ST,SA>& p );
```
_(since C++11)_

## Parameters
- `other`: another regex object
- `ptr`: pointer to a null-terminated character string
- `il`: initializer list containing characters to assign
- `p`: string containing characters to assign

## Return value
*this

## See also
- [assign](/cpp/regex/basic_regex/assign/)
