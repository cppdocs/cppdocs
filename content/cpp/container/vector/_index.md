---
title: "std::vector"
source_path: "cpp/container/vector"
header: "<vector>"
---

`std::vector` is a sequence container that encapsulates a dynamically sized contiguous array.

Its elements are stored contiguously, so a pointer to an element can be passed to APIs that expect a pointer into an array. That contiguous-storage guarantee is one of the main reasons `vector` is the default owning sequence container in modern C++.

## Declarations
```cpp
template<
class T,
class Allocator = std::allocator<T>
> class vector;
```

```cpp
namespace pmr {
template< class T >
using vector = std::vector<T, std::pmr::polymorphic_allocator<T>>;
}
```
_(since C++17)_

## Template parameters
- `T`: element type. The exact requirements depend on the operations used. In general, elements must be erasable, and many operations impose stronger construction, assignment, or move requirements.
- `Allocator`: allocator used to obtain storage and manage element lifetimes. It must satisfy the [Allocator](/cpp/named_req/Allocator/) requirements. Since C++20, the program is ill-formed if `Allocator::value_type` is not `T`.

### Incomplete-type support
Since C++17, `vector` itself may be instantiated with an incomplete element type if the allocator satisfies the allocator completeness requirements. Individual member functions may still require `T` to be complete at the point of use.

## Specializations
- `std::pmr::vector<T>` is an alias for `std::vector<T, std::pmr::polymorphic_allocator<T>>`.
- [std::vector&lt;bool&gt;](/cpp/container/vector_bool/) is a space-optimized partial specialization with proxy-reference behavior and different practical tradeoffs from ordinary `vector<T>`.

## Example
```cpp
#include <iostream>
#include <vector>
 
int main()
{
    // Create a vector containing integers
    std::vector<int> v = {8, 4, 5, 9};
 
    // Add two more integers to vector
    v.push_back(6);
    v.push_back(9);
 
    // Overwrite element at position 2
    v[2] = -1;
 
    // Print out the vector
    for (int n : v)
        std::cout << n << ' ';
    std::cout << '\n';
}
```

This is the common `vector` usage pattern: contiguous owning storage, random-access element updates, and amortized constant-time growth at the end.

## Member types
| Member type | Definition |
| --- | --- |
| `value_type` | `T` |
| `allocator_type` | `Allocator` |
| `size_type` | Unsigned integer type, usually `std::size_t` |
| `difference_type` | Signed integer type, usually `std::ptrdiff_t` |
| `reference` | `value_type&` |
| `const_reference` | `const value_type&` |
| `pointer` | allocator-aware pointer type to `value_type` |
| `const_pointer` | allocator-aware pointer type to `const value_type` |
| `iterator` | Random-access contiguous iterator to `value_type` |
| `const_iterator` | Random-access contiguous iterator to `const value_type` |
| `reverse_iterator` | `std::reverse_iterator<iterator>` |
| `const_reverse_iterator` | `std::reverse_iterator<const_iterator>` |

## Iterator invalidation
| Operation | Invalidation |
| --- | --- |
| Read-only operations | Never invalidate iterators or references |
| `swap`, `std::swap` | `end()` may change |
| `clear`, `assign`, `operator=` | Always invalidate all iterators, references, and pointers |
| `reserve`, `shrink_to_fit` | If capacity changes, all iterators, references, and pointers are invalidated; otherwise none |
| `erase` | Erased elements and all elements after them, including `end()` |
| `push_back`, `emplace_back` | If capacity changes, all iterators, references, and pointers; otherwise only `end()` |
| `insert`, `emplace` | If capacity changes, all iterators, references, and pointers; otherwise those at or after the insertion point, including `end()` |
| `resize` | If capacity changes, all iterators, references, and pointers; otherwise `end()` and any erased elements |
| `pop_back` | The erased element and `end()` |

Capacity growth is therefore the main boundary between stable and unstable references in `vector` code.

## Reference map
| Area | Key entries |
| --- | --- |
| Construction and lifetime | [vector::vector](/cpp/container/vector/vector/), [vector::~vector](/cpp/container/vector/~vector/), [vector::operator=](/cpp/container/vector/operator%3D/), [assign](/cpp/container/vector/assign/), [assign_range](/cpp/container/vector/assign_range/), [get_allocator](/cpp/container/vector/get_allocator/) |
| Element access | [at](/cpp/container/vector/at/), [operator[]](/cpp/container/vector/operator_at/), [front](/cpp/container/vector/front/), [back](/cpp/container/vector/back/), [data](/cpp/container/vector/data/) |
| Iterators | [begin, cbegin](/cpp/container/vector/begin/), [end, cend](/cpp/container/vector/end/), [rbegin, crbegin](/cpp/container/vector/rbegin/), [rend, crend](/cpp/container/vector/rend/) |
| Capacity | [empty](/cpp/container/vector/empty/), [size](/cpp/container/vector/size/), [max_size](/cpp/container/vector/max_size/), [reserve](/cpp/container/vector/reserve/), [capacity](/cpp/container/vector/capacity/), [shrink_to_fit](/cpp/container/vector/shrink_to_fit/) |
| Modifiers | [clear](/cpp/container/vector/clear/), [insert](/cpp/container/vector/insert/), [insert_range](/cpp/container/vector/insert_range/), [emplace](/cpp/container/vector/emplace/), [erase](/cpp/container/vector/erase/), [push_back](/cpp/container/vector/push_back/), [emplace_back](/cpp/container/vector/emplace_back/), [append_range](/cpp/container/vector/append_range/), [pop_back](/cpp/container/vector/pop_back/), [resize](/cpp/container/vector/resize/), [swap](/cpp/container/vector/swap/) |
| Non-member functions | [comparison operators](/cpp/container/vector/operator_cmp/), [`std::swap(std::vector)`](/cpp/container/vector/swap2/), [erase](/cpp/container/vector/erase2/), [erase_if](/cpp/container/vector/erase2/) |
| Related surface | [deduction guides](/cpp/container/vector/deduction_guides/), [std::vector&lt;bool&gt;](/cpp/container/vector_bool/), [`std::pmr::vector`](/cpp/memory/polymorphic_allocator/) |

## Deduction guides
The class has [deduction guides](/cpp/container/vector/deduction_guides/) so direct construction can infer `T` and, where applicable, allocator-related types from constructor arguments.

## Notes
`vector` is usually the right default when you need random-access iteration, amortized constant-time append at the end, and contiguous storage.

Insertion or erasure in the middle is comparatively expensive because elements after the affected position must be moved or shifted.

### Feature-test macros
| Macro | Value | Std | Feature |
| --- | --- | --- | --- |
| `__cpp_lib_incomplete_container_elements` | `201505L` | C++17 | minimal incomplete-type support |
| `__cpp_lib_containers_ranges` | `202202L` | C++23 | ranges construction and insertion for containers |

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 69 | C++98 | contiguity of the storage for elements of `vector` was not required | required |
| LWG 230 | C++98 | `T` was not required to be `CopyConstructible` | `T` is also required to be `CopyConstructible` |
| LWG 464 | C++98 | access to the underlying storage of an empty `vector` resulted in UB | `data()` provided |

## See also
- [inplace_vector](/cpp/container/inplace_vector/)
- [array](/cpp/container/array/)
- [deque](/cpp/container/deque/)
