---
title: "std::is_same"
source_path: "cpp/types/is_same"
header: "<type_traits>"
category: "types"
since: "C++11"
---

If T and U name the same type (taking into account const/volatile qualifications), provides the member constant value equal to true. Otherwise value is false.

## Declarations
```cpp
template< class T, class U >
struct is_same;
```
_(since C++11)_

## Example
```cpp
#include <cstdint>
#include <iostream>
#include <type_traits>
 
int main()
{
    std::cout << std::boolalpha;
 
    // some implementation-defined facts
 
    // usually true if 'int' is 32 bit
    std::cout << std::is_same<int, std::int32_t>::value << ' '; // maybe true
    // possibly true if ILP64 data model is used
    std::cout << std::is_same<int, std::int64_t>::value << ' '; // maybe false
 
    // same tests as above, except using C++17's std::is_same_v<T, U> format
    std::cout << std::is_same_v<int, std::int32_t> << ' ';  // maybe true
    std::cout << std::is_same_v<int, std::int64_t> << '\n'; // maybe false
 
    // compare the types of a couple variables
    long double num1 = 1.0;
    long double num2 = 2.0;
    static_assert( std::is_same_v<decltype(num1), decltype(num2)> == true );
 
    // 'float' is never an integral type
    static_assert( std::is_same<float, std::int32_t>::value == false );
 
    // 'int' is implicitly 'signed'
    static_assert( std::is_same_v<int, int> == true );
    static_assert( std::is_same_v<int, unsigned int> == false );
    static_assert( std::is_same_v<int, signed int> == true );
 
    // unlike other types, 'char' is neither 'unsigned' nor 'signed'
    static_assert( std::is_same_v<char, char> == true );
    static_assert( std::is_same_v<char, unsigned char> == false );
    static_assert( std::is_same_v<char, signed char> == false );
 
    // const-qualified type T is not same as non-const T
    static_assert( !std::is_same<const int, int>() );
}
```

## See also
- [same_as](/cpp/concepts/same_as/)
- [decltype specifier](/cpp/language/decltype/)
