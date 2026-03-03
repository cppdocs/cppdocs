---
title: "std::flat_set<Key,Compare,KeyContainer>::insert"
source_path: "cpp/container/flat_set/insert"
category: "container"
since: "C++23"
---

Inserts element(s) into the container, if the container does not already contain an element with an equivalent key.

## Declarations
```cpp
std::pair<iterator, bool> insert( const value_type& value );
```
_(since C++23)_

```cpp
std::pair<iterator, bool> insert( value_type&& value );
```
_(since C++23)_

```cpp
iterator insert( const_iterator pos, const value_type& value );
```
_(since C++23)_

```cpp
iterator insert( const_iterator pos, value_type&& value );
```
_(since C++23)_

```cpp
template< class K >
iterator insert( const_iterator pos, K&& x );
```
_(since C++23)_

```cpp
template< class InputIt >
void insert( InputIt first, InputIt last );
```
_(since C++23)_

```cpp
template< class K >
std::pair<iterator, bool> insert( K&& x );
```
_(since C++23)_

```cpp
template< class InputIt >
void insert( std::sorted_unique_t, InputIt first, InputIt last );
```
_(since C++23)_

```cpp
void insert( std::initializer_list<key_type> ilist );
```
_(since C++23)_

```cpp
void insert( std::sorted_unique_t s, std::initializer_list<key_type> ilist );
```
_(since C++23)_

## Parameters
- `pos`: iterator to the position before which the new element will be inserted
- `value`: element value to insert
- `first, last`: range of elements to insert
- `ilist`: initializer list to insert the values from
- `x`: a value of any type that can be transparently compared with a key
- `s`: a disambiguation tag indicating that the input sequence is sorted (with respect to compare) and contains only unique elements

## Notes
The hinted insert (3-5) does not return a boolean in order to be signature-compatible with positional insert on sequential containers, such as [std::vector::insert](/cpp/container/vector/insert/). This makes it possible to create generic inserters such as [std::inserter](/cpp/iterator/inserter/). One way to check success of a hinted insert is to compare [size()](/cpp/container/flat_set/size/) before and after.

## Example
```cpp
#include <cassert>
#include <flat_set>
#include <iostream>
 
int main()
{
    std::flat_set<int> set;
 
    auto result_1 = set.insert(3);
    assert(result_1.first != set.end()); // it is a valid iterator
    assert(*result_1.first == 3);
    if (result_1.second)
        std::cout << "insert done\n";
 
    auto result_2 = set.insert(3);
    assert(result_2.first == result_1.first); // the same iterator
    assert(*result_2.first == 3);
    if (!result_2.second)
        std::cout << "no insertion\n";
}
```

## See also
- [emplace](/cpp/container/flat_set/emplace/)
- [emplace_hint](/cpp/container/flat_set/emplace_hint/)
- [inserter](/cpp/iterator/inserter/)
- [std::insert_iterator](/cpp/iterator/insert_iterator/)
