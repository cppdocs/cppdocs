---
title: "deduction guides for std::unordered_map"
source_path: "cpp/container/unordered_map/deduction_guides"
header: "<unordered_map>"
category: "container"
since: "C++17"
---

1-8) These [deduction guide](/cpp/language/ctad/) are provided for unordered_map to allow deduction from an iterator range (overloads (1,3-5)) and [std::initializer_list](/cpp/utility/initializer_list/) (overloads (2,6-8)).

## Declarations
```cpp
template< class InputIt,
class Hash = std::hash<iter_key_t<InputIt>>,
class Pred = std::equal_to<iter_key_t<InputIt>>,
class Alloc = std::allocator<iter_to_alloc_t<InputIt>> >
unordered_map( InputIt, InputIt,
typename /*see below*/::size_type = /*see below*/,
Hash = Hash(), Pred = Pred(), Alloc = Alloc() )
-> unordered_map<iter_key_t<InputIt>, iter_val_t<InputIt>,
Hash, Pred, Alloc>;
```
_(since C++17)_

```cpp
template< class Key, class T, class Hash = std::hash<Key>,
class Pred = std::equal_to<Key>,
class Alloc = std::allocator<std::pair<const Key, T>> >
unordered_map( std::initializer_list<std::pair<Key, T>>,
typename /*see below*/::size_type = /*see below*/,
Hash = Hash(), Pred = Pred(), Alloc = Alloc() )
-> unordered_map<Key, T, Hash, Pred, Alloc>;
```
_(since C++17)_

```cpp
template< class InputIt, class Alloc >
unordered_map( InputIt, InputIt, typename /*see below*/::size_type, Alloc )
-> unordered_map<iter_key_t<InputIt>, iter_val_t<InputIt>,
std::hash<iter_key_t<InputIt>>,
std::equal_to<iter_key_t<InputIt>>, Alloc>;
```
_(since C++17)_

```cpp
template< class InputIt, class Alloc >
unordered_map( InputIt, InputIt, Alloc )
-> unordered_map<iter_key_t<InputIt>, iter_val_t<InputIt>,
std::hash<iter_key_t<InputIt>>,
std::equal_to<iter_key_t<InputIt>>, Alloc>;
```
_(since C++17)_

```cpp
template< class InputIt, class Hash, class Alloc >
unordered_map( InputIt, InputIt, typename /*see below*/::size_type, Hash, Alloc )
-> unordered_map<iter_key_t<InputIt>, iter_val_t<InputIt>, Hash,
std::equal_to<iter_key_t<InputIt>>, Alloc>;
```
_(since C++17)_

```cpp
template< class Key, class T, typename Alloc >
unordered_map( std::initializer_list<std::pair<Key, T>>,
typename /*see below*/::size_type, Alloc )
-> unordered_map<Key, T, std::hash<Key>, std::equal_to<Key>, Alloc>;
```
_(since C++17)_

```cpp
template< class Key, class T, typename Alloc >
unordered_map( std::initializer_list<std::pair<Key, T>>, Alloc )
-> unordered_map<Key, T, std::hash<Key>, std::equal_to<Key>, Alloc>;
```
_(since C++17)_

```cpp
template< class Key, class T, class Hash, class Alloc >
unordered_map( std::initializer_list<std::pair<Key, T>>,
typename /*see below*/::size_type, Hash, Alloc )
-> unordered_map<Key, T, Hash, std::equal_to<Key>, Alloc>;
```
_(since C++17)_

```cpp
template< ranges::input_range R,
class Hash = std::hash<range_key_t<R>>,
class Pred = std::equal_to<range_key_t<R>>,
class Alloc = std::allocator<range_to_alloc_t<R>> >
unordered_map( std::from_range_t, R&&,
typename /* see description */::size_type = /* see description */,
Hash = Hash(), Pred = Pred(), Alloc = Alloc() )
-> unordered_map<range_key_t<R>, range_mapped_t<R>,
Hash, Pred, Alloc>;
```
_(since C++23)_

```cpp
template< ranges::input_range R, class Alloc >
unordered_map( std::from_range_t, R&&,
typename /* see description */::size_type, Alloc )
-> unordered_map<range_key_t<R>, range_mapped_t<R>,
std::hash<range_key_t<R>>,
std::equal_to<range_key_t<R>>, Alloc>;
```
_(since C++23)_

```cpp
template< ranges::input_range R, class Alloc >
unordered_map( std::from_range_t, R&&, Alloc )
-> unordered_map<range_key_t<R>, range_mapped_t<R>,
std::hash<range_key_t<R>>,
std::equal_to<range_key_t<R>>, Alloc>;
```
_(since C++23)_

```cpp
template< ranges::input_range R, class Hash, class Alloc >
unordered_map( std::from_range_t, R&&, typename /* see description */::size_type,
Hash, Alloc )
-> unordered_map<range_key_t<R>, range_mapped_t<R>, Hash,
std::equal_to<range_key_t<R>>, Alloc>;
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
Ranges-aware construction and insertion; overloads (9-12)

## Example
```cpp
#include <unordered_map>
 
int main()
{
    // std::unordered_map m1 = {{"foo", 1}, {"bar", 2}};
        // Error: braced-init-list has no type cannot
        // deduce pair<Key, T> from {"foo", 1} or {"bar", 2}
 
    std::unordered_map m1 = {std::pair{"foo", 2}, {"bar", 3}}; // guide #2
    std::unordered_map m2(m1.begin(), m1.end()); // guide #1
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3025 | C++17 | initializer-list guides take std::pair<const Key, T> | use std::pair<Key, T> |
