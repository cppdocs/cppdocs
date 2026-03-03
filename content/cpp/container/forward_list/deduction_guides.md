---
title: "deduction guides for std::forward_list"
source_path: "cpp/container/forward_list/deduction_guides"
header: "<forward_list>"
category: "container"
since: "C++17"
---

1) This [deduction guide](/cpp/language/ctad/) is provided for forward_list to allow deduction from an iterator range. This overload participates in overload resolution only if InputIt satisfies [LegacyInputIterator](/cpp/named_req/inputiterator/) and Alloc satisfies [Allocator](/cpp/named_req/allocator/).

## Declarations
```cpp
template< class InputIt,
class Alloc = std::allocator<
typename std::iterator_traits<InputIt>::value_type> >
forward_list( InputIt, InputIt, Alloc = Alloc() )
-> forward_list<typename std::iterator_traits<InputIt>::value_type, Alloc>;
```
_(since C++17)_

```cpp
template< ranges::input_range R,
class Alloc = std::allocator<ranges::range_value_t<R>> >
forward_list( std::from_range_t, R&&, Alloc = Alloc() )
-> forward_list<ranges::range_value_t<R>, Alloc>;
```
_(since C++23)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_containers_ranges
202202L
(C++23)
Ranges-aware construction and insertion; overload (2)

## Example
```cpp
#include <forward_list>
#include <vector>
 
int main()
{
    std::vector<int> v = {1, 2, 3, 4};
 
    // uses explicit deduction guide to deduce std::forward_list<int>
    std::forward_list x(v.begin(), v.end());
 
    // deduces std::forward_list<std::vector<int>::iterator>
    // first phase of overload resolution for list-initialization selects the candidate
    // synthesized from the initializer-list constructor; second phase is not performed
    // and deduction guide has no effect
    std::forward_list y{v.begin(), v.end()};
}
```
