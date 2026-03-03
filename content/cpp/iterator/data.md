---
title: "std::data"
source_path: "cpp/iterator/data"
header: "<array>"
category: "iterator"
since: "C++17"
---

Returns a pointer to the block of memory containing the elements of the range.

## Declarations
```cpp
template< class C >
constexpr auto data( C& c ) -> decltype(c.data());
```
_(since C++17)_

```cpp
template< class C >
constexpr auto data( const C& c ) -> decltype(c.data());
```
_(since C++17)_

```cpp
template< class T, std::size_t N >
constexpr T* data( T (&array)[N] ) noexcept;
```
_(since C++17)_

```cpp
template< class E >
constexpr const E* data( std::initializer_list<E> il ) noexcept;
```
_(since C++17)_

## Parameters
- `c`: a container or view with a data() member function
- `array`: an array of arbitrary type
- `il`: an std::initializer_list

## Notes
The overload for [std::initializer_list](/cpp/utility/initializer_list/) is necessary because it does not have a member function data.

## Example
```cpp
#include <cstring>
#include <iostream>
#include <string>
 
int main()
{
    std::string s{"Hello world!\n"};
 
    char a[20]; // storage for a C-style string
    std::strcpy(a, std::data(s));
//  [s.data(), s.data() + s.size()] is guaranteed to be an NTBS since C++11
 
    std::cout << a;
}
```

## See also
- [ranges::data](/cpp/ranges/data/)
- [ranges::cdata](/cpp/ranges/cdata/)
