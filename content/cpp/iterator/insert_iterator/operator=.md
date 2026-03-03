---
title: "std::insert_iterator<Container>::operator="
source_path: "cpp/iterator/insert_iterator/operator"
aliases:
  - "/cpp/iterator/insert_iterator/operator&/"
category: "iterator"
since: "C++20"
---

Inserts the given value value to the container.

## Declarations
```cpp
insert_iterator<Container>&
operator=( typename Container::const_reference value );
```
_(until C++11)_

```cpp
insert_iterator<Container>&
operator=( const typename Container::value_type& value );
```
_(since C++11) (until C++20)_

```cpp
constexpr insert_iterator<Container>&
operator=( const typename Container::value_type& value );
```
_(since C++20)_

```cpp
insert_iterator<Container>&
operator=( typename Container::value_type&& value );
```
_(since C++11) (until C++20)_

```cpp
constexpr insert_iterator<Container>&
operator=( typename Container::value_type&& value );
```
_(since C++20)_

## Parameters
- `value`: the value to insert

## Return value
*this

## Notes
This function exploits the signature compatibility between hinted insert for associative containers (such as [std::set::insert](/cpp/container/set/insert/)) and positional insert for sequential containers (such as [std::vector::insert](/cpp/container/vector/insert/)).

## Example
```cpp
#include <deque>
#include <iostream>
#include <iterator>
 
int main()
{
    std::deque<int> q;
    std::insert_iterator<std::deque<int>> it(q, q.begin());
 
    for (int i = 0; i < 10; ++i)
        it = i; // inserts i
 
    for (auto& elem : q)
        std::cout << elem << ' ';
    std::cout << '\n';
}
```
