---
title: "std::allocator"
source_path: "cpp/memory/allocator"
header: "<memory>"
category: "memory"
---

The std::allocator class template is the default [Allocator](/cpp/named_req/allocator/) used by all standard library containers if no user-specified allocator is provided. The default allocator is stateless, that is, all instances of the given allocator are interchangeable, compare equal and can deallocate memory allocated by any other instance of the same allocator type.

## Declarations
```cpp
template< class T >
struct allocator;
```

```cpp
template<>
struct allocator<void>;
```
_(deprecated in C++17) (removed in C++20)_

## Notes
The member template class rebind provides a way to obtain an allocator for a different type. For example, [std::list](/cpp/container/list/)<T, A> allocates nodes of some internal type Node<T>, using the allocator A::rebind<Node<T>>::other(until C++11)[std::allocator_traits](/cpp/memory/allocator_traits/)<A>::rebind_alloc<Node<T>>, which is implemented in terms of A::rebind<Node<T>>::other if A is an std::allocator(since C++11).

Member type is_always_equal is deprecated via [LWG issue 3170](https://cplusplus.github.io/LWG/issue3170), because it makes custom allocators derived from std::allocator treated as always equal by default. [std::allocator_traits](/cpp/memory/allocator_traits/)<std::allocator<T>>::is_always_equal is not deprecated and its member constant value is true for any T.

## Example
```cpp
#include <iostream>
#include <memory>
#include <string>
 
int main()
{
    // default allocator for ints
    std::allocator<int> alloc1;
 
    // demonstrating the few directly usable members
    static_assert(std::is_same_v<int, decltype(alloc1)::value_type>);
    int* p1 = alloc1.allocate(1); // space for one int
    alloc1.deallocate(p1, 1);     // and it is gone
 
    // Even those can be used through traits though, so no need
    using traits_t1 = std::allocator_traits<decltype(alloc1)>; // The matching trait
    p1 = traits_t1::allocate(alloc1, 1);
    traits_t1::construct(alloc1, p1, 7);  // construct the int
    std::cout << *p1 << '\n';
    traits_t1::deallocate(alloc1, p1, 1); // deallocate space for one int
 
    // default allocator for strings
    std::allocator<std::string> alloc2;
    // matching traits
    using traits_t2 = std::allocator_traits<decltype(alloc2)>;
 
    // Rebinding the allocator using the trait for strings gets the same type
    traits_t2::rebind_alloc<std::string> alloc_ = alloc2;
 
    std::string* p2 = traits_t2::allocate(alloc2, 2); // space for 2 strings
 
    traits_t2::construct(alloc2, p2, "foo");
    traits_t2::construct(alloc2, p2 + 1, "bar");
 
    std::cout << p2[0] << ' ' << p2[1] << '\n';
 
    traits_t2::destroy(alloc2, p2 + 1);
    traits_t2::destroy(alloc2, p2);
    traits_t2::deallocate(alloc2, p2, 2);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2103 | C++11 | redundant comparison between allocator might be required | propagate_on_container_move_assignment provided |
| LWG 2108 | C++11 | there was no way to show allocator is stateless | is_always_equal provided |

## See also
- [allocator_traits](/cpp/memory/allocator_traits/)
- [scoped_allocator_adaptor](/cpp/memory/scoped_allocator_adaptor/)
- [uses_allocator](/cpp/memory/uses_allocator/)
