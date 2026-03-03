---
title: "deduction guides for std::stack"
source_path: "cpp/container/stack/deduction_guides"
header: "<stack>"
category: "container"
since: "C++17"
---

These [deduction guides](/cpp/language/ctad/) are provided for stack to allow deduction from underlying container type.

## Declarations
```cpp
template< class Container >
stack( Container )
-> stack<typename Container::value_type, Container>;
```
_(since C++17)_

```cpp
template< class Container, class Alloc >
stack( Container, Alloc )
-> stack<typename Container::value_type, Container>;
```
_(since C++17)_

```cpp
template< class InputIt >
stack( InputIt, InputIt )
-> stack<typename std::iterator_traits<InputIt>::value_type>;
```
_(since C++23)_

```cpp
template< class InputIt, class Alloc >
stack( InputIt, InputIt, Alloc )
-> stack<typename std::iterator_traits<InputIt>::value_type,
std::deque<typename std::iterator_traits<InputIt>::value_type, Alloc>>;
```
_(since C++23)_

```cpp
template< ranges::input_range R >
stack( std::from_range_t, R&& )
-> stack<ranges::range_value_t<R>>;
```
_(since C++23)_

```cpp
template< ranges::input_range R, class Allocator >
stack( std::from_range_t, R&&, Allocator )
-> stack<ranges::range_value_t<R>,
std::deque<ranges::range_value_t<R>, Allocator>>;
```
_(since C++23)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_adaptor_iterator_pair_constructor
202106L
(C++23)
Iterator pair constructors for std::queue and std::stack; overloads (2) and (4)
__cpp_lib_containers_ranges
202202L
(C++23)
Ranges-aware construction and insertion; overloads (5) and (6)

## Example
```cpp
#include <stack>
#include <vector>
 
int main()
{
    std::vector<int> v = {1, 2, 3, 4};
    std::stack s{v}; // guide #1 deduces std::stack<int, vector<int>>
}
```
