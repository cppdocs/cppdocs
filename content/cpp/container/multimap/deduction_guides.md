---
title: "deduction guides for std::multimap"
source_path: "cpp/container/multimap/deduction_guides"
header: "<map>"
category: "container"
since: "C++17"
---

1-4) These [deduction guides](/cpp/language/ctad/) are provided for multimap to allow deduction from an iterator range (overloads (1,3)) and [std::initializer_list](/cpp/utility/initializer_list/) (overloads (2,4)).

## Declarations
```cpp
template< class InputIt,
class Comp = std::less<iter_key_t<InputIt>>,
class Alloc = std::allocator<iter_to_alloc_t<InputIt>> >
multimap( InputIt, InputIt, Comp = Comp(), Alloc = Alloc() )
-> multimap<iter_key_t<InputIt>, iter_val_t<InputIt>, Comp, Alloc>;
```
_(since C++17)_

```cpp
template< class Key,
class T,
class Comp = std::less<Key>,
class Alloc = std::allocator<std::pair<const Key, T>> >
multimap( std::initializer_list<std::pair<Key, T>>, Comp = Comp(), Alloc = Alloc() )
-> multimap<Key, T, Comp, Alloc>;
```
_(since C++17)_

```cpp
template< class InputIt, class Alloc >
multimap( InputIt, InputIt, Alloc )
-> multimap<iter_key_t<InputIt>, iter_val_t<InputIt>,
std::less<iter_key_t<InputIt>>, Alloc>;
```
_(since C++17)_

```cpp
template< class Key, class T, class Alloc >
multimap( std::initializer_list<std::pair<Key, T>>, Alloc )
-> multimap<Key, T, std::less<Key>, Alloc>;
```
_(since C++17)_

```cpp
template< ranges::input_range R, class Compare = std::less<range_key_t<R>,
class Alloc = std::allocator<range_to_alloc_t<R>> >
multimap( std::from_range_t, R&&, Compare = Compare(), Alloc = Alloc() )
-> multimap<range_key_t<R>, range_mapped_t<R>, Compare, Alloc>;
```
_(since C++23)_

```cpp
template< ranges::input_range R, class Alloc >
multimap( std::from_range_t, R&&, Alloc )
-> multimap<range_key_t<R>, range_mapped_t<R>, std::less<range_key_t<R>>, Alloc>;
```
_(since C++23)_

```cpp
Exposition-only helper type aliases
```

```cpp
template< class InputIter >
using iter_val_t =
typename std::iterator_traits<InputIter>::value_type;
```
_(exposition only*)_

```cpp
template< class InputIter >
using iter_key_t =
std::remove_const_t< std::tuple_element_t<0, iter_val_t<InputIter>>>;
```
_(exposition only*)_

```cpp
template< class InputIter >
using iter_mapped_t =
std::tuple_element_t<1, iter_val_t<InputIter>>;
```
_(exposition only*)_

```cpp
template< class InputIter >
using iter_to_alloc_t =
std::pair<std::add_const_t<tuple_element_t<0, iter_val_t<InputIter>>>,
std::tuple_element_t<1, iter_val_t<InputIter>>>;
```
_(exposition only*)_

```cpp
template< ranges::input_range Range >
using range_key_t =
std::remove_const_t<typename ranges::range_value_t<Range>::first_type>;
```
_(since C++23) (exposition only*)_

```cpp
template< ranges::input_range Range >
using range_mapped_t =
typename ranges::range_value_t<Range>::second_type;
```
_(since C++23) (exposition only*)_

```cpp
template< ranges::input_range Range >
using range_to_alloc_t =
std::pair<std::add_const_t<typename ranges::range_value_t<Range>::first_type>,
typename ranges::range_value_t<Range>::second_type>;
```
_(since C++23) (exposition only*)_

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
#include <map>
 
int main()
{
    // std::multimap m1 = {{"foo", 1}, {"bar", 2}};
        // Error: braced-init-list has no type; cannot deduce
        // pair<Key, T> from {"foo", 1} or {"bar", 2}
 
    std::multimap m1 = {std::pair{"foo", 2}, {"bar", 3}}; // guide #2
    std::multimap m2(m1.begin(), m1.end()); // guide #1
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3025 | C++17 | initializer-list guides take std::pair<const Key, T> | use std::pair<Key, T> |
