---
title: "deduction guides for std::flat_multimap"
source_path: "cpp/container/flat_multimap/deduction_guides"
header: "<flat_map>"
category: "container"
since: "C++23"
---

These [deduction guides](/cpp/language/ctad/) are provided for to allow deduction from:

## Declarations
```cpp
template< class KeyContainer, class MappedContainer,
class Compare = std::less<typename KeyContainer::value_type> >
flat_multimap( KeyContainer, MappedContainer, Compare = Compare() )
-> flat_multimap<typename KeyContainer::value_type,
typename MappedContainer::value_type,
Compare, KeyContainer, MappedContainer>;
```
_(since C++23)_

```cpp
template< class KeyContainer, class MappedContainer, class Allocator >
flat_multimap( KeyContainer, MappedContainer, Allocator )
-> flat_multimap<typename KeyContainer::value_type,
typename MappedContainer::value_type,
std::less<typename KeyContainer::value_type>,
KeyContainer, MappedContainer>;
```
_(since C++23)_

```cpp
template< class KeyContainer, class MappedContainer,
class Compare, class Allocator >
flat_multimap( KeyContainer, MappedContainer, Compare, Allocator )
-> flat_multimap<typename KeyContainer::value_type,
typename MappedContainer::value_type,
Compare, KeyContainer, MappedContainer>;
```
_(since C++23)_

```cpp
template< class KeyContainer, class MappedContainer,
class Compare = std::less<typename KeyContainer::value_type> >
flat_multimap( std::sorted_equivalent_t, KeyContainer, MappedContainer,
Compare = Compare() )
-> flat_multimap<typename KeyContainer::value_type,
typename MappedContainer::value_type,
Compare, KeyContainer, MappedContainer>;
```
_(since C++23)_

```cpp
template< class KeyContainer, class MappedContainer, class Allocator >
flat_multimap( std::sorted_equivalent_t, KeyContainer, MappedContainer,
Allocator )
-> flat_multimap<typename KeyContainer::value_type,
typename MappedContainer::value_type,
std::less<typename KeyContainer::value_type>,
KeyContainer, MappedContainer>;
```
_(since C++23)_

```cpp
template< class KeyContainer, class MappedContainer,
class Compare, class Allocator>
flat_multimap( std::sorted_equivalent_t, KeyContainer, MappedContainer,
Compare, Allocator )
-> flat_multimap<typename KeyContainer::value_type,
typename MappedContainer::value_type,
Compare, KeyContainer, MappedContainer>;
```
_(since C++23)_

```cpp
template< class InputIter,
class Compare = std::less</*iter-key-type*/<InputIter>> >
flat_multimap( InputIter, InputIter, Compare = Compare() )
-> flat_multimap</*iter-key-type*/<InputIter>,
/*iter-mapped-type*/<InputIter>, Compare>;
```
_(since C++23)_

```cpp
template< class InputIter,
class Compare = std::less</*iter-key-type*/<InputIter>> >
flat_multimap( std::sorted_equivalent_t, InputIter, InputIter,
Compare = Compare() )
-> flat_multimap</*iter-key-type*/<InputIter>,
/*iter-mapped-type*/<InputIter>, Compare>;
```
_(since C++23)_

```cpp
template< ranges::input_range R,
class Compare = std::less</*range-key-type*/<R>>,
class Allocator = allocator<byte> >
flat_multimap( std::from_range_t, R&&, Compare = Compare(),
Allocator = Allocator() )
-> flat_multimap</*range-key-type*/<R>, /*range-mapped-type*/<R>, Compare,
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
flat_multimap( std::from_range_t, R&&, Allocator )
-> flat_multimap</*range-key-type*/<R>, /*range-mapped-type*/<R>,
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
flat_multimap( std::initializer_list<pair<Key, T>>, Compare = Compare() )
-> flat_multimap<Key, T, Compare>;
```
_(since C++23)_

```cpp
template< class Key, class T, class Compare = std::less<Key> >
flat_multimap( std::sorted_equivalent_t, std::initializer_list<pair<Key, T>>,
Compare = Compare() )
-> flat_multimap<Key, T, Compare>;
```
_(since C++23)_

## Example
This section is incompleteReason: no example
