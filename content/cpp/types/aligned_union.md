---
title: "std::aligned_union"
source_path: "cpp/types/aligned_union"
header: "<type_traits>"
category: "types"
---

Provides the nested type type, which is a [trivial](/cpp/named_req/trivialtype/) [standard-layout](/cpp/named_req/standardlayouttype/) type of a size and alignment suitable for use as uninitialized storage for an object of any of the types listed in Types. The size of the storage is at least Len. std::aligned_union also determines the strictest (largest) alignment requirement among all Types and makes it available as the constant alignment_value.

## Declarations
```cpp
template< std::size_t Len, class... Types >
struct aligned_union;
```
_(since C++11) (deprecated in C++23)_

## Example
```cpp
#include <iostream>
#include <string>
#include <type_traits>
 
int main()
{
    std::cout << sizeof(std::aligned_union_t<0, char>) << ' ' // 1
              << sizeof(std::aligned_union_t<2, char>) << ' ' // 2
              << sizeof(std::aligned_union_t<2, char[3]>) << ' ' // 3 (!)
              << sizeof(std::aligned_union_t<3, char[4]>) << ' ' // 4
              << sizeof(std::aligned_union_t<1, char, int, double>) << ' '    // 8
              << sizeof(std::aligned_union_t<12, char, int, double>) << '\n'; // 16 (!)
 
    using var_t = std::aligned_union<16, int, std::string>;
 
    std::cout << "var_t::alignment_value = " << var_t::alignment_value << '\n'
              << "sizeof(var_t::type) = " << sizeof(var_t::type) << '\n';
 
    var_t::type aligned_storage;
    int* int_ptr = new(&aligned_storage) int(42); // placement new
    std::cout << "*int_ptr = " << *int_ptr << '\n';
 
    std::string* string_ptr = new(&aligned_storage) std::string("bar");
    std::cout << "*string_ptr = " << *string_ptr << '\n';
    *string_ptr = "baz";
    std::cout << "*string_ptr = " << *string_ptr << '\n';
    string_ptr->~basic_string();
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2979 | C++11 | complete type was not required | requires complete types |

## See also
- [alignment_of](/cpp/types/alignment_of/)
- [aligned_storage](/cpp/types/aligned_storage/)
