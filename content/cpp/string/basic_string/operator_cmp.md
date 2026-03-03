---
title: "operator==,!=,<,<=,>,>=,<=>(std::basic_string)"
source_path: "cpp/string/basic_string/operator_cmp"
header: "<string>"
category: "string"
since: "C++20"
---

Compares the contents of a string with another string or a null-terminated array of CharT.

## Declarations
```cpp
Compare two basic_string objects
```

```cpp
template< class CharT, class Traits, class Alloc >
bool operator==( const std::basic_string<CharT,Traits,Alloc>& lhs,
const std::basic_string<CharT,Traits,Alloc>& rhs );
```
_(noexcept since C++11)(constexpr since C++20)_

```cpp
template< class CharT, class Traits, class Alloc >
bool operator!=( const std::basic_string<CharT,Traits,Alloc>& lhs,
const std::basic_string<CharT,Traits,Alloc>& rhs );
```
_(until C++20) (noexcept since C++11)_

```cpp
template< class CharT, class Traits, class Alloc >
bool operator<( const std::basic_string<CharT,Traits,Alloc>& lhs,
const std::basic_string<CharT,Traits,Alloc>& rhs );
```
_(until C++20) (noexcept since C++11)_

```cpp
template< class CharT, class Traits, class Alloc >
bool operator<=( const std::basic_string<CharT,Traits,Alloc>& lhs,
const std::basic_string<CharT,Traits,Alloc>& rhs );
```
_(until C++20) (noexcept since C++11)_

```cpp
template< class CharT, class Traits, class Alloc >
bool operator>( const std::basic_string<CharT,Traits,Alloc>& lhs,
const std::basic_string<CharT,Traits,Alloc>& rhs );
```
_(until C++20) (noexcept since C++11)_

```cpp
template< class CharT, class Traits, class Alloc >
bool operator>=( const std::basic_string<CharT,Traits,Alloc>& lhs,
const std::basic_string<CharT,Traits,Alloc>& rhs );
```
_(until C++20) (noexcept since C++11)_

```cpp
template< class CharT, class Traits, class Alloc >
constexpr /*comp-cat*/
operator<=>( const std::basic_string<CharT,Traits,Alloc>& lhs,
const std::basic_string<CharT,Traits,Alloc>& rhs ) noexcept;
```
_(since C++20)_

```cpp
Compare a basic_string object and null-terminated array of T
```

```cpp
template< class CharT, class Traits, class Alloc >
bool operator==( const std::basic_string<CharT,Traits,Alloc>& lhs,
const CharT* rhs );
```
_(constexpr since C++20)_

```cpp
template< class CharT, class Traits, class Alloc >
bool operator==( const CharT* lhs,
const std::basic_string<CharT,Traits,Alloc>& rhs );
```
_(until C++20)_

```cpp
template< class CharT, class Traits, class Alloc >
bool operator!=( const std::basic_string<CharT,Traits,Alloc>& lhs,
const CharT* rhs );
```
_(until C++20)_

```cpp
template< class CharT, class Traits, class Alloc >
bool operator!=( const CharT* lhs,
const std::basic_string<CharT,Traits,Alloc>& rhs );
```
_(until C++20)_

```cpp
template< class CharT, class Traits, class Alloc >
bool operator<( const std::basic_string<CharT,Traits,Alloc>& lhs,
const CharT* rhs );
```
_(until C++20)_

```cpp
template< class CharT, class Traits, class Alloc >
bool operator<( const CharT* lhs,
const std::basic_string<CharT,Traits,Alloc>& rhs );
```
_(until C++20)_

```cpp
template< class CharT, class Traits, class Alloc >
bool operator<=( const std::basic_string<CharT,Traits,Alloc>& lhs,
const CharT* rhs );
```
_(until C++20)_

```cpp
template< class CharT, class Traits, class Alloc >
bool operator<=( const CharT* lhs,
const std::basic_string<CharT,Traits,Alloc>& rhs );
```
_(until C++20)_

```cpp
template< class CharT, class Traits, class Alloc >
bool operator>( const std::basic_string<CharT,Traits,Alloc>& lhs,
const CharT* rhs );
```
_(until C++20)_

```cpp
template< class CharT, class Traits, class Alloc >
bool operator>( const CharT* lhs,
const std::basic_string<CharT,Traits,Alloc>& rhs );
```
_(until C++20)_

```cpp
template< class CharT, class Traits, class Alloc >
bool operator>=( const std::basic_string<CharT,Traits,Alloc>& lhs,
const CharT* rhs );
```
_(until C++20)_

```cpp
template< class CharT, class Traits, class Alloc >
bool operator>=( const CharT* lhs,
const std::basic_string<CharT,Traits,Alloc>& rhs );
```
_(until C++20)_

```cpp
template< class CharT, class Traits, class Alloc >
constexpr /*comp-cat*/
operator<=>( const std::basic_string<CharT,Traits,Alloc>& lhs,
const CharT* rhs );
```
_(since C++20)_

## Parameters
- `lhs, rhs`: strings whose contents to compare

## Notes
If at least one parameter is of type [std::string](/cpp/string/basic_string/), [std::wstring](/cpp/string/basic_string/), [std::u8string](/cpp/string/basic_string/), [std::u16string](/cpp/string/basic_string/), or [std::u32string](/cpp/string/basic_string/), the return type of operator<=> is std::strong_ordering.

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2064 | C++11 | whether overloads taking two basic_strings are noexcept was inconsistent;overloads taking a CharT* were noexcept but might raise UB | made consistent;noexcept removed |
| LWG 3432 | C++20 | the return type of operator<=> was not required to be a comparison category type | required |
