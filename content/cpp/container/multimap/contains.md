---
title: "std::multimap<Key,T,Compare,Allocator>::contains"
source_path: "cpp/container/multimap/contains"
category: "container"
since: "C++20"
---

1) Checks if there is an element with key equivalent to key in the container.

## Declarations
```cpp
bool contains( const Key& key ) const;
```
_(since C++20)_

```cpp
template< class K >
bool contains( const K& x ) const;
```
_(since C++20)_

## Parameters
- `key`: key value of the element to search for
- `x`: a value of any type that can be transparently compared with a key

## Return value
true if there is such an element, otherwise false.

## Example
```cpp
#include <iostream>
#include <map>
 
int main()
{
    std::multimap<int, char> example{{1, 'a'}, {2, 'b'}};
 
    for (int x : {2, 5})
        if (example.contains(x))
            std::cout << x << ": Found\n";
        else
            std::cout << x << ": Not found\n";
}
```

## See also
- [find](/cpp/container/multimap/find/)
- [count](/cpp/container/multimap/count/)
- [equal_range](/cpp/container/multimap/equal_range/)
