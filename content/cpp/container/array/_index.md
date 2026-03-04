---
title: "std::array"
source_path: "cpp/container/array"
header: "<array>"
since: "C++11"
---

`std::array` is a fixed-size contiguous container that stores its elements directly inside the object.

It gives built-in arrays a standard container interface without changing the core tradeoff: the size is part of the type and never changes at runtime.

## Declarations
```cpp
template< class T, std::size_t N >
struct array;
```
_(since C++11)_

## Template parameters
- `T`: element type. The exact requirements depend on the operations used. In general, elements must be move-constructible and move-assignable for operations such as assignment and swap.
- `N`: number of elements in the array; `0` is allowed

## Semantic model
- `array<T, N>` owns exactly `N` elements and never reallocates.
- Elements are stored contiguously, so `data()` can be passed to APIs that expect a pointer to an array.
- Unlike a built-in array, `std::array` does not decay to `T*` automatically.
- Unlike built-in arrays, `std::array` is assignable, swappable, tuple-like, and works directly with standard container algorithms.
- Unlike [std::vector](/cpp/container/vector/), the size is fixed for the lifetime of the object.
- `std::array` meets the usual container requirements with two notable exceptions: a default-constructed array is not empty, and `swap` has linear complexity.
- For `N == 0`, `begin() == end()` and that iterator value is unique for the zero-sized array object; calling [front](/cpp/container/array/front/) or [back](/cpp/container/array/back/) is undefined behavior.

## Example
```cpp
#include <algorithm>
#include <array>
#include <iostream>
#include <iterator>
#include <string>
 
int main()
{
    std::array<int, 3> a1{{1, 2, 3}};
    std::array<int, 3> a2 = {1, 2, 3};
 
    std::sort(a1.begin(), a1.end());
    std::ranges::reverse_copy(a2, std::ostream_iterator<int>(std::cout, " "));
    std::cout << '\n';
 
    std::array<std::string, 2> a3{"E", "\u018E"};
    for (const auto& s : a3)
        std::cout << s << ' ';
    std::cout << '\n';
}
```

This is the usual `array` pattern: stack-friendly fixed-size storage with the ergonomics of a standard container.

## Member types
| Member type | Definition |
| --- | --- |
| `value_type` | `T` |
| `size_type` | `std::size_t` |
| `difference_type` | `std::ptrdiff_t` |
| `reference` | `value_type&` |
| `const_reference` | `const value_type&` |
| `pointer` | `value_type*` |
| `const_pointer` | `const value_type*` |
| `iterator` | contiguous iterator to `value_type` |
| `const_iterator` | contiguous iterator to `const value_type` |
| `reverse_iterator` | `std::reverse_iterator<iterator>` |
| `const_reverse_iterator` | `std::reverse_iterator<const_iterator>` |

## Iterator invalidation
`std::array` never reallocates, so iterators and references remain valid for the lifetime of the array object itself. Operations such as [swap](/cpp/container/array/swap/) change element values, not the underlying storage identity.

A notable edge case is `swap`: iterators still refer to the same positions in the same array objects after the call, but the values observed through them may have changed because the elements were swapped.

## Reference map
| Area | Key entries |
| --- | --- |
| Implicit special members | aggregate construction, implicit destructor, implicit copy/move assignment |
| Element access | [at](/cpp/container/array/at/), [operator[]](/cpp/container/array/operator_at/), [front](/cpp/container/array/front/), [back](/cpp/container/array/back/), [data](/cpp/container/array/data/) |
| Iterators | [begin, cbegin](/cpp/container/array/begin/), [end, cend](/cpp/container/array/end/), [rbegin, crbegin](/cpp/container/array/rbegin/), [rend, crend](/cpp/container/array/rend/) |
| Capacity | [empty](/cpp/container/array/empty/), [size](/cpp/container/array/size/), [max_size](/cpp/container/array/max_size/) |
| Operations | [fill](/cpp/container/array/fill/), [swap](/cpp/container/array/swap/) |
| Non-member functions | [comparison operators](/cpp/container/array/operator_cmp/), [get](/cpp/container/array/get/), [`std::swap(std::array)`](/cpp/container/array/swap2/), [to_array](/cpp/container/array/to_array/) |
| Helper classes | [tuple_size&lt;std::array&gt;](/cpp/container/array/tuple_size/), [tuple_element&lt;std::array&gt;](/cpp/container/array/tuple_element/) |
| Related surface | [deduction guides](/cpp/container/array/deduction_guides/) |

## Deduction guides
The class has [deduction guides](/cpp/container/array/deduction_guides/) so direct construction such as `std::array a{1, 2, 3};` can infer both the element type and the array bound.

## Notes
`std::array` is an aggregate, so initialization follows aggregate-initialization rules. That matters especially for default initialization versus value initialization, and for historical C++11 brace quirks.

Because the size is part of the type, `std::array<int, 3>` and `std::array<int, 4>` are different and unrelated types.

## See also
- [std::inplace_vector](/cpp/container/inplace_vector/)
- [std::vector](/cpp/container/vector/)
- [std::deque](/cpp/container/deque/)
- [std::experimental::make_array](/cpp/experimental/make_array/)
