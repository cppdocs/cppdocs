---
title: "std::unordered_set<Key,Hash,KeyEqual,Allocator>::insert"
source_path: "cpp/container/unordered_set/insert"
category: "container"
since: "C++11"
---

Inserts element(s) into the container, if the container doesn't already contain an element with an equivalent key.

## Declarations
```cpp
std::pair<iterator,bool> insert( const value_type& value );
```
_(since C++11)_

```cpp
std::pair<iterator,bool> insert( value_type&& value );
```
_(since C++11)_

```cpp
iterator insert( const_iterator hint, const value_type& value );
```
_(since C++11)_

```cpp
iterator insert( const_iterator hint, value_type&& value );
```
_(since C++11)_

```cpp
template< class InputIt >
void insert( InputIt first, InputIt last );
```
_(since C++11)_

```cpp
void insert( std::initializer_list<value_type> ilist );
```
_(since C++11)_

```cpp
insert_return_type insert( node_type&& nh );
```
_(since C++17)_

```cpp
iterator insert( const_iterator hint, node_type&& nh );
```
_(since C++17)_

```cpp
template< class K >
std::pair<iterator, bool> insert( K&& obj );
```
_(since C++23)_

```cpp
template< class K >
iterator insert( const_iterator hint, K&& obj );
```
_(since C++23)_

## Parameters
- `hint`: iterator, used as a suggestion as to where to insert the content
- `value`: element value to insert
- `first, last`: range of elements to insert
- `ilist`: initializer list to insert the values from
- `nh`: a compatible node handle
- `obj`: a value of any type that can be transparently compared with a key

## Notes
The hinted insert (3,4) does not return a boolean in order to be signature-compatible with positional insert on sequential containers, such as [std::vector::insert](/cpp/container/vector/insert/). This makes it possible to create generic inserters such as [std::inserter](/cpp/iterator/inserter/). One way to check success of a hinted insert is to compare [size()](/cpp/container/unordered_set/size/) before and after.

## Example
```cpp
#include <array>
#include <iostream>
#include <unordered_set>
 
std::ostream& operator<<(std::ostream& os, std::unordered_set<int> const& s)
{
    for (os << '[' << s.size() << "] { "; int i : s)
        os << i << ' ';
    return os << "}\n";
}
 
int main ()
{
    std::unordered_set<int> nums{2, 3, 4};
 
    std::cout << "1) Initially: " << nums << std::boolalpha;
    auto p = nums.insert(1); // insert element, overload (1)
    std::cout << "2) '1' was inserted: " << p.second << '\n';
    std::cout << "3) After insertion: " << nums;
 
    nums.insert(p.first, 0); // insert with hint, overload (3)
    std::cout << "4) After insertion: " << nums;
 
    std::array<int, 4> a = {10, 11, 12, 13};
    nums.insert(a.begin(), a.end()); // insert range, overload (5)
    std::cout << "5) After insertion: " << nums;
 
    nums.insert({20, 21, 22, 23}); // insert initializer_list, (6)
    std::cout << "6) After insertion: " << nums;
 
    std::unordered_set<int> other_nums = {42, 43};
    auto node = other_nums.extract(other_nums.find(42));
    nums.insert(std::move(node)); // insert node, overload (7)
    std::cout << "7) After insertion: " << nums;
 
    node = other_nums.extract(other_nums.find(43));
    nums.insert(nums.begin(), std::move(node)); // insert node with hint, (8)
    std::cout << "8) After insertion: " << nums;
}
```

## See also
- [emplace](/cpp/container/unordered_set/emplace/)
- [emplace_hint](/cpp/container/unordered_set/emplace_hint/)
- [inserter](/cpp/iterator/inserter/)
- [std::insert_iterator](/cpp/iterator/insert_iterator/)
