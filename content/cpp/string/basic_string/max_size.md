---
title: "std::basic_string<CharT,Traits,Allocator>::max_size"
source_path: "cpp/string/basic_string/max_size"
category: "string"
---

Returns the maximum number of elements the string is able to hold due to system or library implementation limitations, i.e. [std::distance](/cpp/iterator/distance/)(begin(), end()) for the largest string.

## Declarations
```cpp
size_type max_size() const;
```
_(noexcept since C++11) (constexpr since C++20)_

## Return value
Maximum number of characters.

## Example
```cpp
#include <array>
#include <climits>
#include <iomanip>
#include <iostream>
#include <locale>
#include <string>
#include <typeinfo>
 
#include <boost/core/demangle.hpp>
 
template<typename T>
void print_basic_string_max_size()
{
    std::basic_string<T> s;
    auto max_size = s.max_size();
    std::cout.imbue(std::locale("en_US.UTF-8"));
    std::cout << "basic_string<" << boost::core::demangle(typeid(T).name())
              << ">:\n\t" << max_size << " = ";
    std::cout << std::setprecision(3) << (double) max_size << " = ";
    std::cout.imbue(std::locale("C"));
    std::cout << std::hex << std::setfill('0') << "0x"
              << std::setw(sizeof(typename decltype(s)::size_type) << 1)
              << max_size << '\n' << std::dec;
};
 
int main()
{
    std::cout << "Pointer size: " << CHAR_BIT * sizeof(void*) << " bits\n"
                 "Maximum sizes:\n";
 
    print_basic_string_max_size<char>();
    print_basic_string_max_size<char16_t>();
    print_basic_string_max_size<char32_t>();
    print_basic_string_max_size<wchar_t>();
    print_basic_string_max_size<long>();
 
    using CharT = std::array<char, 01232>;
    print_basic_string_max_size<CharT>();
}
```

## See also
- [sizelength](/cpp/string/basic_string/size/)
- [sizelength](/cpp/string/basic_string_view/size/)
