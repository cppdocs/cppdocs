---
title: "std::basic_string<CharT,Traits,Allocator>::assign"
source_path: "cpp/string/basic_string/assign"
category: "string"
---

Replaces the contents of the string.

## Declarations
```cpp
basic_string& assign( const basic_string& str );
```
_(constexpr since C++20)_

```cpp
basic_string& assign( basic_string&& str ) noexcept(/* see below */);
```
_(since C++11) (constexpr since C++20)_

```cpp
basic_string& assign( size_type count, CharT ch );
```
_(constexpr since C++20)_

```cpp
basic_string& assign( const CharT* s, size_type count );
```
_(constexpr since C++20)_

```cpp
basic_string& assign( const CharT* s );
```
_(constexpr since C++20)_

```cpp
template< class SV >
basic_string& assign( const SV& t );
```
_(since C++17) (constexpr since C++20)_

```cpp
template< class SV >
basic_string& assign( const SV& t,
size_type pos, size_type count = npos);
```
_(since C++17) (constexpr since C++20)_

```cpp
basic_string& assign( const basic_string& str,
size_type pos, size_type count );
```
_(until C++14)_

```cpp
basic_string& assign( const basic_string& str,
size_type pos, size_type count = npos);
```
_(since C++14) (constexpr since C++20)_

```cpp
template< class InputIt >
basic_string& assign( InputIt first, InputIt last );
```
_(constexpr since C++20)_

```cpp
basic_string& assign( std::initializer_list<CharT> ilist );
```
_(since C++11) (constexpr since C++20)_

## Parameters
- `str`: string to be used as source to initialize the characters with
- `count`: size of the resulting string
- `ch`: value to initialize characters of the string with
- `s`: pointer to a character string to use as source to initialize the string with
- `t`: object (convertible to std::basic_string_view) to initialize the characters of the string with
- `pos`: index of the first character to take
- `first, last`: range to copy the characters from
- `ilist`: std::initializer_list to initialize the characters of the string with

## Return value
*this

## Example
```cpp
#include <iostream>
#include <iterator>
#include <string>
 
int main()
{
    std::string s;
    // assign(size_type count, CharT ch)
    s.assign(4, '=');
    std::cout << s << '\n'; // "===="
 
    std::string const c("Exemplary");
    // assign(const basic_string& str)
    s.assign(c);
    std::cout << c << " == " << s << '\n'; // "Exemplary == Exemplary"
 
    // assign(const basic_string& str, size_type pos, size_type count)
    s.assign(c, 0, c.length() - 1);
    std::cout << s << '\n'; // "Exemplar";
 
    // assign(basic_string&& str)
    s.assign(std::string("C++ by ") + "example");
    std::cout << s << '\n'; // "C++ by example"
 
    // assign(const CharT* s, size_type count)
    s.assign("C-style string", 7);
    std::cout << s << '\n'; // "C-style"
 
    // assign(const CharT* s)
    s.assign("C-style\0string");
    std::cout << s << '\n'; // "C-style"
 
    char mutable_c_str[] = "C-style string";
    // assign(InputIt first, InputIt last)
    s.assign(std::begin(mutable_c_str), std::end(mutable_c_str) - 1);
    std::cout << s << '\n'; // "C-style string"
 
    // assign(std::initializer_list<CharT> ilist)
    s.assign({'C', '-', 's', 't', 'y', 'l', 'e'});
    std::cout << s << '\n'; // "C-style"
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 847 | C++98 | there was no exception safety guarantee | added strong exception safety guarantee |
| LWG 2063 | C++11 | non-normative note stated that overload (2)can be implemented by swapping | corrected to require move assignment |
| LWG 2250 | C++98 | the behavior of overload (8) wasundefined if pos > str.size() is true | always throws an exception in this case |
| LWG 2579 | C++98 | overload (1) and the copy assignmentoperator had different effects | they have the same effect |
| LWG 2946 | C++17 | overload (6) caused ambiguity in some cases | avoided by making it a template |

## See also
- [assign_range](/cpp/string/basic_string/assign_range/)
- [(constructor)](/cpp/string/basic_string/basic_string/)
- [operator=](/cpp/string/basic_string/operator/)
