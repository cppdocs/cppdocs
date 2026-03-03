---
title: "std::basic_string<CharT,Traits,Allocator>::append"
source_path: "cpp/string/basic_string/append"
category: "string"
---

Appends additional characters to the string.

## Declarations
```cpp
basic_string& append( size_type count, CharT ch );
```
_(constexpr since C++20)_

```cpp
basic_string& append( const CharT* s, size_type count );
```
_(constexpr since C++20)_

```cpp
basic_string& append( const CharT* s );
```
_(constexpr since C++20)_

```cpp
template< class SV >
basic_string& append( const SV& t );
```
_(since C++17) (constexpr since C++20)_

```cpp
template< class SV >
basic_string& append( const SV& t, size_type pos,
size_type count = npos );
```
_(since C++17) (constexpr since C++20)_

```cpp
basic_string& append( const basic_string& str );
```
_(constexpr since C++20)_

```cpp
basic_string& append( const basic_string& str,
size_type pos, size_type count );
```
_(until C++14)_

```cpp
basic_string& append( const basic_string& str,
size_type pos, size_type count = npos );
```
_(since C++14) (constexpr since C++20)_

```cpp
template< class InputIt >
basic_string& append( InputIt first, InputIt last );
```
_(constexpr since C++20)_

```cpp
basic_string& append( std::initializer_list<CharT> ilist );
```
_(since C++11) (constexpr since C++20)_

## Parameters
- `count`: number of characters to append
- `ch`: character value to append
- `s`: pointer to the character string to append
- `t`: object convertible to std::basic_string_view with the characters to append
- `pos`: the index of the first character to append
- `str`: string to append
- `first, last`: range of characters to append
- `ilist`: initializer list with the characters to append

## Return value
*this

## Example
```cpp
#include <cassert>
#include <string>
 
int main()
{
    std::string str = "std::string";
    const char* cptr = "C-string";
    const char carr[] = "range";
 
    std::string result;
 
    // 1) Append a char 3 times.
    // Note: This is the only overload accepting “CharT”s.
    result.append(3, '*');
    assert(result == "***");
 
    // 2) Append a fixed-length C-string
    result.append(cptr, 5);
    assert(result == "***C-str");
 
    // 3) Append a null-terminated C-string
    // Note: Because “append” returns *this, we can chain calls together.
    result.append(1, ' ').append(cptr);
    assert(result == "***C-str C-string");
 
    // 6) Append a whole string
    result.append(1, ' ').append(str);
    assert(result == "***C-str C-string std::string");
 
    // 7) Append part of a string
    result.append(str, 3, 2);
    assert(result == "***C-str C-string std::string::");
 
    // 8) Append range
    result.append(&carr[2], &carr[3]);
    assert(result == "***C-str C-string std::string::n");
 
    // 9) Append initializer list
    result.append({'p', 'o', 's'});
    assert(result == "***C-str C-string std::string::npos");
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 847 | C++98 | there was no exception safety guarantee | added strong exception safety guarantee |
| LWG 2250 | C++98 | the behavior of overload (7) wasundefined if pos > str.size() is true | always throws an exception in this case |
| LWG 2788 | C++98 | overload (8) used a default constructedallocator to construct the temporary string | obtains the allocatorfrom get_allocator() |
| LWG 2946 | C++17 | overload (4) causes ambiguity in some cases | avoided by making it a template |

## See also
- [append_range](/cpp/string/basic_string/append_range/)
- [operator+=](/cpp/string/basic_string/operator/)
- [strcat](/cpp/string/byte/strcat/)
- [strncat](/cpp/string/byte/strncat/)
- [wcscat](/cpp/string/wide/wcscat/)
- [wcsncat](/cpp/string/wide/wcsncat/)
