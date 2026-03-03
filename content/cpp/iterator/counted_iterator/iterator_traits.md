---
title: "std::iterator_traits<std::counted_iterator>"
source_path: "cpp/iterator/counted_iterator/iterator_traits"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

Inherits the properties from customized (generated from either a standard partial specialization or a program-defined specialization) [std::iterator_traits](/cpp/iterator/iterator_traits/)<I>, with the member type pointer adjusted, where I models [input_iterator](/cpp/iterator/input_iterator/).

## Declarations
```cpp
template< std::input_iterator I >
requires /* see below */
struct iterator_traits<std::counted_iterator<I>> : std::iterator_traits<I> {
using pointer = std::conditional_t<std::contiguous_iterator<I>,
std::add_pointer_t<std::iter_reference_t<I>>,
void>;
};
```
_(since C++20)_

## Example
```cpp
#include <iterator>
#include <list>
#include <type_traits>
#include <vector>
 
int main()
{
    std::vector v{1, 2, 3, 4};
    std::list l{1, 2, 3, 4};
    std::counted_iterator iv{v.begin(), 3};
    std::counted_iterator il{l.begin(), 3};
    static_assert(std::is_same<int*, std::iterator_traits<decltype(iv)>::pointer>());
    static_assert(std::is_same<void, std::iterator_traits<decltype(il)>::pointer>());
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2259R1 | C++20 | there's no requires-clausepointer is unconditionally defined as void | constraint added |

## See also
- [iterator_traits](/cpp/iterator/iterator_traits/)
