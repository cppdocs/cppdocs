---
title: "std::back_insert_iterator<Container>::operator="
source_path: "cpp/iterator/back_insert_iterator/operator"
aliases:
  - "/cpp/iterator/back_insert_iterator/operator&/"
category: "iterator"
since: "C++20"
---

Inserts the given value value to the container.

## Declarations
```cpp
back_insert_iterator<Container>&
operator=( typename Container::const_reference value );
```
_(until C++11)_

```cpp
back_insert_iterator<Container>&
operator=( const typename Container::value_type& value );
```
_(since C++11) (until C++20)_

```cpp
constexpr back_insert_iterator<Container>&
operator=( const typename Container::value_type& value );
```
_(since C++20)_

```cpp
back_insert_iterator<Container>&
operator=( typename Container::value_type&& value );
```
_(since C++11) (until C++20)_

```cpp
constexpr back_insert_iterator<Container>&
operator=( typename Container::value_type&& value );
```
_(since C++20)_

## Parameters
- `value`: the value to insert

## Return value
*this

## Example
```cpp
#include <deque>
#include <iostream>
#include <iterator>
 
int main()
{
    std::deque<int> q;
    std::back_insert_iterator<std::deque<int>> it(q);
 
    for (int i = 0; i < 10; ++i)
        it = i; // calls q.push_back(i)
 
    for (auto& elem : q)
        std::cout << elem << ' ';
    std::cout << '\n';
}
```
