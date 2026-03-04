---
title: "std::basic_string_view"
source_path: "cpp/string/basic_string_view"
header: "<string_view>"
since: "C++17"
---

The class template `std::basic_string_view` is a lightweight non-owning view of a constant contiguous character sequence.

`basic_string_view` is for observing text, not owning it. Copying a string view copies only the pointer/length pair, so it is cheap to pass by value, but the referenced characters must outlive the view.

## Declarations
```cpp
template< class CharT, class Traits = std::char_traits<CharT> >
class basic_string_view;
```
_(since C++17)_

## Template parameters
| Parameter | Description |
| --- | --- |
| `CharT` | Character type |
| `Traits` | Character traits type. `Traits::char_type` must be the same type as `CharT`. |

## Semantic model
- A string view does not allocate and does not own storage.
- The viewed character range is constant; the view can be reseated or shortened, but it does not modify the underlying characters.
- Size is tracked explicitly, so a string view may refer to substrings and character ranges that are not null-terminated.
- The view is contiguous and tuple-free: element access, iteration, comparison, and search all operate directly on the referenced range.

## Example
```cpp
#include <iostream>
#include <string_view>
 
int main()
{
    constexpr std::string_view unicode[]{"▀▄─", "▄▀─", "▀─▄", "▄─▀"};
 
    for (int y{}, p{}; y != 6; ++y, p = ((p + 1) % 4))
    {
        for (int x{}; x != 16; ++x)
            std::cout << unicode[p];
        std::cout << '\n';
    }
}
```

This is the central usage pattern: pass a cheap read-only view into existing character storage without copying the string data.

## Member types
| Member type | Definition |
| --- | --- |
| `traits_type` | `Traits` |
| `value_type` | `CharT` |
| `pointer` | `CharT*` |
| `const_pointer` | `const CharT*` |
| `reference` | `CharT&` |
| `const_reference` | `const CharT&` |
| `const_iterator` | implementation-defined constant contiguous iterator over the character sequence |
| `iterator` | `const_iterator` |
| `const_reverse_iterator` | `std::reverse_iterator<const_iterator>` |
| `reverse_iterator` | `const_reverse_iterator` |
| `size_type` | `std::size_t` |
| `difference_type` | `std::ptrdiff_t` |

`iterator` and `const_iterator` are the same type because `basic_string_view` views constant characters.

## Reference map
| Area | Key entries |
| --- | --- |
| Construction and lifetime | [basic_string_view::basic_string_view](/cpp/string/basic_string_view/basic_string_view/), [basic_string_view::operator=](/cpp/string/basic_string_view/operator=/), [swap](/cpp/string/basic_string_view/swap/) |
| Iterators | [begin, cbegin](/cpp/string/basic_string_view/begin/), [end, cend](/cpp/string/basic_string_view/end/), [rbegin, crbegin](/cpp/string/basic_string_view/rbegin/), [rend, crend](/cpp/string/basic_string_view/rend/) |
| Element access | [operator[]](/cpp/string/basic_string_view/operator_at/), [at](/cpp/string/basic_string_view/at/), [front](/cpp/string/basic_string_view/front/), [back](/cpp/string/basic_string_view/back/), [data](/cpp/string/basic_string_view/data/) |
| Capacity and slicing | [size, length](/cpp/string/basic_string_view/size/), [max_size](/cpp/string/basic_string_view/max_size/), [empty](/cpp/string/basic_string_view/empty/), [remove_prefix](/cpp/string/basic_string_view/remove_prefix/), [remove_suffix](/cpp/string/basic_string_view/remove_suffix/), [substr](/cpp/string/basic_string_view/substr/) |
| Comparison and search | [compare](/cpp/string/basic_string_view/compare/), [starts_with](/cpp/string/basic_string_view/starts_with/), [ends_with](/cpp/string/basic_string_view/ends_with/), [contains](/cpp/string/basic_string_view/contains/), [find](/cpp/string/basic_string_view/find/), [rfind](/cpp/string/basic_string_view/rfind/), [find_first_of](/cpp/string/basic_string_view/find_first_of/), [find_last_of](/cpp/string/basic_string_view/find_last_of/), [find_first_not_of](/cpp/string/basic_string_view/find_first_not_of/), [find_last_not_of](/cpp/string/basic_string_view/find_last_not_of/) |
| Constants and non-member functions | [npos](/cpp/string/basic_string_view/npos/), [comparison operators](/cpp/string/basic_string_view/operator_cmp/), [operator<<](/cpp/string/basic_string_view/operator_ltlt/), [`operator""sv`](/cpp/string/basic_string_view/operatorsv/) |
| Related support | [std::hash specializations for string_view types](/cpp/string/basic_string_view/hash/), [deduction guides](/cpp/string/basic_string_view/deduction_guides/) |

## Helper templates
- `ranges::enable_borrowed_range<std::basic_string_view<CharT, Traits>> = true` makes `basic_string_view` a borrowed range in C++20.
- `ranges::enable_view<std::basic_string_view<CharT, Traits>> = true` makes `basic_string_view` a view in C++20.

## Deduction guides
The class has [deduction guides](/cpp/string/basic_string_view/deduction_guides/) so construction from compatible character ranges can infer the `CharT` and `Traits` parameters.

## Notes
It is the programmer's responsibility to ensure that the referenced characters outlive the view. A `std::string_view` can safely refer to a string literal, but it can easily dangle when bound to a temporary `std::string`.

Specializations of `std::basic_string_view` were already trivially copyable in practice before that guarantee became a formal requirement in C++23.

### Feature-test macros
| Macro | Value | Standard | Meaning |
| --- | --- | --- | --- |
| `__cpp_lib_string_view` | `201606L` | C++17 | `std::string_view` |
| `__cpp_lib_string_view` | `201803L` | C++20 | constexpr iterators |
| `__cpp_lib_string_contains` | `202011L` | C++23 | `contains` |

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3203 | C++17 | only pointers, iterators, and references returned from member functions might be invalidated | all pointers, iterators, and references to elements may be invalidated |

## See also
- [std::basic_string](/cpp/string/basic_string/)
- [std::span](/cpp/container/span/)
- [std::initializer_list](/cpp/utility/initializer_list/)
- [list-initialization](/cpp/language/list_initialization/)
