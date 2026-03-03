---
title: "deduction guides for std::multiset"
source_path: "cpp/container/multiset/deduction_guides"
header: "<set>"
category: "container"
since: "C++17"
---

1-4) These [deduction guides](/cpp/language/ctad/) are provided for multiset to allow deduction from an iterator range (overloads (1,3)) and [std::initializer_list](/cpp/utility/initializer_list/) (overloads (2,4)).

## Declarations
```cpp
template<
class InputIt,
class Comp = std::less<typename std::iterator_traits<InputIt>::value_type>,
class Alloc = std::allocator<typename std::iterator_traits<InputIt>::value_type>>
multiset( InputIt, InputIt, Comp = Comp(), Alloc = Alloc() )
-> multiset<typename std::iterator_traits<InputIt>::value_type, Comp, Alloc>;
```
_(since C++17)_

```cpp
template<
class Key, class Comp = std::less<Key>,
class Alloc = std::allocator<Key> >
multiset( std::initializer_list<Key>, Comp = Comp(), Alloc = Alloc() )
-> multiset<Key, Comp, Alloc>;
```
_(since C++17)_

```cpp
template< class InputIt, class Alloc >
multiset( InputIt, InputIt, Alloc )
-> multiset<typename std::iterator_traits<InputIt>::value_type,
std::less<typename std::iterator_traits<InputIt>::value_type>, Alloc>;
```
_(since C++17)_

```cpp
template< class Key, class Alloc >
multiset( std::initializer_list<Key>, Alloc )
-> multiset<Key, std::less<Key>, Alloc>;
```
_(since C++17)_

```cpp
template< ranges::input_range R, class Compare = less<ranges::range_value_t<R>>,
class Alloc = std::allocator<ranges::range_value_t<R>> >
multiset( std::from_range_t, R&&, Compare = Compare(), Alloc = Alloc() )
-> multiset<ranges::range_value_t<R>, Compare, Alloc>;
```
_(since C++23)_

```cpp
template< ranges::input_range R, class Alloc >
multiset( std::from_range_t, R&&, Alloc )
-> multiset<ranges::range_value_t<R>, std::less<ranges::range_value_t<R>>, Alloc>;
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
    // guide #2 deduces std::multiset<int>
    std::multiset s = {1, 2, 3, 4};
 
    // guide #1 deduces std::multiset<int>
    std::multiset s2(s.begin(), s.end());
}
```
