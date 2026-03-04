---
title: "std::span"
source_path: "cpp/container/span"
header: "<span>"
since: "C++20"
---

`std::span` is a lightweight non-owning view over a contiguous sequence of objects.

A span can have either a static extent encoded in its type or a dynamic extent carried at runtime. In both cases it provides a container-like interface without owning storage.

## Declarations
```cpp
template< class T, std::size_t Extent = std::dynamic_extent >
class span;
```
_(since C++20)_

## Template parameters
- `T`: element type
- `Extent`: number of elements in the sequence, or [std::dynamic_extent](/cpp/container/span/dynamic_extent/) for runtime-sized spans

## Semantic model
- `span` refers to existing contiguous storage; it does not allocate or own elements.
- A static-extent span carries the extent in its type, while a dynamic-extent span stores the size at runtime.
- Copying a span copies only the view state, not the underlying sequence.
- `span` is the standard-library vocabulary type for "borrowed contiguous range".

## Example
```cpp
#include <algorithm>
#include <cstddef>
#include <iostream>
#include <span>
 
template<class T, std::size_t N>
[[nodiscard]]
constexpr auto slide(std::span<T, N> s, std::size_t offset, std::size_t width)
{
    return s.subspan(offset, offset + width <= s.size() ? width : 0U);
}
 
void println(const auto& seq)
{
    for (const auto& elem : seq)
        std::cout << elem << ' ';
    std::cout << '\n';
}
 
int main()
{
    constexpr int a[]{0, 1, 2, 3, 4, 5, 6, 7, 8};
    constexpr static std::size_t width{6};
 
    for (std::size_t offset{}; ; ++offset)
        if (auto s = slide(std::span{a}, offset, width); !s.empty())
            println(s);
        else
            break;
}
```

This is the core `span` pattern: hand a borrowed window of contiguous storage to an algorithm without copying or owning the data.

## Member types
| Member type | Definition |
| --- | --- |
| `element_type` | `T` |
| `value_type` | `std::remove_cv_t<T>` |
| `size_type` | `std::size_t` |
| `difference_type` | `std::ptrdiff_t` |
| `pointer` | `T*` |
| `const_pointer` | `const T*` |
| `reference` | `T&` |
| `const_reference` | `const T&` |
| `iterator` | contiguous iterator over the element sequence |
| `const_iterator` | `std::const_iterator<iterator>` |
| `reverse_iterator` | `std::reverse_iterator<iterator>` |
| `const_reverse_iterator` | `std::const_iterator<reverse_iterator>` |

`iterator` is mutable when `T` is not `const`. This is one of the key differences between `span<T>` and read-only view types such as [std::basic_string_view](/cpp/string/basic_string_view/).

## Member constant
| Constant | Value |
| --- | --- |
| `extent` | `Extent` |

## Reference map
| Area | Key entries |
| --- | --- |
| Construction and lifetime | [span::span](/cpp/container/span/span/), [span::operator=](/cpp/container/span/operator/) |
| Iterators | [begin, cbegin](/cpp/container/span/begin/), [end, cend](/cpp/container/span/end/), [rbegin, crbegin](/cpp/container/span/rbegin/), [rend, crend](/cpp/container/span/rend/) |
| Element access | [front](/cpp/container/span/front/), [back](/cpp/container/span/back/), [at](/cpp/container/span/at/), [operator[]](/cpp/container/span/operator_at/), [data](/cpp/container/span/data/) |
| Observers | [size](/cpp/container/span/size/), [size_bytes](/cpp/container/span/size_bytes/), [empty](/cpp/container/span/empty/), [`extent`](/cpp/container/span/) |
| Subviews | [first](/cpp/container/span/first/), [last](/cpp/container/span/last/), [subspan](/cpp/container/span/subspan/) |
| Non-member surface | [as_bytes, as_writable_bytes](/cpp/container/span/as_bytes/), [dynamic_extent](/cpp/container/span/dynamic_extent/) |
| Related support | [deduction guides](/cpp/container/span/deduction_guides/) |

## Helper templates
- `ranges::enable_borrowed_range<std::span<T, Extent>> = true` makes `span` a borrowed range.
- `ranges::enable_view<std::span<T, Extent>> = true` makes `span` a view.

## Deduction guides
The class has [deduction guides](/cpp/container/span/deduction_guides/) so construction from arrays and other contiguous sources can infer `T` and, when appropriate, the extent.

## Notes
Specializations of `std::span` were already trivially copyable in practice before that guarantee became a formal requirement in C++23.

### Feature-test macros
| Macro | Value | Standard | Meaning |
| --- | --- | --- | --- |
| `__cpp_lib_span` | `202002L` | C++20 | `std::span` |
| `__cpp_lib_span` | `202311L` | C++26 | `std::span::at` |
| `__cpp_lib_span_initializer_list` | `202311L` | C++26 | construction from `std::initializer_list` |

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3203 | C++20 | it was unclear when pointers, iterators, and references to elements are invalidated | made clear |
| LWG 3903 | C++20 | the declaration of span's destructor was unnecessary | removed the declaration |
| P2325R3 | C++20 | only spans of non-zero static extent were views | any `span` is a view |

## See also
- [std::mdspan](/cpp/container/mdspan/)
- [std::ranges::subrange](/cpp/ranges/subrange/)
- [std::initializer_list](/cpp/utility/initializer_list/)
- [std::basic_string_view](/cpp/string/basic_string_view/)
