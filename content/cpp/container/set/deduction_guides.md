---
title: "deduction guides for std::set"
source_path: "cpp/container/set/deduction_guides"
header: "<set>"
category: "container"
since: "C++17"
---

1-4) These [deduction guides](/cpp/language/ctad/) are provided for set to allow deduction from an iterator range (overloads (1,3)) and [std::initializer_list](/cpp/utility/initializer_list/) (overloads (2,4)).

## Declarations
```cpp
template<
class InputIt,
class Comp = std::less<typename std::iterator_traits<InputIt>::value_type>,
class Alloc = std::allocator<typename std::iterator_traits<InputIt>::value_type>>
set( InputIt, InputIt, Comp = Comp(), Alloc = Alloc() )
-> set<typename std::iterator_traits<InputIt>::value_type, Comp, Alloc>;
```
_(since C++17)_

```cpp
template<
class Key, class Comp = std::less<Key>,
class Alloc = std::allocator<Key> >
set( std::initializer_list<Key>, Comp = Comp(), Alloc = Alloc() )
-> set<Key, Comp, Alloc>;
```
_(since C++17)_

```cpp
template< class InputIt, class Alloc >
set( InputIt, InputIt, Alloc )
-> set<typename std::iterator_traits<InputIt>::value_type,
std::less<typename std::iterator_traits<InputIt>::value_type>, Alloc>;
```
_(since C++17)_

```cpp
template< class Key, class Alloc >
set( std::initializer_list<Key>, Alloc )
-> set<Key, std::less<Key>, Alloc>;
```
_(since C++17)_

```cpp
template< ranges::input_range R, class Compare = less<ranges::range_value_t<R>>,
class Alloc = std::allocator<ranges::range_value_t<R>> >
set( std::from_range_t, R&&, Compare = Compare(), Alloc = Alloc() )
-> set<ranges::range_value_t<R>, Compare, Alloc>;
```
_(since C++23)_

```cpp
template< ranges::input_range R, class Alloc >
set( std::from_range_t, R&&, Alloc )
-> set<ranges::range_value_t<R>, std::less<ranges::range_value_t<R>>, Alloc>;
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
Ranges-aware construction and insertion; overload (5,6)

## Example
```cpp
#include <set>
 
int main()
{
    // guide #2 deduces std::set<int>
    std::set s = {1, 2, 3, 4};
 
    // guide #1 deduces std::set<int>
    std::set s2(s.begin(), s.end());
}
```
