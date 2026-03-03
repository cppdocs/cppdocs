---
title: "std::basic_string<CharT,Traits,Allocator>::insert"
source_path: "cpp/string/basic_string/insert"
category: "string"
---

Inserts characters into the string.

## Declarations
```cpp
basic_string& insert( size_type index, size_type count, CharT ch );
```
_(constexpr since C++20)_

```cpp
basic_string& insert( size_type index, const CharT* s );
```
_(constexpr since C++20)_

```cpp
basic_string& insert( size_type index, const CharT* s, size_type count );
```
_(constexpr since C++20)_

```cpp
basic_string& insert( size_type index, const basic_string& str );
```
_(constexpr since C++20)_

```cpp
basic_string& insert( size_type index, const basic_string& str,
size_type s_index, size_type count );
```
_(until C++14)_

```cpp
basic_string& insert( size_type index, const basic_string& str,
size_type s_index, size_type count = npos );
```
_(since C++14) (constexpr since C++20)_

```cpp
iterator insert( iterator pos, CharT ch );
```
_(until C++11)_

```cpp
iterator insert( const_iterator pos, CharT ch );
```
_(since C++11) (constexpr since C++20)_

```cpp
void insert( iterator pos, size_type count, CharT ch );
```
_(until C++11)_

```cpp
iterator insert( const_iterator pos, size_type count, CharT ch );
```
_(since C++11) (constexpr since C++20)_

```cpp
template< class InputIt >
void insert( iterator pos, InputIt first, InputIt last );
```
_(until C++11)_

```cpp
template< class InputIt >
iterator insert( const_iterator pos, InputIt first, InputIt last );
```
_(since C++11) (constexpr since C++20)_

```cpp
iterator insert( const_iterator pos, std::initializer_list<CharT> ilist );
```
_(since C++11) (constexpr since C++20)_

```cpp
template< class StringViewLike >
basic_string& insert( size_type index, const StringViewLike& t );
```
_(since C++17) (constexpr since C++20)_

```cpp
template< class StringViewLike >
basic_string& insert( size_type index, const StringViewLike& t,
size_type t_index, size_type count = npos );
```
_(since C++17) (constexpr since C++20)_

## Parameters
- `index`: position at which the content will be inserted
- `pos`: iterator before which the characters will be inserted
- `ch`: character to insert
- `count`: number of characters to insert
- `s`: pointer to the character string to insert
- `str`: string to insert
- `first, last`: range defining characters to insert
- `s_index`: position of the first character in str to insert
- `ilist`: std::initializer_list to insert the characters from
- `t`: object (convertible to std::basic_string_view) to insert the characters from
- `t_index`: position of the first character in t to insert

## Example
```cpp
#include <cassert>
#include <iterator>
#include <string>
 
using namespace std::string_literals;
 
int main()
{
    std::string s = "xmplr";
 
    // insert(size_type index, size_type count, char ch)
    s.insert(0, 1, 'E');
    assert("Exmplr" == s);
 
    // insert(size_type index, const char* s)
    s.insert(2, "e");
    assert("Exemplr" == s);
 
    // insert(size_type index, string const& str)
    s.insert(6, "a"s);
    assert("Exemplar" == s);
 
    // insert(size_type index, string const& str,
    //        size_type s_index, size_type count)
    s.insert(8, " is an example string."s, 0, 14);
    assert("Exemplar is an example" == s);
 
    // insert(const_iterator pos, char ch)
    s.insert(s.cbegin() + s.find_first_of('n') + 1, ':');
    assert("Exemplar is an: example" == s);
 
    // insert(const_iterator pos, size_type count, char ch)
    s.insert(s.cbegin() + s.find_first_of(':') + 1, 2, '=');
    assert("Exemplar is an:== example" == s);
 
    // insert(const_iterator pos, InputIt first, InputIt last)
    {
        std::string seq = " string";
        s.insert(s.begin() + s.find_last_of('e') + 1,
            std::begin(seq), std::end(seq));
        assert("Exemplar is an:== example string" == s);
    }
 
    // insert(const_iterator pos, std::initializer_list<char>)
    s.insert(s.cbegin() + s.find_first_of('g') + 1, {'.'});
    assert("Exemplar is an:== example string." == s);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 7 | C++98 | overload (8) referred to a non-existing overload | refers to overload (4) correctly |
| LWG 847 | C++98 | there was no exception safety guarantee | added strong exception safety guarantee |
| LWG 2946 | C++17 | overload (10) caused ambiguity in some cases | avoided by making it a template |

## See also
- [insert_range](/cpp/string/basic_string/insert_range/)
- [append](/cpp/string/basic_string/append/)
- [push_back](/cpp/string/basic_string/push_back/)
