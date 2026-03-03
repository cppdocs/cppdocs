---
title: "deduction guides for std::deque"
source_path: "cpp/container/deque/deduction_guides"
header: "<deque>"
category: "container"
since: "C++17"
---

1) This [deduction guide](/cpp/language/ctad/) is provided for deque to allow deduction from an iterator range. This overload participates in overload resolution only if InputIt satisfies [LegacyInputIterator](/cpp/named_req/inputiterator/) and Alloc satisfies [Allocator](/cpp/named_req/allocator/).

## Declarations
```cpp
template< class InputIt,
class Alloc = std::allocator<
typename std::iterator_traits<InputIt>::value_type> >
deque( InputIt, InputIt, Alloc = Alloc() )
-> deque<typename std::iterator_traits<InputIt>::value_type, Alloc>;
```
_(since C++17)_

```cpp
template< ranges::input_range R,
class Alloc = std::allocator<ranges::range_value_t<R>> >
deque( std::from_range_t, R&&, Alloc = Alloc() )
-> deque<ranges::range_value_t<R>, Alloc>;
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
#include <deque>
#include <vector>
 
int main()
{
    std::vector<int> v = {1, 2, 3, 4};
 
    // uses explicit deduction guide to deduce std::deque<int>
    std::deque x(v.begin(), v.end());
 
    // deduces std::deque<std::vector<int>::iterator>
    // first phase of overload resolution for list-initialization selects the candidate
    // synthesized from the initializer-list constructor; second phase is not performed
    // and deduction guide has no effect
    std::deque y{v.begin(), v.end()};
}
```
