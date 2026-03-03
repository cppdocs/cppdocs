---
title: "std::experimental::basic_string_view<CharT,Traits>::basic_string_view"
source_path: "cpp/experimental/basic_string_view/basic_string_view"
category: "experimental"
---

1) Default constructor. Constructs an empty basic_string_view.

## Declarations
```cpp
constexpr basic_string_view() noexcept;
```
_(library fundamentals TS)_

```cpp
constexpr basic_string_view( const basic_string_view& other ) noexcept = default;
```
_(library fundamentals TS)_

```cpp
template<class Allocator>
basic_string_view( const std::basic_string<CharT, Traits, Allocator>& str ) noexcept;
```
_(library fundamentals TS)_

```cpp
constexpr basic_string_view( const CharT* s, size_type count );
```
_(library fundamentals TS)_

```cpp
constexpr basic_string_view( const CharT* s );
```
_(library fundamentals TS)_

## Parameters
- `other`: another view to initialize the view with
- `str`: a C++ string object to initialize view with
- `s`: pointer to a character array or a C string to initialize the view with
- `count`: number of characters to include in the view

## Example
```cpp
#include <experimental/string_view>
#include <iostream>
 
int main()
{
    std::string cppstr = "Foo";
    char array[3] = {'B', 'a', 'r'};
 
    std::experimental::string_view cppstr_v(cppstr);
    std::experimental::string_view array_v(array, sizeof array);
 
    std::experimental::wstring_view wcstr_v = L"xyzzy";
 
    std::cout << cppstr_v << '\n'
              << array_v << '\n'
              << wcstr_v.size() << '\n';
}
```

## See also
- [operator=](/cpp/experimental/basic_string_view/operator/)
