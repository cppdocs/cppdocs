---
title: "std::priority_queue<T,Container,Compare>::priority_queue"
source_path: "cpp/container/priority_queue/priority_queue"
category: "container"
since: "C++11"
---

Constructs new underlying container of the container adaptor from a variety of data sources.

## Declarations
```cpp
priority_queue() : priority_queue(Compare(), Container()) {}
```
_(since C++11)_

```cpp
explicit priority_queue( const Compare& compare )
: priority_queue(compare, Container()) {}
```
_(since C++11)_

```cpp
explicit priority_queue( const Compare& compare = Compare(),
const Container& cont = Container() );
```
_(until C++11)_

```cpp
priority_queue( const Compare& compare, const Container& cont );
```
_(since C++11)_

```cpp
priority_queue( const Compare& compare, Container&& cont );
```
_(since C++11)_

```cpp
priority_queue( const priority_queue& other );
```

```cpp
priority_queue( priority_queue&& other );
```
_(since C++11)_

```cpp
template< class InputIt >
priority_queue( InputIt first, InputIt last,
const Compare& compare = Compare() );
```
_(since C++11)_

```cpp
template< class InputIt >
priority_queue( InputIt first, InputIt last,
const Compare& compare = Compare(),
const Container& cont = Container() );
```
_(until C++11)_

```cpp
template< class InputIt >
priority_queue( InputIt first, InputIt last,
const Compare& compare, const Container& cont );
```
_(since C++11)_

```cpp
template< class InputIt >
priority_queue( InputIt first, InputIt last,
const Compare& compare, Container&& cont );
```
_(since C++11)_

```cpp
template< class Alloc >
explicit priority_queue( const Alloc& alloc );
```
_(since C++11)_

```cpp
template< class Alloc >
priority_queue( const Compare& compare, const Alloc& alloc );
```
_(since C++11)_

```cpp
template< class Alloc >
priority_queue( const Compare& compare, const Container& cont,
const Alloc& alloc );
```
_(since C++11)_

```cpp
template< class Alloc >
priority_queue( const Compare& compare, Container&& cont,
const Alloc& alloc );
```
_(since C++11)_

```cpp
template< class Alloc >
priority_queue( const priority_queue& other, const Alloc& alloc );
```
_(since C++11)_

```cpp
template< class Alloc >
priority_queue( priority_queue&& other, const Alloc& alloc );
```
_(since C++11)_

```cpp
template< class InputIt, class Alloc >
priority_queue( InputIt first, InputIt last, const Alloc& alloc );
```
_(since C++11)_

```cpp
template< class InputIt, class Alloc >
priority_queue( InputIt first, InputIt last, const Compare& compare,
const Alloc& alloc );
```
_(since C++11)_

```cpp
template< class InputIt, class Alloc >
priority_queue( InputIt first, InputIt last, const Compare& compare,
const Container& cont, const Alloc& alloc );
```
_(since C++11)_

```cpp
template< class InputIt, class Alloc >
priority_queue( InputIt first, InputIt last, const Compare& compare,
Container&& cont, const Alloc& alloc );
```
_(since C++11)_

```cpp
template< container-compatible-range<T> R >
priority_queue( std::from_range_t, R&& rg,
const Compare& compare = Compare() );
```
_(since C++23)_

```cpp
template< container-compatible-range<T> R, class Alloc >
priority_queue( std::from_range_t, R&& rg,
const Compare& compare, const Alloc& alloc );
```
_(since C++23)_

```cpp
template< container-compatible-range<T> R, class Alloc >
priority_queue( std::from_range_t, R&& rg, const Alloc& alloc );
```
_(since C++23)_

## Parameters
- `alloc`: allocator to use for all memory allocations of the underlying container
- `other`: another container adaptor to be used as source to initialize the underlying container
- `cont`: container to be used as source to initialize the underlying container
- `compare`: the comparison function object to initialize the underlying comparison functor
- `first, last`: a range [first, last) of elements to initialize with
- `rg`: a container compatible range, that is, an input_range whose elements are convertible to T

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_containers_ranges
202202L
(C++23)
Ranges-aware construction and insertion; overloads (20-22)

## Example
```cpp
#include <complex>
#include <functional>
#include <iostream>
#include <queue>
#include <vector>
 
int main()
{
    std::priority_queue<int> pq1;
    pq1.push(5);
    std::cout << "pq1.size() = " << pq1.size() << '\n';
 
    std::priority_queue<int> pq2 {pq1};
    std::cout << "pq2.size() = " << pq2.size() << '\n';
 
    std::vector<int> vec {3, 1, 4, 1, 5};
    std::priority_queue<int> pq3 {std::less<int>(), vec};
    std::cout << "pq3.size() = " << pq3.size() << '\n';
 
    for (std::cout << "pq3 : "; !pq3.empty(); pq3.pop())
        std::cout << pq3.top() << ' ';
    std::cout << '\n';
 
    // Demo With Custom Comparator:
 
    using my_value_t = std::complex<double>;
    using my_container_t = std::vector<my_value_t>;
 
    auto my_comp = [](const my_value_t& z1, const my_value_t& z2)
    {
        return z2.real() < z1.real();
    };
 
    std::priority_queue<my_value_t,
                        my_container_t,
                        decltype(my_comp)> pq4{my_comp};
 
    using namespace std::complex_literals;
    pq4.push(5.0 + 1i);
    pq4.push(3.0 + 2i);
    pq4.push(7.0 + 3i);
 
    for (; !pq4.empty(); pq4.pop())
    {
        const auto& z = pq4.top();
        std::cout << "pq4.top() = " << z << '\n';
    }
 
    // TODO: C++23 range-aware ctors
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P0935R0 | C++11 | default constructor and constructor (4) were explicit | made implicit |
| LWG 3506 | C++11 | allocator-extended iterator-pair constructors were missing | added |
| LWG 3522 | C++11 | constraints on iterator-pair constructors were missing | added |
| LWG 3529 | C++11 | construction from a pair of iterators called insert | constructs the container from them |

## See also
- [operator=](/cpp/container/priority_queue/operator/)
