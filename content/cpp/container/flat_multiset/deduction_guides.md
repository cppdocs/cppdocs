---
title: "deduction guides for std::flat_multiset"
source_path: "cpp/container/flat_multiset/deduction_guides"
header: "<flat_set>"
category: "container"
since: "C++23"
---

These [deduction guides](/cpp/language/ctad/) are provided for to allow deduction from:

## Declarations
```cpp
template< class KeyContainer,
class Compare = std::less<typename KeyContainer::value_type> >
flat_multiset( KeyContainer, Compare = Compare() )
-> flat_multiset<typename KeyContainer::value_type, Compare, KeyContainer>;
```
_(since C++23)_

```cpp
template< class KeyContainer, class Allocator >
flat_multiset( KeyContainer, Allocator )
-> flat_multiset<typename KeyContainer::value_type,
std::less<typename KeyContainer::value_type>, KeyContainer>;
```
_(since C++23)_

```cpp
template< class KeyContainer, class Compare, class Allocator >
flat_multiset( KeyContainer, Compare, Allocator )
-> flat_multiset<typename KeyContainer::value_type, Compare, KeyContainer>;
```
_(since C++23)_

```cpp
template< class KeyContainer,
class Compare = std::less<typename KeyContainer::value_type> >
flat_multiset( std::sorted_equivalent_t, KeyContainer, Compare = Compare() )
-> flat_multiset<typename KeyContainer::value_type, Compare, KeyContainer>;
```
_(since C++23)_

```cpp
template< class KeyContainer, class Allocator >
flat_multiset( std::sorted_equivalent_t, KeyContainer, Allocator )
-> flat_multiset<typename KeyContainer::value_type,
std::less<typename KeyContainer::value_type>, KeyContainer>;
```
_(since C++23)_

```cpp
template< class KeyContainer, class Compare, class Allocator >
flat_multiset( std::sorted_equivalent_t, KeyContainer, Compare, Allocator )
-> flat_multiset<typename KeyContainer::value_type, Compare, KeyContainer>;
```
_(since C++23)_

```cpp
template< class InputIter,
class Compare = std::less</*iter-value-type*/<InputIter>> >
flat_multiset( InputIter, InputIter, Compare = Compare() )
-> flat_multiset</*iter-value-type*/<InputIter>, Compare>;
```
_(since C++23)_

```cpp
template< class InputIter,
class Compare = std::less</*iter-value-type*/<InputIter>> >
flat_multiset( std::sorted_equivalent_t, InputIter, InputIter, Compare = Compare() )
-> flat_multiset</*iter-value-type*/<InputIter>, Compare>;
```
_(since C++23)_

```cpp
template< ranges::input_range R,
class Compare = std::less<ranges::range_value_t<R>>,
class Allocator = std::allocator<ranges::range_value_t<R>> >
flat_multiset( std::from_range_t, R&&, Compare = Compare(), Allocator = Allocator() )
-> flat_multiset<ranges::range_value_t<R>, Compare,
std::vector<ranges::range_value_t<R>,
/*alloc-rebind*/<Allocator, ranges::range_value_t<R>>>>;
```
_(since C++23)_

```cpp
template< ranges::input_range R, class Allocator >
flat_multiset( std::from_range_t, R&&, Allocator )
-> flat_multiset<ranges::range_value_t<R>, std::less<ranges::range_value_t<R>>,
std::vector<ranges::range_value_t<R>,
/*alloc-rebind*/<Allocator, ranges::range_value_t<R>>>>;
```
_(since C++23)_

```cpp
template< class Key, class Compare = std::less<Key> >
flat_multiset( std::initializer_list<Key>, Compare = Compare() )
-> flat_multiset<Key, Compare>;
```
_(since C++23)_

```cpp
template< class Key, class Compare = std::less<Key> >
flat_multiset( std::sorted_equivalent_t,
std::initializer_list<Key>, Compare = Compare() )
-> flat_multiset<Key, Compare>;
```
_(since C++23)_

## Example
This section is incompleteReason: no example
