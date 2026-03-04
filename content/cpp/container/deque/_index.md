---
title: "std::deque"
source_path: "cpp/container/deque"
header: "<deque>"
---

`std::deque` (double-ended queue) is an indexed sequence container that supports fast insertion and removal at both ends.

Unlike [std::vector](/cpp/container/vector/), a deque does not store its elements in one single contiguous block. It still offers random-access indexing, but its segmented storage changes the iterator-invalidation and memory-locality tradeoffs.

## Declarations
```cpp
template<
class T,
class Allocator = std::allocator<T>
> class deque;
```

```cpp
namespace pmr {
template< class T >
using deque = std::deque<T, std::pmr::polymorphic_allocator<T>>;
}
```
_(since C++17)_

## Example
```cpp
#include <deque>
#include <iostream>
 
int main()
{
    // Create a deque containing integers
    std::deque<int> d = {7, 5, 16, 8};
 
    // Add an integer to the beginning and end of the deque
    d.push_front(13);
    d.push_back(25);
 
    // Iterate and print values of deque
    for (int n : d)
        std::cout << n << ' ';
    std::cout << '\n';
}
```

`deque` is a good fit when the program needs cheap growth at both the front and the back while keeping indexed access.

## Template parameters
- `T`: element type. The exact requirements depend on the operations used. In general, elements must be erasable, and many operations impose stronger construction, assignment, or move requirements.
- `Allocator`: allocator used to obtain storage and manage element lifetimes. It must satisfy the [Allocator](/cpp/named_req/Allocator/) requirements. Since C++20, the program is ill-formed if `Allocator::value_type` is not `T`.

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
| `iterator` | Random-access iterator to `value_type` |
| `const_iterator` | Random-access iterator to `const value_type` |
| `reverse_iterator` | `std::reverse_iterator<iterator>` |
| `const_reverse_iterator` | `std::reverse_iterator<const_iterator>` |

## Iterator invalidation
| Operation | Invalidation |
| --- | --- |
| Read-only operations | Never |
| `swap`, `std::swap` | The past-the-end iterator may be invalidated |
| `shrink_to_fit`, `clear`, `insert`, `emplace`, `push_front`, `push_back`, `emplace_front`, `emplace_back` | All iterators are invalidated |
| `erase` | Erased elements are invalidated; erasing in the middle invalidates all iterators, while erasing at an end is more limited |
| `resize` | Growing invalidates all iterators; shrinking invalidates erased elements and the past-the-end iterator |
| `pop_front`, `pop_back` | The erased element is invalidated; the past-the-end iterator is also invalidated since C++11 |

### Invalidation notes
- Insertions at either end do not invalidate references to existing elements.
- Erasing at either end does not invalidate references to non-erased elements.
- Resizing larger invalidates iterators but does not invalidate references to existing elements.
- Resizing smaller preserves references to non-erased elements.

## Reference map
| Area | Key entries |
| --- | --- |
| Construction and lifetime | [deque::deque](/cpp/container/deque/deque/), [deque::~deque](/cpp/container/deque/~deque/), [deque::operator=](/cpp/container/deque/operator%3D/), [assign](/cpp/container/deque/assign/), [assign_range](/cpp/container/deque/assign_range/), [get_allocator](/cpp/container/deque/get_allocator/) |
| Element access | [at](/cpp/container/deque/at/), [operator[]](/cpp/container/deque/operator_at/), [front](/cpp/container/deque/front/), [back](/cpp/container/deque/back/) |
| Iterators and capacity | [begin](/cpp/container/deque/begin/), [end](/cpp/container/deque/end/), [rbegin](/cpp/container/deque/rbegin/), [rend](/cpp/container/deque/rend/), [empty](/cpp/container/deque/empty/), [size](/cpp/container/deque/size/), [max_size](/cpp/container/deque/max_size/), [shrink_to_fit](/cpp/container/deque/shrink_to_fit/) |
| Modifiers | [clear](/cpp/container/deque/clear/), [insert](/cpp/container/deque/insert/), [insert_range](/cpp/container/deque/insert_range/), [emplace](/cpp/container/deque/emplace/), [erase](/cpp/container/deque/erase/), [push_back](/cpp/container/deque/push_back/), [emplace_back](/cpp/container/deque/emplace_back/), [append_range](/cpp/container/deque/append_range/), [pop_back](/cpp/container/deque/pop_back/), [push_front](/cpp/container/deque/push_front/), [emplace_front](/cpp/container/deque/emplace_front/), [prepend_range](/cpp/container/deque/prepend_range/), [pop_front](/cpp/container/deque/pop_front/), [resize](/cpp/container/deque/resize/), [swap](/cpp/container/deque/swap/) |
| Non-member functions | [comparison operators](/cpp/container/deque/operator_cmp/), [`std::swap(std::deque)`](/cpp/container/deque/swap2/), [erase](/cpp/container/deque/erase2/), [erase_if](/cpp/container/deque/erase2/) |
| Type deduction | [deduction guides](/cpp/container/deque/deduction_guides/) |

## Notes
`deque` offers constant-time insertion and removal at both ends, but it does not provide the same contiguous-storage guarantee as `vector`.

That makes `deque` attractive for front/back growth patterns, but less suitable for APIs that require a pointer to one contiguous array buffer.

### Feature-test macros
| Macro | Value | Std | Feature |
| --- | --- | --- | --- |
| `__cpp_lib_containers_ranges` | `202202L` | C++23 | ranges construction and insertion for containers |

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 230 | C++98 | `T` was not required to be `CopyConstructible` | `T` is also required to be `CopyConstructible` |

## See also
- [vector](/cpp/container/vector/)
- [list](/cpp/container/list/)
- [queue](/cpp/container/queue/)
