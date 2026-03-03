---
title: "deduction guides for std::flat_map"
source_path: "cpp/container/flat_map/deduction_guides"
header: "<flat_map>"
category: "container"
since: "C++23"
---

These [deduction guides](/cpp/language/ctad/) are provided for to allow deduction from:

## Declarations
```cpp
template< class KeyContainer, class MappedContainer,
class Compare = std::less<typename KeyContainer::value_type> >
flat_map( KeyContainer, MappedContainer, Compare = Compare() )
-> flat_map<typename KeyContainer::value_type,
typename MappedContainer::value_type,
Compare, KeyContainer, MappedContainer>;
```
_(since C++23)_

```cpp
template< class KeyContainer, class MappedContainer, class Allocator >
flat_map( KeyContainer, MappedContainer, Allocator )
-> flat_map<typename KeyContainer::value_type,
typename MappedContainer::value_type,
std::less<typename KeyContainer::value_type>,
KeyContainer, MappedContainer>;
```
_(since C++23)_

```cpp
template< class KeyContainer, class MappedContainer,
class Compare, class Allocator >
flat_map( KeyContainer, MappedContainer, Compare, Allocator )
-> flat_map<typename KeyContainer::value_type,
typename MappedContainer::value_type,
Compare, KeyContainer, MappedContainer>;
```
_(since C++23)_

```cpp
template< class KeyContainer, class MappedContainer,
class Compare = std::less<typename KeyContainer::value_type> >
flat_map( std::sorted_unique_t, KeyContainer, MappedContainer,
Compare = Compare() )
-> flat_map<typename KeyContainer::value_type,
typename MappedContainer::value_type,
Compare, KeyContainer, MappedContainer>;
```
_(since C++23)_

```cpp
template< class KeyContainer, class MappedContainer, class Allocator >
flat_map( std::sorted_unique_t, KeyContainer, MappedContainer,
Allocator )
-> flat_map<typename KeyContainer::value_type,
typename MappedContainer::value_type,
std::less<typename KeyContainer::value_type>,
KeyContainer, MappedContainer>;
```
_(since C++23)_

```cpp
template< class KeyContainer, class MappedContainer,
class Compare, class Allocator>
flat_map( std::sorted_unique_t, KeyContainer, MappedContainer,
Compare, Allocator )
-> flat_map<typename KeyContainer::value_type,
typename MappedContainer::value_type,
Compare, KeyContainer, MappedContainer>;
```
_(since C++23)_

```cpp
template< class InputIter,
class Compare = std::less</*iter-key-type*/<InputIter>> >
flat_map( InputIter, InputIter, Compare = Compare() )
-> flat_map</*iter-key-type*/<InputIter>,
/*iter-mapped-type*/<InputIter>, Compare>;
```
_(since C++23)_

```cpp
template< class InputIter,
class Compare = std::less</*iter-key-type*/<InputIter>> >
flat_map( std::sorted_unique_t, InputIter, InputIter,
Compare = Compare() )
-> flat_map</*iter-key-type*/<InputIter>,
/*iter-mapped-type*/<InputIter>, Compare>;
```
_(since C++23)_

```cpp
template< ranges::input_range R,
class Compare = std::less</*range-key-type*/<R>>,
class Allocator = allocator<byte> >
flat_map( std::from_range_t, R&&, Compare = Compare(),
Allocator = Allocator() )
-> flat_map</*range-key-type*/<R>, /*range-mapped-type*/<R>, Compare,
std::vector</*range-key-type*/<R>,
/*alloc-rebind*/<Allocator,
/*range-key-type*/<R>>>,
std::vector</*range-mapped-type*/<R>,
/*alloc-rebind*/<Allocator,
/*range-mapped-type*/<R>>>>;
```
_(since C++23)_

```cpp
template< ranges::input_range R, class Allocator >
flat_map( std::from_range_t, R&&, Allocator )
-> flat_map</*range-key-type*/<R>, /*range-mapped-type*/<R>,
std::less</*range-key-type*/<R>>,
std::vector</*range-key-type*/<R>,
/*alloc-rebind*/<Allocator,
/*range-key-type*/<R>>>,
std::vector</*range-mapped-type*/<R>,
/*alloc-rebind*/<Allocator,
/*range-mapped-type*/<R>>>>;
```
_(since C++23)_

```cpp
template< class Key, class T, class Compare = std::less<Key> >
flat_map( std::initializer_list<pair<Key, T>>, Compare = Compare() )
-> flat_map<Key, T, Compare>;
```
_(since C++23)_

```cpp
template< class Key, class T, class Compare = std::less<Key> >
flat_map( std::sorted_unique_t, std::initializer_list<pair<Key, T>>,
Compare = Compare() )
-> flat_map<Key, T, Compare>;
```
_(since C++23)_

## Example
This section is incompleteReason: no example
