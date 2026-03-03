---
title: "std::flat_set<Key,Compare,KeyContainer>::erase"
source_path: "cpp/container/flat_set/erase"
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
#include <flat_set>
#include <iostream>
 
int main()
{
    std::flat_set<int> c = {1, 2, 3, 4, 1, 2, 3, 4};
 
    auto print = [&c]
    {
        std::cout << "c = { ";
        for (int n : c)
            std::cout << n << ' ';
        std::cout << "}\n";
    };
    print();
 
    std::cout << "Erase all odd numbers:\n";
    for (auto it = c.begin(); it != c.end();)
    {
        if (*it % 2 != 0)
            it = c.erase(it);
        else
            ++it;
    }
    print();
 
    std::cout << "Erase 1, erased count: " << c.erase(1) << '\n';
    std::cout << "Erase 2, erased count: " << c.erase(2) << '\n';
    std::cout << "Erase 2, erased count: " << c.erase(2) << '\n';
    print();
}
```

## See also
- [clear](/cpp/container/flat_set/clear/)
