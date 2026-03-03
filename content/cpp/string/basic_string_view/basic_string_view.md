---
title: "std::basic_string_view<CharT,Traits>::basic_string_view"
source_path: "cpp/string/basic_string_view/basic_string_view"
category: "string"
since: "C++17"
---

1) Default constructor. Constructs an empty std::basic_string_view. After construction, [data()](/cpp/string/basic_string_view/data/) is equal to nullptr, and [size()](/cpp/string/basic_string_view/size/) is equal to 0.

## Declarations
```cpp
constexpr basic_string_view() noexcept;
```
_(since C++17)_

```cpp
constexpr basic_string_view( const basic_string_view& other ) noexcept = default;
```
_(since C++17)_

```cpp
constexpr basic_string_view( const CharT* s, size_type count );
```
_(since C++17)_

```cpp
constexpr basic_string_view( const CharT* s );
```
_(since C++17)_

```cpp
template< class It, class End >
constexpr basic_string_view( It first, End last );
```
_(since C++20)_

```cpp
template< class R >
constexpr explicit basic_string_view( R&& r );
```
_(since C++23)_

```cpp
constexpr basic_string_view( std::nullptr_t ) = delete;
```
_(since C++23)_

## Parameters
- `other`: another view to initialize the view with
- `s`: pointer to a character array or a C string to initialize the view with
- `count`: number of characters to include in the view
- `first`: iterator to the first character of the sequence
- `last`: iterator past the last character of the sequence or another sentinel
- `r`: a contiguous range that contains the sequence

## Example
```cpp
#include <array>
#include <iomanip>
#include <iostream>
#include <string>
#include <string_view>
 
int main()
{
    std::string cppstr = "Foo";
    std::string_view cppstr_v(cppstr); // overload (2), after
                                       // std::string::operator string_view
    std::cout << "1) cppstr_v: " << std::quoted(cppstr_v) << '\n';
 
    char array[3] = {'B', 'a', 'r'};
    std::string_view array_v(array, std::size(array)); // overload (3)
    std::cout << "2) array_v: " << std::quoted(array_v) << '\n';
 
    const char* one_0_two = "One\0Two";
 
    std::string_view one_two_v{one_0_two, 7}; // overload (3)
    std::cout << "3) one_two_v: \"";
    for (char c : one_two_v)
        std::cout << (c != '\0' ? c : '?');
    std::cout << "\", one_two_v.size(): " << one_two_v.size() << '\n';
 
    std::string_view one_v{one_0_two}; // overload (4)
    std::cout << "4) one_v: " << std::quoted(one_v) << ", one_v.size(): " 
              << one_v.size() << '\n';
 
    constexpr std::wstring_view wcstr_v = L"xyzzy"; // overload (4)
    std::cout << "5) wcstr_v.size(): " << wcstr_v.size() << '\n';
 
    std::array ar = {'P', 'u', 'b'};
    std::string_view ar_v(ar.begin(), ar.end()); // overload (5), C++20
    std::cout << "6) ar_v: " << std::quoted(ar_v) << '\n';
 
//  std::string_view ar_v2{ar}; // overload (6), OK in C++23
//  std::cout << "ar_v2: " << std::quoted(ar_v2) << '\n'; // ar_v2: "Pub"
 
    [[maybe_unused]] auto zero = [] { /* ... */ return nullptr; };
//  std::string_view s{zero()}; // overload (7), won't compile since C++23
}
```

## See also
- [operator=](/cpp/string/basic_string_view/operator/)
- [(constructor)](/cpp/string/basic_string/basic_string/)
