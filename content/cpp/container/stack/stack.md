---
title: "std::stack<T,Container>::stack"
source_path: "cpp/container/stack/stack"
category: "container"
since: "C++11"
---

Constructs new underlying container of the container adaptor from a variety of data sources.

## Declarations
```cpp
stack() : stack(Container()) {}
```
_(since C++11)_

```cpp
explicit stack( const Container& cont = Container() );
```
_(until C++11)_

```cpp
explicit stack( const Container& cont );
```
_(since C++11)_

```cpp
explicit stack( Container&& cont );
```
_(since C++11)_

```cpp
stack( const stack& other );
```
_(implicitly declared)_

```cpp
stack( stack&& other );
```
_(since C++11) (implicitly declared)_

```cpp
template< class InputIt >
stack( InputIt first, InputIt last );
```
_(since C++23)_

```cpp
template< class Alloc >
explicit stack( const Alloc& alloc );
```
_(since C++11)_

```cpp
template< class Alloc >
stack( const Container& cont, const Alloc& alloc );
```
_(since C++11)_

```cpp
template< class Alloc >
stack( Container&& cont, const Alloc& alloc );
```
_(since C++11)_

```cpp
template< class Alloc >
stack( const stack& other, const Alloc& alloc );
```
_(since C++11)_

```cpp
template< class Alloc >
stack( stack&& other, const Alloc& alloc );
```
_(since C++11)_

```cpp
template< class InputIt, class Alloc >
stack( InputIt first, InputIt last, const Alloc& alloc );
```
_(since C++23)_

```cpp
template< container-compatible-range<T> R>
stack( std::from_range_t, R&& rg );
```
_(since C++23)_

```cpp
template< container-compatible-range<T> R, class Alloc >
stack( std::from_range_t, R&& rg, const Alloc& alloc );
```
_(since C++23)_

## Parameters
- `alloc`: allocator to use for all memory allocations of the underlying container
- `other`: another container adaptor to be used as source to initialize the underlying container
- `cont`: container to be used as source to initialize the underlying container
- `first, last`: range of elements [first, last) to initialize with
- `rg`: a container compatible range, that is, an input_range whose elements are convertible to T

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_adaptor_iterator_pair_constructor
202106L
(C++23)
Iterator pair constructors for std::queue and std::stack; overloads (6) and (12)
__cpp_lib_containers_ranges
202202L
(C++23)
Ranges-aware construction and insertion; overloads (13) and (14)

## Example
```cpp
#include <cassert>
#include <deque>
#include <iostream>
#include <memory>
#include <ranges>
#include <stack>
 
int main()
{
    std::stack<int> c1;
    c1.push(5);
    assert(c1.size() == 1);
 
    std::stack<int> c2(c1);
    assert(c2.size() == 1);
 
    std::deque<int> deq{3, 1, 4, 1, 5};
    std::stack<int> c3(deq); // overload (2)
    assert(c3.size() == 5);
 
# ifdef __cpp_lib_adaptor_iterator_pair_constructor
    const auto il = {2, 7, 1, 8, 2};
    std::stack<int> c4{il.begin(), il.end()}; // C++23, (6)
    assert(c4.size() == 5);
# endif
 
# if __cpp_lib_containers_ranges >= 202202L
    // C++23, overload (13)
    auto c5 = std::stack(std::from_range_t, std::ranges::iota(0, 42));
    assert(c5.size() == 42);
 
    // the same effect with pipe syntax, internally uses overload (13)
    auto c6 = std::ranges::iota(0, 42) | std::ranges::to<std::stack>();
    assert(c6.size() == 42);
 
    std::allocator<int> alloc;
 
    // C++23, overload (14)
    auto c7 = std::stack(std::from_range_t, std::ranges::iota(0, 42), alloc);
    assert(c7.size() == 42);
 
    // the same effect with pipe syntax, internally uses overload (14)
    auto c8 = std::ranges::iota(0, 42) | std::ranges::to<std::stack>(alloc);
    assert(c8.size() == 42);
# endif
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P0935R0 | C++11 | default constructor was explicit | made implicit |

## See also
- [operator=](/cpp/container/stack/operator/)
