---
title: "deduction guides for std::priority_queue"
source_path: "cpp/container/priority_queue/deduction_guides"
header: "<queue>"
category: "container"
since: "C++17"
---

The following [deduction guides](/cpp/language/ctad/) are provided for [std::priority_queue](/cpp/container/priority_queue/):

## Declarations
```cpp
template< class Comp, class Container >
priority_queue( Comp, Container )
-> priority_queue<typename Container::value_type, Container, Comp>;
```
_(since C++17)_

```cpp
template< class InputIt,
class Comp = std::less</*iter-value-type*/<InputIt>>,
class Container = std::vector</*iter-value-type*/<InputIt> >
priority_queue( InputIt, InputIt, Comp = Comp(), Container = Container() )
-> priority_queue</*iter-value-type*/<InputIt>, Container, Comp>;
```
_(since C++17)_

```cpp
template< class Comp, class Container, class Alloc >
priority_queue( Comp, Container, Alloc )
-> priority_queue<typename Container::value_type, Container, Comp>;
```
_(since C++17)_

```cpp
template< class InputIt, class Alloc >
priority_queue( InputIt, InputIt, Alloc )
-> priority_queue</*iter-value-type*/<InputIt>,
std::vector</*iter-value-type*/<InputIt>, Alloc>,
std::less</*iter-value-type*/<InputIt>>>;
```
_(since C++17)_

```cpp
template< class InputIt, class Comp, class Alloc >
priority_queue( InputIt, InputIt, Comp, Alloc )
-> priority_queue</*iter-value-type*/<InputIt>,
std::vector</*iter-value-type*/<InputIt>, Alloc>, Comp>;
```
_(since C++17)_

```cpp
template< class InputIt, class Comp, class Container, class Alloc >
priority_queue( InputIt, InputIt, Comp, Container, Alloc )
-> priority_queue<typename Container::value_type, Container, Comp>;
```
_(since C++17)_

```cpp
template< ranges::input_range R,
class Comp = std::less<ranges::range_value_t<R>> >
priority_queue( std::from_range_t, R&&, Comp = Comp() )
-> priority_queue<ranges::range_value_t<R>,
std::vector<ranges::range_value_t<R>>, Comp>;
```
_(since C++23)_

```cpp
template< ranges::input_range R, class Comp, class Alloc >
priority_queue( std::from_range_t, R&&, Comp, Alloc )
-> priority_queue<ranges::range_value_t<R>,
std::vector<ranges::range_value_t<R>, Alloc>, Comp>;
```
_(since C++23)_

```cpp
template< ranges::input_range R, class Alloc >
priority_queue( std::from_range_t, R&&, Alloc )
-> priority_queue<ranges::range_value_t<R>,
std::vector<ranges::range_value_t<R>, Alloc>>;
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
Ranges-aware construction and insertion; overloads (7-9)

## Example
```cpp
#include <functional>
#include <iostream>
#include <queue>
#include <vector>
 
int main()
{
    const std::vector<int> v = {1, 2, 3, 4};
    std::priority_queue pq1{std::greater<int>{}, v}; // deduces std::priority_queue<
                                                     //     int, std::vector<int>,
                                                     //     std::greater<int>>
    for (; !pq1.empty(); pq1.pop())
        std::cout << pq1.top() << ' ';
    std::cout << '\n';
 
    std::priority_queue pq2{v.begin(), v.end()}; // deduces std::priority_queue<int>
 
    for (; !pq2.empty(); pq2.pop())
        std::cout << pq2.top() << ' ';
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3506 | C++17 | deduction guides from iterator and allocator were missing | added |
