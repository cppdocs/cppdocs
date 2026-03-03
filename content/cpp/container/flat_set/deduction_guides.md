---
title: "deduction guides for std::flat_set"
source_path: "cpp/container/flat_set/deduction_guides"
header: "<flat_set>"
category: "container"
since: "C++23"
---

These [deduction guides](/cpp/language/ctad/) are provided for to allow deduction from:

## Declarations
```cpp
template< class KeyContainer,
class Compare = std::less<typename KeyContainer::value_type> >
flat_set( KeyContainer, Compare = Compare() )
-> flat_set<typename KeyContainer::value_type, Compare, KeyContainer>;
```
_(since C++23)_

```cpp
template< class KeyContainer, class Allocator >
flat_set( KeyContainer, Allocator )
-> flat_set<typename KeyContainer::value_type,
std::less<typename KeyContainer::value_type>, KeyContainer>;
```
_(since C++23)_

```cpp
template< class KeyContainer, class Compare, class Allocator >
flat_set( KeyContainer, Compare, Allocator )
-> flat_set<typename KeyContainer::value_type, Compare, KeyContainer>;
```
_(since C++23)_

```cpp
template< class KeyContainer,
class Compare = std::less<typename KeyContainer::value_type> >
flat_set( std::sorted_unique_t, KeyContainer, Compare = Compare() )
-> flat_set<typename KeyContainer::value_type, Compare, KeyContainer>;
```
_(since C++23)_

```cpp
template< class KeyContainer, class Allocator >
flat_set( std::sorted_unique_t, KeyContainer, Allocator )
-> flat_set<typename KeyContainer::value_type,
std::less<typename KeyContainer::value_type>, KeyContainer>;
```
_(since C++23)_

```cpp
template< class KeyContainer, class Compare, class Allocator >
flat_set( std::sorted_unique_t, KeyContainer, Compare, Allocator )
-> flat_set<typename KeyContainer::value_type, Compare, KeyContainer>;
```
_(since C++23)_

```cpp
template< class InputIter,
class Compare = std::less</*iter-value-type*/<InputIter>> >
flat_set( InputIter, InputIter, Compare = Compare() )
-> flat_set</*iter-value-type*/<InputIter>, Compare>;
```
_(since C++23)_

```cpp
template< class InputIter,
class Compare = std::less</*iter-value-type*/<InputIter>> >
flat_set( std::sorted_unique_t, InputIter, InputIter, Compare = Compare() )
-> flat_set</*iter-value-type*/<InputIter>, Compare>;
```
_(since C++23)_

```cpp
template< ranges::input_range R,
class Compare = std::less<ranges::range_value_t<R>>,
class Allocator = std::allocator<ranges::range_value_t<R>> >
flat_set( std::from_range_t, R&&, Compare = Compare(), Allocator = Allocator() )
-> flat_set<ranges::range_value_t<R>, Compare,
std::vector<ranges::range_value_t<R>,
/*alloc-rebind*/<Allocator, ranges::range_value_t<R>>>>;
```
_(since C++23)_

```cpp
template< ranges::input_range R, class Allocator >
flat_set( std::from_range_t, R&&, Allocator )
-> flat_set<ranges::range_value_t<R>, std::less<ranges::range_value_t<R>>,
std::vector<ranges::range_value_t<R>,
/*alloc-rebind*/<Allocator, ranges::range_value_t<R>>>>;
```
_(since C++23)_

```cpp
template< class Key, class Compare = std::less<Key> >
flat_set( std::initializer_list<Key>, Compare = Compare() )
-> flat_set<Key, Compare>;
```
_(since C++23)_

```cpp
template< class Key, class Compare = std::less<Key> >
flat_set( std::sorted_unique_t,
std::initializer_list<Key>, Compare = Compare() )
-> flat_set<Key, Compare>;
```
_(since C++23)_

## Example
This section is incompleteReason: no example
