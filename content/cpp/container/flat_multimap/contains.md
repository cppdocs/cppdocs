---
title: "std::flat_multimap<Key,T,Compare,KeyContainer,MappedContainer>::contains"
source_path: "cpp/container/flat_multimap/contains"
category: "container"
since: "C++23"
---

1) Checks if there is an element with key equivalent to key in the container.

## Declarations
```cpp
bool contains( const Key& key ) const;
```
_(since C++23)_

```cpp
template< class K >
bool contains( const K& x ) const;
```
_(since C++23)_

## Parameters
- `key`: key value of the element to search for
- `x`: a value of any type that can be transparently compared with a key

## Return value
true if there is such an element, otherwise false.

## Example
```cpp
#include <iostream>
#include <flat_map>
 
int main()
{
    std::flat_multimap<int, char> example{{1, 'a'}, {2, 'b'}};
 
    for (int x : {2, 5})
        if (example.contains(x))
            std::cout << x << ": Found\n";
        else
            std::cout << x << ": Not found\n";
}
```

## See also
- [find](/cpp/container/flat_multimap/find/)
- [count](/cpp/container/flat_multimap/count/)
- [equal_range](/cpp/container/flat_multimap/equal_range/)
