---
title: "std::size, std::ssize"
source_path: "cpp/iterator/size"
header: "<array>"
category: "iterator"
since: "C++17"
---

Returns the size of the given range.

## Declarations
```cpp
template< class C >
constexpr auto size( const C& c ) -> decltype(c.size());
```
_(since C++17)_

```cpp
template< class C >
constexpr auto ssize( const C& c )
-> std::common_type_t<std::ptrdiff_t,
std::make_signed_t<decltype(c.size())>>;
```
_(since C++20)_

```cpp
template< class T, std::size_t N >
constexpr std::size_t size( const T (&array)[N] ) noexcept;
```
_(since C++17)_

```cpp
template< class T, std::ptrdiff_t N >
constexpr std::ptrdiff_t ssize( const T (&array)[N] ) noexcept;
```
_(since C++20)_

## Parameters
- `c`: a container or view with a size member function
- `array`: an array of arbitrary type

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_nonmember_container_access
201411L
(C++17)
std::size(), std::data and std::empty
__cpp_lib_ssize
201902L
(C++20)
std::ssize() (2,4) and unsigned std::span::size()

## Example
```cpp
#include <cassert>
#include <cstring>
#include <iostream>
#include <vector>
 
int main()
{
    // Works with containers
    std::vector<int> v{3, 1, 4};
    assert(std::size(v) == 3);
 
    // And works with built-in arrays too
    int a[]{-5, 10, 15};
    // Returns the number of elements (not bytes) as opposed to sizeof
    assert(std::size(a) == 3);
    std::cout << "size of a[]: " << sizeof a << '\n'; // 12, if sizeof(int) == 4
 
    // Provides a safe way (compared to sizeof) of getting string buffer size
    const char str[] = "12345";
    // These are fine and give the correct result
    assert(std::size(str) == 6);
    assert(sizeof(str) == 6);
 
    // But use of sizeof here is a common source of bugs
    const char* str_decayed = "12345";
    // std::cout << std::size(str_decayed) << '\n'; // Usefully fails to compile
    std::cout << sizeof(str_decayed) << '\n'; // Prints the size of the pointer!
 
    // Since C++20 the signed size (std::ssize) is available
    auto i = std::ssize(v);
    for (--i; i != -1; --i)
        std::cout << v[i] << (i ? ' ' : '\n');
    assert(i == -1);
 
    // Note that the string literal includes the ending null character, which
    // will be part of the constructed characters array. This makes std::size
    // behave differently from std::strlen and std::string::size:
    constexpr char symbols[] = "0123456789";
 
    static_assert(std::size(symbols) == 11);
    static_assert(std::string(symbols).size() == 10);
    assert(std::strlen(symbols) == 10);
}
```

## See also
- [ptrdiff_t](/cpp/types/ptrdiff_t/)
- [size_t](/cpp/types/size_t/)
- [sizeof](/cpp/language/sizeof/)
- [ranges::size](/cpp/ranges/size/)
- [ranges::ssize](/cpp/ranges/ssize/)
