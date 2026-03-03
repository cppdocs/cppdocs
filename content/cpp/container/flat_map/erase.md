---
title: "std::flat_map<Key,T,Compare,KeyContainer,MappedContainer>::erase"
source_path: "cpp/container/flat_map/erase"
category: "container"
since: "C++23"
---

Removes specified elements from the container.

## Declarations
```cpp
iterator erase( iterator position );
```
_(since C++23)_

```cpp
iterator erase( const_iterator pos );
```
_(since C++23)_

```cpp
iterator erase( const_iterator first, const_iterator last );
```
_(since C++23)_

```cpp
size_type erase( const Key& key );
```
_(since C++23)_

```cpp
template< class K >
size_type erase( K&& x );
```
_(since C++23)_

## Parameters
- `pos`: iterator to the element to remove
- `first, last`: range of elements to remove
- `key`: key value of the elements to remove
- `x`: a value of any type that can be transparently compared with a key denoting the elements to remove

## Example
```cpp
#include <flat_map>
#include <iostream>
 
int main()
{
    std::flat_map<int, std::string> c =
    {
        {1, "one"}, {2, "two"}, {3, "three"},
        {4, "four"}, {5, "five"}, {6, "six"}
    };
 
    // erase all odd numbers from c
    for (auto it = c.begin(); it != c.end();)
    {
        if (it->first % 2 != 0)
            it = c.erase(it);
        else
            ++it;
    }
 
    for (auto& p : c)
        std::cout << p.second << ' ';
    std::cout << '\n';
}
```

## See also
- [clear](/cpp/container/flat_map/clear/)
