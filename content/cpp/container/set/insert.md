---
title: "std::set<Key,Compare,Allocator>::insert"
source_path: "cpp/container/set/insert"
category: "container"
since: "C++11"
---

Inserts element(s) into the container, if the container doesn't already contain an element with an equivalent key.

## Declarations
```cpp
std::pair<iterator, bool> insert( const value_type& value );
```

```cpp
std::pair<iterator, bool> insert( value_type&& value );
```
_(since C++11)_

```cpp
iterator insert( iterator pos, const value_type& value );
```
_(until C++11)_

```cpp
iterator insert( const_iterator pos, const value_type& value );
```
_(since C++11)_

```cpp
iterator insert( const_iterator pos, value_type&& value );
```
_(since C++11)_

```cpp
template< class InputIt >
void insert( InputIt first, InputIt last );
```

```cpp
void insert( std::initializer_list<value_type> ilist );
```
_(since C++11)_

```cpp
insert_return_type insert( node_type&& nh );
```
_(since C++17)_

```cpp
iterator insert( const_iterator pos, node_type&& nh );
```
_(since C++17)_

```cpp
template< class K >
std::pair<iterator, bool> insert( K&& x );
```
_(since C++23)_

```cpp
template< class K >
iterator insert( const_iterator pos, K&& x );
```
_(since C++23)_

## Parameters
- `pos`: iterator to the position before which the new element will be inserted
- `value`: element value to insert
- `first, last`: range of elements to insert
- `ilist`: initializer list to insert the values from
- `nh`: a compatible node handle
- `x`: a value of any type that can be transparently compared with a key

## Notes
The hinted insert (3,4) does not return a boolean in order to be signature-compatible with positional insert on sequential containers, such as [std::vector::insert](/cpp/container/vector/insert/). This makes it possible to create generic inserters such as [std::inserter](/cpp/iterator/inserter/). One way to check success of a hinted insert is to compare [size()](/cpp/container/set/size/) before and after.

The overloads ([5,6](#Version_5)) are often implemented as a loop that calls the overload ([3](#Version_3)) with [end()](/cpp/container/set/end/) as the hint; they are optimized for appending a sorted sequence (such as another [std::set](/cpp/container/set/)) whose smallest element is greater than the last element in *this.

## Example
```cpp
#include <cassert>
#include <iostream>
#include <set>
 
int main()
{
    std::set<int> set;
 
    auto result_1 = set.insert(3);
    assert(result_1.first != set.end()); // it is a valid iterator
    assert(*result_1.first == 3);
    if (result_1.second)
        std::cout << "insert done\n";
 
    auto result_2 = set.insert(3);
    assert(result_2.first == result_1.first); // same iterator
    assert(*result_2.first == 3);
    if (!result_2.second)
        std::cout << "no insertion\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 233 | C++98 | pos was just a hint, it could be totally ignored | the insertion is required tobe as close as possible to theposition just prior to pos |
| LWG 264 | C++98 | the complexity of overload (5) was required to be linear ifthe range [first, last) is sorted according to Compare | removed the linear requirementin this special case |
| LWG 316 | C++98 | in the return value of overload (1), it was not specifiedwhich bool value indicates a successful insertion | success isindicated by true |

## See also
- [emplace](/cpp/container/set/emplace/)
- [emplace_hint](/cpp/container/set/emplace_hint/)
- [inserter](/cpp/iterator/inserter/)
- [std::insert_iterator](/cpp/iterator/insert_iterator/)
