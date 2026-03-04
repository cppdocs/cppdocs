---
title: "std::basic_string"
source_path: "cpp/string/basic_string"
header: "<string>"
---

The class template `std::basic_string` stores and manipulates sequences of [character](/cpp/language/types/#Character_types)-like objects, which are non-array objects of [TrivialType](/cpp/named_req/trivialtype/) and [StandardLayoutType](/cpp/named_req/standardlayouttype/). Character operations are supplied by the `Traits` parameter, typically a specialization of [std::char_traits](/cpp/string/char_traits/).

`std::basic_string` owns its storage, manages dynamic capacity, and provides a contiguous character sequence suitable for text processing, interoperation with C APIs, and general-purpose string algorithms.

From C++20, member functions of `std::basic_string` are broadly `constexpr`, although a `std::string` object usually cannot persist dynamic storage across constant-evaluation boundaries.

## Declarations
```cpp
template<
class CharT,
class Traits = std::char_traits<CharT>,
class Allocator = std::allocator<CharT>
> class basic_string;
```

```cpp
namespace pmr {
template<
class CharT,
class Traits = std::char_traits<CharT>
> using basic_string =
std::basic_string<CharT, Traits, std::pmr::polymorphic_allocator<CharT>>;
}
```
_(since C++17)_

## Common aliases
| Type | Definition |
| --- | --- |
| `std::string` | `std::basic_string<char>` |
| `std::wstring` | `std::basic_string<wchar_t>` |
| `std::u8string` | `std::basic_string<char8_t>` (since C++20) |
| `std::u16string` | `std::basic_string<char16_t>` (since C++11) |
| `std::u32string` | `std::basic_string<char32_t>` (since C++11) |
| `std::pmr::string` | `std::pmr::basic_string<char>` (since C++17) |
| `std::pmr::wstring` | `std::pmr::basic_string<wchar_t>` (since C++17) |
| `std::pmr::u8string` | `std::pmr::basic_string<char8_t>` (since C++20) |
| `std::pmr::u16string` | `std::pmr::basic_string<char16_t>` (since C++17) |
| `std::pmr::u32string` | `std::pmr::basic_string<char32_t>` (since C++17) |

## Template parameters
- `CharT`: character type
- `Traits`: traits class that defines comparison, assignment, and other character operations
- `Allocator`: [Allocator](/cpp/named_req/allocator/) type used for internal storage

## Nested types
| Type | Meaning |
| --- | --- |
| `traits_type` | `Traits` |
| `value_type` | `CharT` |
| `allocator_type` | `Allocator` |
| `size_type` | unsigned integer type used for sizes and indexes |
| `difference_type` | signed integer type used for iterator differences |
| `reference`, `const_reference` | references to characters |
| `pointer`, `const_pointer` | allocator-aware character pointers |
| `iterator`, `const_iterator` | contiguous iterators over the character sequence |
| `reverse_iterator`, `const_reverse_iterator` | reverse iterators over the character sequence |

## Data members
- [`npos`](/cpp/string/basic_string/npos/): special `size_type(-1)` sentinel used by search and substring operations

## Semantics
- A `basic_string` owns a contiguous sequence of characters.
- The stored sequence is suitable for C interop through [`c_str()`](/cpp/string/basic_string/c_str/) and [`data()`](/cpp/string/basic_string/data/), with the usual null-termination guarantees for string access.
- Growth, replacement, and insertion operations may reallocate storage and therefore invalidate references, pointers, and iterators.
- The type models an owning string, unlike [basic_string_view](/cpp/string/basic_string_view/), which is non-owning.

## Example
```cpp
#include <iostream>
#include <string>
 
int main()
{
    using namespace std::literals;
 
    // Creating a string from const char*
    std::string str1 = "hello";
 
    // Creating a string using string literal
    auto str2 = "world"s;
 
    // Concatenating strings
    std::string str3 = str1 + " " + str2;
 
    // Print out the result
    std::cout << str3 << '\n';
 
    std::string::size_type pos = str3.find(" ");
    str1 = str3.substr(pos + 1); // the part after the space
    str2 = str3.substr(0, pos);  // the part till the space
 
    std::cout << str1 << ' ' << str2 << '\n';
 
    // Accessing an element using subscript operator[]
    std::cout << str1[0] << '\n';
    str1[0] = 'W';
    std::cout << str1 << '\n';
}
```

This is the common `basic_string` pattern: owning contiguous text storage, direct character access, and rich search/substring operations on top of dynamically managed capacity.

## Reference map
| Area | Key entries |
| --- | --- |
| Construction and lifetime | [basic_string::basic_string](/cpp/string/basic_string/basic_string/), [basic_string::~basic_string](/cpp/string/basic_string/~basic_string/), [operator=](/cpp/string/basic_string/operator=/), [assign](/cpp/string/basic_string/assign/), [assign_range](/cpp/string/basic_string/assign_range/), [get_allocator](/cpp/string/basic_string/get_allocator/) |
| Element access | [at](/cpp/string/basic_string/at/), [operator[]](/cpp/string/basic_string/operator_at/), [front](/cpp/string/basic_string/front/), [back](/cpp/string/basic_string/back/), [data](/cpp/string/basic_string/data/), [c_str](/cpp/string/basic_string/c_str/), [operator basic_string_view](/cpp/string/basic_string/operator_basic_string_view/) |
| Iterators | [begin, cbegin](/cpp/string/basic_string/begin/), [end, cend](/cpp/string/basic_string/end/), [rbegin, crbegin](/cpp/string/basic_string/rbegin/), [rend, crend](/cpp/string/basic_string/rend/) |
| Capacity | [empty](/cpp/string/basic_string/empty/), [size, length](/cpp/string/basic_string/size/), [max_size](/cpp/string/basic_string/max_size/), [reserve](/cpp/string/basic_string/reserve/), [capacity](/cpp/string/basic_string/capacity/), [shrink_to_fit](/cpp/string/basic_string/shrink_to_fit/) |
| Modifiers | [clear](/cpp/string/basic_string/clear/), [insert](/cpp/string/basic_string/insert/), [insert_range](/cpp/string/basic_string/insert_range/), [erase](/cpp/string/basic_string/erase/), [push_back](/cpp/string/basic_string/push_back/), [pop_back](/cpp/string/basic_string/pop_back/), [append](/cpp/string/basic_string/append/), [append_range](/cpp/string/basic_string/append_range/), [operator+=](/cpp/string/basic_string/operator%2B%3D/), [replace](/cpp/string/basic_string/replace/), [replace_with_range](/cpp/string/basic_string/replace_with_range/), [resize](/cpp/string/basic_string/resize/), [resize_and_overwrite](/cpp/string/basic_string/resize_and_overwrite/), [copy](/cpp/string/basic_string/copy/), [swap](/cpp/string/basic_string/swap/) |
| Search and operations | [find](/cpp/string/basic_string/find/), [rfind](/cpp/string/basic_string/rfind/), [find_first_of](/cpp/string/basic_string/find_first_of/), [find_first_not_of](/cpp/string/basic_string/find_first_not_of/), [find_last_of](/cpp/string/basic_string/find_last_of/), [find_last_not_of](/cpp/string/basic_string/find_last_not_of/), [compare](/cpp/string/basic_string/compare/), [starts_with](/cpp/string/basic_string/starts_with/), [ends_with](/cpp/string/basic_string/ends_with/), [contains](/cpp/string/basic_string/contains/), [substr](/cpp/string/basic_string/substr/) |
| Non-member functions | [operator+](/cpp/string/basic_string/operator+/), [comparison operators](/cpp/string/basic_string/operator_cmp/), [`std::swap(std::basic_string)`](/cpp/string/basic_string/swap2/), [erase](/cpp/string/basic_string/erase2/), [erase_if](/cpp/string/basic_string/erase2/), [operator<<, operator>>](/cpp/string/basic_string/operator_ltltgtgt/), [getline](/cpp/string/basic_string/getline/) |
| Numeric conversions and related surface | [stoi, stol, stoll](/cpp/string/basic_string/stol/), [stoul, stoull](/cpp/string/basic_string/stoul/), [stof, stod, stold](/cpp/string/basic_string/stof/), [to_string](/cpp/string/basic_string/to_string/), [to_wstring](/cpp/string/basic_string/to_wstring/), [deduction guides](/cpp/string/basic_string/deduction_guides/), [hash](/cpp/string/basic_string/hash/), [operator""s](/cpp/string/basic_string/operator%22%22s/) |

## Iterator invalidation
References, pointers, and iterators to string elements may be invalidated by any standard library operation that takes a non-const reference to the string, such as [`std::getline`](/cpp/string/basic_string/getline/), [`std::swap`](/cpp/string/basic_string/swap2/), or stream extraction, and by calling non-const member functions except [`operator[]`](/cpp/string/basic_string/operator_at/), [`at`](/cpp/string/basic_string/at/), [`data`](/cpp/string/basic_string/data/), [`front`](/cpp/string/basic_string/front/), [`back`](/cpp/string/basic_string/back/), [`begin`](/cpp/string/basic_string/begin/), [`rbegin`](/cpp/string/basic_string/rbegin/), [`end`](/cpp/string/basic_string/end/), and [`rend`](/cpp/string/basic_string/rend/).

## Notes
Although the standard required customized `construct`/`destroy` use for `std::basic_string` element lifetime management until C++23, implementations already used the default mechanism in practice. [P1072R10](https://wg21.link/P1072R10) aligned the wording with that established behavior.

| Feature-test macro | Value | Std | Feature |
| --- | --- | --- | --- |
| `__cpp_lib_string_udls` | `201304L` | C++14 | user-defined string literals |
| `__cpp_lib_starts_ends_with` | `201711L` | C++20 | `starts_with()` and `ends_with()` |
| `__cpp_lib_constexpr_string` | `201907L` | C++20 | broader `constexpr` support for `basic_string` |
| `__cpp_lib_string_contains` | `202011L` | C++23 | `contains()` |
| `__cpp_lib_containers_ranges` | `202202L` | C++23 | range-aware construction and insertion |
| `__cpp_lib_resize_and_overwrite` | `202110L` | C++23 | `resize_and_overwrite()` |

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 530 | C++98 | contiguity of `basic_string` storage was accidentally no longer required after LWG 259 | contiguity required again |
| LWG 2861 | C++98 | `value_type` was `Traits::char_type` | changed to `CharT` |
| LWG 2994 (P1148R0) | C++98 | behavior was undefined if `Traits::char_type` or `Allocator::value_type` differed from `CharT` | program is ill-formed in that case |

## See also
- [basic_string_view](/cpp/string/basic_string_view/): non-owning contiguous string view
- [char_traits](/cpp/string/char_traits/): character operations policy used by `basic_string`
