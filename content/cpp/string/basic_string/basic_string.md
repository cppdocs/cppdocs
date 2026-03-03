---
title: "std::basic_string<CharT,Traits,Allocator>::basic_string"
source_path: "cpp/string/basic_string/basic_string"
category: "string"
since: "C++23"
---

Constructs new string from a variety of data sources and optionally using user supplied allocator alloc.

## Declarations
```cpp
basic_string() : basic_string(Allocator()) {}
```
_(since C++11) (until C++17)_

```cpp
basic_string() noexcept(noexcept(Allocator()))
: basic_string(Allocator()) {}
```
_(since C++17) (constexpr since C++20)_

```cpp
explicit basic_string( const Allocator& alloc = Allocator() );
```
_(until C++11)_

```cpp
explicit basic_string( const Allocator& alloc );
```
_(noexcept since C++17) (constexpr since C++20)_

```cpp
basic_string( size_type count, CharT ch,
const Allocator& alloc = Allocator() );
```
_(constexpr since C++20)_

```cpp
template< class InputIt >
basic_string( InputIt first, InputIt last,
const Allocator& alloc = Allocator() );
```
_(constexpr since C++20)_

```cpp
template< container-compatible-range<CharT> R >
constexpr basic_string( std::from_range_t, R&& rg,
const Allocator& = Allocator());
```
_(since C++23)_

```cpp
basic_string( const CharT* s, size_type count,
const Allocator& alloc = Allocator() );
```
_(constexpr since C++20)_

```cpp
basic_string( const CharT* s, const Allocator& alloc = Allocator() );
```
_(constexpr since C++20)_

```cpp
basic_string( std::nullptr_t ) = delete;
```
_(since C++23)_

```cpp
template< class StringViewLike >
explicit basic_string( const StringViewLike& t,
const Allocator& alloc = Allocator() );
```
_(since C++17) (constexpr since C++20)_

```cpp
template< class StringViewLike >
basic_string( const StringViewLike& t,
size_type pos, size_type count,
const Allocator& alloc = Allocator() );
```
_(since C++17)_

```cpp
basic_string( const basic_string& other );
```
_(constexpr since C++20)_

```cpp
basic_string( basic_string&& other ) noexcept;
```
_(since C++11) (constexpr since C++20)_

```cpp
basic_string( const basic_string& other, const Allocator& alloc );
```
_(since C++11) (constexpr since C++20)_

```cpp
basic_string( basic_string&& other, const Allocator& alloc );
```
_(since C++11) (constexpr since C++20)_

```cpp
basic_string( const basic_string& other, size_type pos,
const Allocator& alloc = Allocator() );
```
_(constexpr since C++20)_

```cpp
constexpr basic_string( basic_string&& other, size_type pos,
const Allocator& alloc = Allocator() );
```
_(since C++23)_

```cpp
basic_string( const basic_string& other,
size_type pos, size_type count,
const Allocator& alloc = Allocator() );
```
_(constexpr since C++20)_

```cpp
constexpr basic_string( basic_string&& other,
size_type pos, size_type count,
const Allocator& alloc = Allocator() );
```
_(since C++23)_

```cpp
basic_string( std::initializer_list<CharT> ilist,
const Allocator& alloc = Allocator() );
```
_(since C++11) (constexpr since C++20)_

## Parameters
- `alloc`: allocator to use for all memory allocations of this string
- `count`: size of the resulting string
- `ch`: value to initialize the string with
- `pos`: position of the first character to include
- `first, last`: range to copy the characters from
- `s`: pointer to an array of characters to use as source to initialize the string with
- `other`: another string to use as source to initialize the string with
- `ilist`: std::initializer_list to initialize the string with
- `t`: object (convertible to std::basic_string_view) to initialize the string with
- `rg`: a container compatible range

## Notes
Initialization with a [string literal](/cpp/language/string_literal/) that contains embedded '\0' characters uses the overload (7), which stops at the first null character. This can be avoided by specifying a different constructor or by using [operator""s](/cpp/string/basic_string/operator""s/):

## Example
```cpp
#include <cassert>
#include <cctype>
#include <iomanip>
#include <iostream>
#include <iterator>
#include <string>
 
int main()
{
    std::cout << "1)  string(); ";
    std::string s1;
    assert(s1.empty() && (s1.length() == 0) && (s1.size() == 0));
    std::cout << "s1.capacity(): " << s1.capacity() << '\n'; // unspecified
 
    std::cout << "3)  string(size_type count, CharT ch): ";
    std::string s2(4, '=');
    std::cout << std::quoted(s2) << '\n'; // "===="
 
    std::cout << "4)  string(InputIt first, InputIt last): ";
    char mutable_c_str[] = "another C-style string";
    std::string s4(std::begin(mutable_c_str) + 8, std::end(mutable_c_str) - 1);
    std::cout << std::quoted(s4) << '\n'; // "C-style string"
 
    std::cout << "6)  string(CharT const* s, size_type count): ";
    std::string s6("C-style string", 7);
    std::cout << std::quoted(s6) << '\n'; // "C-style", i.e. [0, 7)
 
    std::cout << "7)  string(CharT const* s): ";
    std::string s7("C-style\0string");
    std::cout << std::quoted(s7) << '\n'; // "C-style"
 
    std::cout << "11) string(string&): ";
    std::string const other11("Exemplar");
    std::string s11(other11);
    std::cout << std::quoted(s11) << '\n'; // "Exemplar"
 
    std::cout << "12) string(string&&): ";
    std::string s12(std::string("C++ by ") + std::string("example"));
    std::cout << std::quoted(s12) << '\n'; // "C++ by example"
 
    std::cout << "15) string(const string& other, size_type pos): ";
    std::string const other15("Mutatis Mutandis");
    std::string s15(other15, 8);
    std::cout << std::quoted(s15) << '\n'; // "Mutandis", i.e. [8, 16)
 
    std::cout << "17) string(const string& other, size_type pos, size_type count): ";
    std::string const other17("Exemplary");
    std::string s17(other17, 0, other17.length() - 1);
    std::cout << std::quoted(s17) << '\n'; // "Exemplar"
 
    std::cout << "19) string(std::initializer_list<CharT>): ";
    std::string s19({'C', '-', 's', 't', 'y', 'l', 'e'});
    std::cout << std::quoted(s19) << '\n'; // "C-style"
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 301 | C++98 | overload (4) did not use the parameteralloc if InputIt is an integral type | use that parameter |
| LWG 438 | C++98 | overload (4) would only call overload (3)if InputIt is an integral type | calls overload (3) if InputItis not an LegacyInputIterator |
| LWG 847 | C++98 | there was no exception safety guarantee | added strong exception safety guarantee |
| LWG 2193 | C++11 | the default constructor is explicit | made non-explicit |
| LWG 2235 | C++98 | s could be a null pointer value | the behavior is undefined in this case |
| LWG 2250 | C++98 | the behavior of overload (17) was undefinedif pos > other.size() is true | always throws anexception in this case |
| LWG 2583 | C++98 | there was no way to supply an allocator for overload (17) | added overload (15) |
| LWG 2946 | C++17 | overload (9) causes ambiguity in some cases | avoided by making it a template |
| LWG 3076 | C++17 | overloads (3,7) might cause ambiguitiesin class template argument deduction | constrained |
| LWG 3111(P1148R0) | C++98 | the resolution of LWG issue 2235 made thebehavior of basic_string(nullptr, 0) undefined | the behavior is well-defined in this case[1] |

## See also
- [assign](/cpp/string/basic_string/assign/)
- [operator=](/cpp/string/basic_string/operator/)
- [to_string](/cpp/string/basic_string/to_string/)
- [to_wstring](/cpp/string/basic_string/to_wstring/)
- [(constructor)](/cpp/string/basic_string_view/basic_string_view/)
