---
title: "std::basic_string<CharT,Traits,Allocator>::replace"
source_path: "cpp/string/basic_string/replace"
category: "string"
---

Replaces the characters in the range [begin() + pos,begin() + [std::min](/cpp/algorithm/min/)(pos + count, size())) or [first,last) with given characters.

## Declarations
```cpp
basic_string& replace( size_type pos, size_type count,
const basic_string& str );
```
_(constexpr since C++20)_

```cpp
basic_string& replace( const_iterator first, const_iterator last,
const basic_string& str );
```
_(constexpr since C++20)_

```cpp
basic_string& replace( size_type pos, size_type count,
const basic_string& str,
size_type pos2, size_type count2 );
```
_(until C++14)_

```cpp
basic_string& replace( size_type pos, size_type count,
const basic_string& str,
size_type pos2, size_type count2 = npos );
```
_(since C++14) (constexpr since C++20)_

```cpp
basic_string& replace( size_type pos, size_type count,
const CharT* cstr, size_type count2 );
```
_(constexpr since C++20)_

```cpp
basic_string& replace( const_iterator first, const_iterator last,
const CharT* cstr, size_type count2 );
```
_(constexpr since C++20)_

```cpp
basic_string& replace( size_type pos, size_type count,
const CharT* cstr );
```
_(constexpr since C++20)_

```cpp
basic_string& replace( const_iterator first, const_iterator last,
const CharT* cstr );
```
_(constexpr since C++20)_

```cpp
basic_string& replace( size_type pos, size_type count,
size_type count2, CharT ch );
```
_(constexpr since C++20)_

```cpp
basic_string& replace( const_iterator first, const_iterator last,
size_type count2, CharT ch );
```
_(constexpr since C++20)_

```cpp
template< class InputIt >
basic_string& replace( const_iterator first, const_iterator last,
InputIt first2, InputIt last2 );
```
_(constexpr since C++20)_

```cpp
basic_string& replace( const_iterator first, const_iterator last,
std::initializer_list<CharT> ilist );
```
_(since C++11) (constexpr since C++20)_

```cpp
template< class StringViewLike >
basic_string& replace( size_type pos, size_type count,
const StringViewLike& t );
```
_(since C++17) (constexpr since C++20)_

```cpp
template< class StringViewLike >
basic_string& replace( const_iterator first, const_iterator last,
const StringViewLike& t );
```
_(since C++17) (constexpr since C++20)_

```cpp
template< class StringViewLike >
basic_string& replace( size_type pos, size_type count,
const StringViewLike& t,
size_type pos2, size_type count2 = npos );
```
_(since C++17) (constexpr since C++20)_

## Parameters
- `pos`: start of the substring that is going to be replaced
- `count`: length of the substring that is going to be replaced
- `first, last`: range of characters that is going to be replaced
- `str`: string to use for replacement
- `pos2`: start of the substring to replace with
- `count2`: number of characters to replace with
- `cstr`: pointer to the character string to use for replacement
- `ch`: character value to use for replacement
- `first2, last2`: range of characters to use for replacement
- `ilist`: initializer list with the characters to use for replacement
- `t`: object (convertible to std::basic_string_view) with the characters to use for replacement

## Return value
*this.

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 847 | C++98 | there was no exception safety guarantee | added strong exception safety guarantee |
| LWG 1323 | C++98 | the types of first and last were iterator | changed to const_iterator |
| LWG 2946 | C++17 | overloads (12,13) caused ambiguity in some cases | avoided by making them templates |

## See also
- [replace_with_range](/cpp/string/basic_string/replace_with_range/)
- [regex_replace](/cpp/regex/regex_replace/)
- [replacereplace_if](/cpp/algorithm/replace/)
